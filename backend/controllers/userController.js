const User = require('../models/userModel')
const Token = require('../models/verificationTokenModel')
const Code = require('../models/sixDigitModel')
const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const sendMail = require('../utils/sendMail')
const moment = require('moment');
const nodemailer = require('nodemailer');
const Email = require('../models/emailModel');

const EMAIL_EXPIRATION_TIME = 60 * 1000;
const lastSentEmails = {};

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

function generateRandomCode(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
}

// verify token
const verifyToken = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    if (!user) {
      return res.status(400).send({ success: false, error: { message: "Invalid link, user not found" } });
    }

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });

    if (!token) {
      return res.status(400).send({ success: false, error: { message: "Invalid link, token not found." } });
    }

    await User.findOneAndUpdate(
      { _id: user._id },
      { $set: { verified: true } }
    );

    res.status(200).send({ success: true, message: "Email verified successfully" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error", err });
  }
};


// login admin
const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    if (user && user.isAdmin) {
      const token = createToken(user._id);
      res.status(200).json({ token, isAdmin: user.isAdmin });
    } else {
      res.status(401).json({ error: "Not authorized as admin" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    if (!user.verified) {
      const currentTime = Date.now();
      const lastSentTime = lastSentEmails[user._id] || 0;

      if (currentTime - lastSentTime > EMAIL_EXPIRATION_TIME) {
        Token.findOne({ userId: user._id })
          .then(async (verificationToken) => {
            if (!verificationToken) {
              verificationToken = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
              }).save();
            }
            const url = `${process.env.BASE_URL}/user/${user._id}/verify/${verificationToken.token}`;
            sendMail(user.email, "Verify your email", url);

            // Update the last sent time for this user
            lastSentEmails[user._id] = currentTime;

            return res.status(203).json({
              message:
                "You must be verified to login. A verification link is sent to your email.",
              user,
            });
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
          });
      } else {
        res.status(429).json({
          message:
            "Too many verification emails sent. Please wait before trying again.",
        });
      }
    } else {
      // times logged in 
      user.loginTimes.push(new Date());
      await user.save();
      
      //  create JWT token
      const token = createToken(user._id);
      res.status(200).json({ token, user });
    }
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

// signin up an user
const signupUser = async (req, res) => {
  const { username, email, password, isAdmin, name, lastName } = req.body;
  try {
    // check unique email and pw, then create hash
    const hash = await User.signup(username, email, password);
    const user = await User.create({
      username,
      name,
      lastName,
      email,
      password: hash,
      isAdmin,
    });

    // create verification token
    const token = await new Token({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    // create link for verification
    const url = `${process.env.BASE_URL}/user/${user._id}/verify/${token.token}`;

    // send link to newly created user
    await sendMail(user.email, "Verify your email", url);
    res.status(200).json({ email, user });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const sendResetCode = async (req, res) => {
  const { email } = req.body

  console.log(email)
  try {
    // check if there's an account with such email
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(400).json({ message: "User not found" })
      return
    }

    const currentTime = Date.now()
    const lastSentTime = lastSentEmails[user._id] || 0


    if (currentTime - lastSentTime > EMAIL_EXPIRATION_TIME) {
      // check if there's already a code and delete old one
      await Code.findOneAndDelete({ userId: user._id });

      // If no code exists, generate a new one
      const code = await new Code({
        userId: user._id,
        code: generateRandomCode(6),
      }).save();


      const subject = 'Your code for password reset is: ' + code.code

      // send link to newly created user
      await sendMail(user.email, "Check your code", subject)

      // Update the last sent time for this user
      lastSentEmails[user._id] = currentTime;

      res.status(200).json({ success: true, email, user })
    } else {
      res.status(429).json({ message: "Too many requests. Please wait a minute before trying again." });
    }

  } catch (err) {
    console.log(err)
    res.status(400).json({ error: err.message })
  }
}

const verifyResetCode = async (req, res) => {
  const { code, id } = req.body

  try {
    const codeFound = await Code.findOne({
      userId: id,
      code: code
    })

    if (codeFound) {
      res.json({ success: true, 'message': "We found the code in our DB", codeFound })
    } else {
      res.json({ "message": "Code doesn't match" })
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

// get users by name
const getUsersByName = async (req, res) => {
  const { name } = req.params;
  try {
    const users = await User.find({ name });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get user by id
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const userData = {
      //relevant info for profile displaying
      fullName: user.fullName,
      isAdmin: user.isAdmin,
      userId: user._id,
      username: user.username,
      email: user.email,
      expectedGraduationYear: user.expectedGraduationYear,
      education: user.education,
      skills: user.skills,
      workExperience: user.workExperience,
      profilePicture: user.profilePicture,
      bio: user.bio
    };
    

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


// get all users
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});


const resetPassword = async (req, res) => {
  const { id, password } = req.body

  const user = await User.findById(id);
  const newPasswordHash = await User.generateHash(password);
  user.password = newPasswordHash

  try {
    await user.save()
    res.status(200).json({ success: true, "message": "Password changed successfully" })
  } catch (error) {
    // Handle error if the password change operation fails
    res.status(200).json({ success: false, "message": "Password could not be changed successfully", error })
  }
}



// delete user by id
const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update user by id
const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { username, name, lastName, email, password, isAdmin, verified, dateOfBirth } = req.body; // Destructure fields from request body
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Update user fields
    user.username = username;
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.isAdmin = isAdmin;
    user.verified = verified;
    user.dateOfBirth = dateOfBirth;
    await user.save();
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//chart for registers
const getWeeklyRegistrations = async (req, res) => {
  try {
    let registrations = [];
    for(let i = 6; i >= 0; i--) {
      const startOfWeek = moment().subtract(i, 'weeks').startOf('week');
      const endOfWeek = moment().subtract(i, 'weeks').endOf('week');

      const count = await User.countDocuments({
        createdAt: {
          $gte: startOfWeek.toDate(),
          $lte: endOfWeek.toDate()
        }
      });

      registrations.push({
        week: `Week ${6 - i + 1}`,
        registrations: count
      });
    }

    res.json(registrations);

    console.log(registrations);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};


//chart for logins
const getDailyLogins = async (req, res) => {
  try {
    let logins = [];
    for(let i = 6; i >= 0; i--) {
      const startOfDay = moment().subtract(i, 'days').startOf('day');
      const endOfDay = moment().subtract(i, 'days').endOf('day');

      const count = await User.aggregate([
        { $unwind: "$loginTimes" },
        { $match: {
          loginTimes: {
            $gte: startOfDay.toDate(),
            $lte: endOfDay.toDate()
          }
        }},
        { $count: "logins" }
      ]);

      logins.push({
        date: startOfDay.format('YYYY-MM-DD'),
        logins: count.length > 0 ? count[0].logins : 0
      });
    }

    res.json(logins);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};


const contactUs = async (req, res) => {
  const { first_name, last_name, email, phone, message } = req.body;

  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5ea5ba57d76385",
      pass: "8a87f0cf3c866c"
    }
  });

  let mailOptions = {
    from: '5ea5ba57d76385@mailtrap.io',
    to: '5ea5ba57d76385@mailtrap.io', // This should be your Mailtrap email
    subject: `Message from ${first_name} ${last_name}`, // You can customize this
    text: `Message from ${first_name} ${last_name} (${email}):\n\n${message}`
  };

  transporter.sendMail(mailOptions, async function(error, info){
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      
      let email = new Email();
      await email.save();

      res.status(200).json({ success: true });
    }
  });
};


const getDailyFeedbacks = async (req, res) => {
  try {
    let emails = [];
    for(let i = 6; i >= 0; i--) {
      const startOfDay = moment().subtract(i, 'days').startOf('day');
      const endOfDay = moment().subtract(i, 'days').endOf('day');
      const count = await Email.countDocuments({
        sentAt: {
          $gte: startOfDay.toDate(),
          $lte: endOfDay.toDate()
        }
      });
      emails.push({
        date: startOfDay.format('YYYY-MM-DD'),
        emails: count
      });
    }
    res.json(emails);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Server Error: ${err.message}`);
  }
};

//updating profile data
const updateUserProfile = async (req, res) => {
  const { userId } = req.params;
  const { fullName, expectedGraduationYear, education, skills, workExperience, profilePicture, bio } = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, { 
      fullName, expectedGraduationYear, education, skills, workExperience, profilePicture, bio
    }, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  signupUser, loginUser, verifyToken, getUsersByName, getUserById, sendResetCode, adminLogin, verifyResetCode, resetPassword, allUsers, deleteUserById, updateUserById, getWeeklyRegistrations, getDailyLogins, contactUs, getDailyFeedbacks, updateUserProfile
}
