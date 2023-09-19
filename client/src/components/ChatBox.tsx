import { formatMessageTime } from '@/lib/formatter'
import { socket } from '@/lib/socket'
import { useAppSelector } from '@/redux/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { nanoid } from 'nanoid'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Message from './Message'
import { Icons } from './icons'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'
import { ScrollArea } from './ui/scroll-area'

interface ChatBoxProps {
  messages: Message[]
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}

const formSchema = z.object({
  message: z.string().min(1),
})

const ChatBox: React.FC<ChatBoxProps> = ({ messages, setMessages }) => {
  const user = useAppSelector((state) => state.auth.user)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const date = new Date()
    const message: Message = {
      _id: nanoid(),
      sender: user!,
      text: values.message,
      sentAt: date,
      formattedTime: formatMessageTime(date),
    }

    console.log(message)

    setMessages((messages) => [...messages, message])
    socket.emit('message', message)
    form.reset()
  }

  return (
    <div className='h-custom p-4 flex flex-col justify-center'>
      <ScrollArea className='h-24 py-4 px-8 border rounded-lg grow'>
        <div className='flex flex-col gap-4'>
          {messages.map((message) => {
            return <Message key={message._id} message={message} />
          })}
        </div>
      </ScrollArea>
      <div className='py-4'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-4'>
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => {
                return (
                  <FormItem className='grow'>
                    <FormControl>
                      <Input
                        placeholder='Message...'
                        autoComplete='off'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )
              }}
            />
            <Button className='px-12'>
              <Icons.sendHorizonal />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ChatBox
