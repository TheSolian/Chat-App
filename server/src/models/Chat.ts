import mongoose, { Schema } from 'mongoose'
import { IMessage } from './Message.ts'
import { IUser } from './User.ts'

const chatSchema = new Schema(
  {
    name: String,
    description: String,
    type: String,
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  },
  {
    versionKey: false,
  }
)

export interface IChat extends Document {
  name: string
  description: string
  type: 'group' | 'private'
  members: IUser[]
  messages: IMessage[]
}

export const Chat = mongoose.model<IChat>('Chat', chatSchema)
