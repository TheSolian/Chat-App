import mongoose, { Document, Schema } from 'mongoose'

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  {
    versionKey: false,
  }
)

export interface IUser extends Document {
  username: string
  email: string
  password: string
}

export const User = mongoose.model<IUser>('User', userSchema)

export const getUser = () => User.find()
export const getUserByEmail = (email: string) => User.findOne({ email })
export const getUserByUsername = (username: string) =>
  User.findOne({ username })
