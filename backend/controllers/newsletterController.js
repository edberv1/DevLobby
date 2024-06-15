const Subscriber = require('../models/subscriberModel')
const sendMail = require('../utils/sendMail')

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body
    const newSubscriber = await Subscriber.create({ email })
    await sendMail(
      email,
      'Subscription Confirmed',
      'Thank you for subscribing to our newsletter!',
    )
    res
      .status(201)
      .json({ message: 'Subscription successful', subscriber: newSubscriber })
  } catch (error) {
    console.error('Subscribe Error:', error)
    let message = 'Error subscribing'
    if (error.code === 11000) {
      message = 'This email has already been subscribed.'
    } else if (error.message) {
      message = error.message
    }
    res.status(500).json({ message, error: error.toString() })
  }
}

exports.sendNewsletter = async () => {
  try {
    const subscribers = await Subscriber.find({})
    subscribers.forEach((subscriber) => {
      sendMail(
        subscriber.email,
        'Weekly Newsletter',
        'Here is your weekly newsletter content.',
      )
    })
  } catch (error) {
    console.error('Failed to send newsletters', error)
  }
}
