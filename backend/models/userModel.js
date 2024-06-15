const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    minLength: 4,
    maxLength: 20,
    unique: true,
    required: true
  },
  fullName: {
    type: String,
    minLength: 3,
    maxLength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 64,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  dateOfBirth: {
    type: Date
  },
  loginTimes: [{
    type: Date
  }],
  completedChallenges: [{
    challengeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Challenge'
    },
    completionDate: {
      type: Date
    }
  }],
  expectedGraduationYear: {
    type: Number,
    default: 0,
  },
  education: {
    type: String,
    default: "",
  },
  skills: {
    type: [String]
  },
  workExperience: {
    type: [String]
  },
  profilePicture: {
    type: String, 
    defaultValue: ""
  },
  bio:{
    type: String,
    default: " "
  }
}, { timestamps: true });


userSchema.statics.signup = async function (username, email, password) {

  // validation 
  if (!email || !password) {
    throw Error('Required fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email invalid')
  }
  if (!validator.isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 })) {
    throw Error('Password not strong enough')
  }

  const emailExists = await this.findOne({ email })
  const usernamExists = await this.findOne({ username })

  if (usernamExists) {
    throw Error('This username is already in use')
  } else if (emailExists) {
    throw Error('There is another account with this email')
  }

  const salt = await bcrypt.genSalt(5)
  const hash = await bcrypt.hash(password, salt)

  return hash
}

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('Required fields must be filled')
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw Error('Account not found')
  }
  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }
  return user
}
// generate password hash
userSchema.statics.generateHash = async function (password) {
  if (!validator.isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 })) {
    throw Error('Password not strong enough')
  }

  const salt = await bcrypt.genSalt(5)
  const hash = await bcrypt.hash(password, salt)

  return hash
}

const User = mongoose.model("User", userSchema);

module.exports = User;
