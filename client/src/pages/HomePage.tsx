import ChatBox from '@/components/ChatBox'
import { socket } from '@/lib/socket'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    socket.on('message', (message: Message) => {
      setMessages((messages) => [...messages, message])
    })
  }, [])

  return <ChatBox messages={messages} setMessages={setMessages} />
}
