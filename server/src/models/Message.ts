import mongoose, { Schema } from 'mongoose'
import { IUser } from './User.ts'

const messageSchema = new Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    chat: { type: Schema.Types.ObjectId, ref: 'Chat' },
    text: String,
    sentAt: Date,
    formattedTime: String,
  },
  {
    versionKey: false,
  }
)

export interface IMessage extends Document {
  sender: IUser
  text: string
  sentAt: Date
  formattedTime: string
}

export const Message = mongoose.model<IMessage>('Message', messageSchema)
