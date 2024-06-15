const Diary = require('../models/diaryModel')

async function getAllPosts(req, res) {
  try {
    const posts = await Diary
      .find({})
      .sort({ createdAt: -1 })
      .populate('user', 'username fullName profilePicture')
    res.status(200).json({ success: true, data: posts })
  } catch (error) {
    res.status(400).json({ error })
  }
}

async function getPostById(req, res) {
  const postId = req.params.id
  try {
    const post = await Diary.findById(postId)
    res.status(200).json({ success: true, data: post })
  } catch (error) {
    res.status(400).json({ error })
  }
}

async function createPost(req, res) {
  const { user, text, media, privacy } = req.body
  try {
    const post = await Diary.create({ user, text, media, privacy })
    await post.populate('user', 'username fullName profilePicture');
    res.status(200).json({ success: true, data: post })
  } catch (error) {
    res.status(400).json({ error, message: "Could not create post" })
  }
}

async function deletePost(req, res) {
  const postId = req.params.id
  try {
    const post = await Diary.findByIdAndDelete(postId)
    res.status(200).json({ success: true, data: post.id, message: "Diary deleted successfully" })
  } catch (error) {
    res.status(400).json({ error, message: "Diary could not be found" })
  }
}

async function getUserPosts(req, res) {
  const user = req.params.id
  try {
    const userPosts = await Diary.find({ user }).sort({ createdAt: -1 })
      .populate('user', 'username fullName profilePicture')
    res.status(200).json({ success: true, data: userPosts, message: "User posts found", })
  } catch (error) {
    res.status(400).json({ error })
  }
}

async function updatePrivacy(req, res) {
  const { diaryId, isPrivate } = req.body
  try {
    const diary = await Diary.findById(diaryId).select('privacy');
    diary.privacy = isPrivate;
    const updatedDiary = await diary.save();

    res.status(200).json({ success: true, data: updatedDiary });
  } catch (error) {
    res.status(400).json({ error, message: 'Could not toggle private status' });
  }
}

async function updateUpvoteCount(req, res) {
  const { userId } = req.body
  try {
    const post = await Diary.findById(req.params.id).select('upvotes')

    if (!post.upvotes.includes(userId)) {
      await post.updateOne({ $push: { upvotes: userId } })
      res.status(200).json({ success: true, data: post, message: "Post liked" })
    }
    else {
      await post.updateOne({ $pull: { upvotes: userId } })
      res.status(200).json({ success: true, data: post, message: "Post  UN-liked" })
    }
  } catch (error) {
    res.status(500).json(error)
  }

}

module.exports = { getAllPosts, getPostById, createPost, updatePrivacy, updateUpvoteCount, deletePost, getUserPosts }