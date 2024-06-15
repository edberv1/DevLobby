const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
    challengeName:{
        type: String,
        required: true,
        unique: true
    },
    challengeDescription:{
        type: String,
        required: true
    },
    challengeDifficulty:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    theoretical:{
        type: String,
        required: true
    },
    rightAnswer:{
        type: String,
    },
    wrongAnswer1:{
        type: String,
    },
    wrongAnswer2:{
        type: String,
    },
    estimatedTime:{
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Challenge', challengeSchema);
