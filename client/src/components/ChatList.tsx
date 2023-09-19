import { DialogClose } from '@radix-ui/react-dialog'
import { nanoid } from 'nanoid'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { ScrollArea } from './ui/scroll-area'

interface ChatListProps {}

const ChatList: React.FC<ChatListProps> = () => {
  const [chats, setChats] = useState<Chat[]>([])

  useEffect(() => {
    const chats: Chat[] = [
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
      {
        _id: nanoid(),
        name: 'Chat 1',
        description: 'Chat 1 description',
        members: [],
        messages: [],
        type: 'private',
      },
    ]

    setChats(chats)
  }, [])

  function onChatCreate() {
    // const title = chatCreateInput.current?.value
    // if (title === '') return
    // const chat: Chat = {
    //   name: title!,
    //   description: '',
    //   members: [],
    //   messages: [],
    //   type: 'private',
    // }
  }

  return (
    <>
      <div className='h-custom p-4 flex flex-col justify-center'>
        <div className='h-16 w-full border rounded-tl-lg rounded-tr-lg flex justify-between items-center px-4'>
          <div className='text-xl font-semibold'>Your Chats</div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={'ghost'}>New Chat</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Chat</DialogTitle>
              </DialogHeader>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='title' className='text-right'>
                    Title
                  </Label>
                  <Input id='title' className='col-span-3' />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button onClick={onChatCreate}>Create</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <ScrollArea className='h-24 border border-t-0 rounded-br-lg rounded-bl-lg grow'>
          {chats.map((chat) => {
            return (
              <button
                key={chat._id}
                className='w-full text-start border-b p-4 cursor-pointer hover:bg-primary hover:text-white last-of-type:border-b-0'
              >
                <div>{chat.name}</div>
              </button>
            )
          })}
        </ScrollArea>
      </div>
    </>
  )
}

export default ChatList
