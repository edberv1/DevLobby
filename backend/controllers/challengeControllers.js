const createChallenge = require('../models/challengeModel');
const moment = require('moment');

const createChall = async (req, res) => {
    try {
        const newChallenge = new createChallenge(req.body);
        await newChallenge.save()
        .then((savedChallenge) => {
            console.log(savedChallenge);
            res.status(201).json({msg: 'Challenge created'});
        })
        .catch((error) => {
            console.log(error);
            if(error.code === "11000" || error.keyPattern.challengeName){
                res.status(400).json({msg: 'Challenge already exists'});
                return;
            }
            else{
                res.status(500).json({msg: 'Server error'});
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Server error'});
    }
}

const getChallenges = async (req, res) => {
    try {
        createChallenge.find()
        .then((challenges) => {
            res.status(200).json({challenges: challenges});
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({msg: 'Unable to get Challenges'});
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Server error'});
    }
}

const getChallengeById = async (req, res) => {
    try {
        createChallenge.findById(req.params.id)
        .then((challenge) => {
            res.status(200).json({challenge: challenge});
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({msg: 'Unable to get Challenge'});
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Server error'});
    }
}

const updateChallenge = async (req, res) => {
    try {
        const updatedChallenge = await createChallenge.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedChallenge) {
            return res.status(404).json({ msg: 'Challenge not found' });
        }

        res.status(200).json({ msg: 'Challenge updated', challenge: updatedChallenge });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Unable to update Challenge' });
    }
}

const deleteChallenge = async (req, res) => {
    try {
        const challenge = await createChallenge.findByIdAndDelete(req.params.id);

        if (!challenge) {
            return res.status(404).json({ msg: 'Challenge not found' });
        }

        res.status(200).json({ msg: 'Challenge deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Unable to delete Challenge' });
    }
}

const getDailyChallenges = async (req, res) => {
  try {
    let completions = [];
    for(let i = 6; i >= 0; i--) {
      const startOfDay = moment().subtract(i, 'days').startOf('day');
      const endOfDay = moment().subtract(i, 'days').endOf('day');

      const count = await createChallenge.countDocuments({
        userId: req.user._id,
        createdAt: {
          $gte: startOfDay.toDate(),
          $lte: endOfDay.toDate()
        }
      });

      completions.push({
        date: startOfDay.format('YYYY-MM-DD'),
        completed: count
      });
    }

    res.json(completions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.toString() });
  }
};


module.exports = { createChall, getChallenges, getChallengeById, updateChallenge, deleteChallenge, getDailyChallenges};