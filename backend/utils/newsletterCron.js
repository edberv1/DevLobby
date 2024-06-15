const cron = require('node-cron')
const { sendNewsletter } = require('../controllers/newsletterController')

// Cdo dite t'Diele ka mu qu the letter n10 AM
cron.schedule('0 10 * * 0', () => {
  console.log('Running a task every Sunday at 10 AM')
  sendNewsletter()
})

module.exports = cron
