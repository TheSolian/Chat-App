type Message = {
  _id: string
  sender: User
  text: string
  sentAt: Date
  formattedTime: string
}

type Chat = {
  _id: string
  name: string
  description: string
  type: 'group' | 'private'
  members: User[]
  messages: Message[]
}
