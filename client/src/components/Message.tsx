import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import React from 'react'
import { Card } from './ui/card'

interface MessageProps {
  message: Message
}

const Message: React.FC<MessageProps> = ({ message }) => {
  console.log(message)

  const user = useAppSelector((state) => state.auth.user)
  const sender =
    message.sender._id === user?._id ? 'You' : message.sender.username

  return (
    <div
      className={cn('flex', message.sender._id === user?._id && 'justify-end')}
    >
      <Card
        className={cn(
          'min-w-[18rem] max-w-md p-2 flex flex-col shrink text-white',
          message.sender._id === user?._id ? 'bg-primary' : 'notme'
        )}
      >
        <h3 className='text-sm font-bold mb-2 uppercase'>{sender}</h3>
        <p>{message.text}</p>
        <div className='self-end'>{message.formattedTime}</div>
      </Card>
    </div>
  )
}

export default Message
