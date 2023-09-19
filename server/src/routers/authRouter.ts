import bcrypt from 'bcrypt'
import express from 'express'
import { User, getUserByEmail, getUserByUsername } from '../models/User.ts'

const router = express.Router()

router.post('/register', async (req, res) => {
  const { email, password, username } = req.body

  if (!email || !password || !username) return res.status(400)

  if (await getUserByEmail(email))
    return res.json({ error: true, message: 'Email already exists' })
  if (await getUserByUsername(username))
    return res.json({ error: true, message: 'Username already exists' })

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = new User({
    email,
    password: hashedPassword,
    username,
  })

  await user.save()

  res.json({ error: false, user })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) return res.status(400)

  const user = await getUserByEmail(email)
  if (await bcrypt.compare(password, user.password))
    return res.json({ error: false, user })
  else
    return res
      .status(401)
      .json({ error: true, message: 'Wrong email or password' })
})

export default router
