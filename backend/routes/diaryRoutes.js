const express = require('express')
const router = express.Router()
const { getAllPosts, getPostById, createPost, updatePrivacy, updateUpvoteCount, deletePost, getUserPosts } = require('../controllers/diaryController')

router.get('/', getAllPosts) // getAllPosts

router.get('/:id', getPostById) // get Post by Id

router.post('/', createPost) // createPost

router.put('/private', updatePrivacy) // update post privacy by id

router.put('/:id/upvote', updateUpvoteCount) // update num of Post upvotes by id

router.delete('/:id', deletePost) // delete post by id

router.get('/user/:id', getUserPosts) // get all posts by a single user

module.exports = router