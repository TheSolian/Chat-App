import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { createServer } from 'http'
import mongoose from 'mongoose'
import { Server } from 'socket.io'
import authRouter from './routers/authRouter.ts'
import chatRouter from './routers/chatRouter.ts'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/auth', authRouter)
app.use('/', chatRouter)

const httpServer = createServer(app)
mongoose.connect(
  'mongodb+srv://thesolian:Legs0505@cluster0.t0rdx5g.mongodb.net/chat-app'
)
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log('Socket connected: ', socket.id)

  socket.on('disconnect', () => {
    console.log('Socket disconnected: ', socket.id)
  })

  socket.on('message', (data) => {
    console.log(`Socket ${socket.id} sent message: `, data)
    socket.broadcast.emit('message', data)
  })
})

httpServer.listen(3000)
