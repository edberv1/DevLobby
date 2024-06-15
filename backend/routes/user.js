const express = require('express')
const router = express.Router()
const {
  loginUser,
  signupUser,
  verifyToken,
  getUsersByName,
  getUserById,
  sendResetCode,
  adminLogin,
  verifyResetCode,
  resetPassword,
  deleteUserById,
  allUsers,
  updateUserById,
  getWeeklyRegistrations,
  getDailyLogins,
  contactUs,
  getDailyFeedbacks,
  updateUserProfile,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

//get feedbacks
router.get('/getDailyFeedbacks', getDailyFeedbacks)

// get weeklsy registrations
router.get('/getWeeklyRegistrations', getWeeklyRegistrations)

//get daily logins
router.get('/getDailyLogins', getDailyLogins)

router.get('/:id/verify/:token', verifyToken)

// login route
router.post('/login', loginUser)

// admin login route
router.post('/admin/login', adminLogin)

// signup route
router.post('/signup', signupUser)

// get users by name
router.get('/name/:name', getUsersByName)

// get user by ID
router.get('/:id', getUserById)

// get all users
router.route('/').get(protect, allUsers)

// send 6 digit code
router.post('/req-reset', sendResetCode)

// verify 6 digit code
router.post('/verify-code', verifyResetCode)

// change user password
router.post('/new-password', resetPassword)

// delete user by id
router.delete('/:id', deleteUserById)

//update user
router.put('/:id', updateUserById)

router.post('/contactUs', contactUs)

//update user profile
router.put('/:userId/profile', updateUserProfile)

module.exports = router
