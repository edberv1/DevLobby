const express = require('express')
const router = express.Router()
const { protect } = require("../middleware/authMiddleware");
const { createChall, getChallenges, getChallengeById, updateChallenge, deleteChallenge, getDailyChallenges  } = require('../controllers/challengeControllers')

//get challenges completed
router.get('/getDailyChallenges', protect, getDailyChallenges)

// create challenge
router.post('/', createChall);

// get all challenges
router.get('/', getChallenges);

// get challenge by ID
router.get('/:id', getChallengeById);

// update challenge
router.put('/:id', updateChallenge);

// delete challenge
router.delete('/:id', deleteChallenge);

module.exports = router