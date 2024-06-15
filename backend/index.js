require('dotenv').config()
const express = require('express')
const { Server } = require('socket.io')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./routes/user')
const chatRoutes = require('./routes/chatRoutes')
const messageRoutes = require('./routes/messageRoutes')
const challengeRoutes = require('./routes/challengeRoutes')
const diaryRoutes = require('./routes/diaryRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const newsletterRoutes = require('./routes/newsletterRoutes')
const newsletterCron = require('./utils/newsletterCron')

connectDB()
const app = express()


// Increase payload size limit for JSON data (relating to the profile pic upload)
app.use(express.json({ limit: '500mb' }))
app.use(express.urlencoded({ limit: '500mb', extended: true, parameterLimit: 50000 }))
app.use(express.text({ limit: '200mb' }))

app.use(
  cors({
    origin: 'http://localhost:3001',
    credentials: true,
  }),
)
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


//Chat
app.get('/', (req, res) => {
  res.send('Api is Runing ')
})

// routes
app.use('/api/user', userRouter)
app.use('/api/chat', chatRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/challenge', challengeRoutes)
app.use('/api/diary', diaryRoutes)
app.use('/api/newsletter', newsletterRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connection to mongoDB successful')
  })
  .catch((err) => {
    console.log(err)
  })

const server = app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT} `)
})

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log(socket.id + ' connected')

  socket.on('join_room', (data) => {
    socket.join(data)
    console.log(`User with ID: ${socket.id} joined room: ${data}`)
  })

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data)
  })

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id)
  })
  app.use(notFound)
  app.use(errorHandler)
})
