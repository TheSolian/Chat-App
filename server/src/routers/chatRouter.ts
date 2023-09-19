import express from 'express'
import { Chat, IChat } from '../models/Chat.ts'
import { IUser } from '../models/User.ts'

const router = express.Router()

router.get('/chats/create', async (req, res) => {
  const { chat, user } = req.body as { user: IUser; chat: IChat }

  const newChat = new Chat({
    name: chat.name,
    description: chat.description,
    type: chat.type,
    members: chat.members,
    messages: chat.messages,
  })

  newChat.members.push(user)

  await newChat.save()

  res.json({ error: false, chat })
})

export default router
