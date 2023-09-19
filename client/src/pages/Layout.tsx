import ChatList from '@/components/ChatList'
import Header from '@/components/Header'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import { Navigate, Outlet } from 'react-router-dom'

export default function RootLayout() {
  const user = useAppSelector((state) => state.auth.user)

  return user !== null ? (
    <div className=''>
      <Header />
      <main className='flex'>
        <div className='w-3/12 h-custom'>
          <ChatList />
        </div>
        <div className={cn('grow h-custom')}>
          <Outlet />
        </div>
      </main>
    </div>
  ) : (
    <Navigate to='/login' />
  )
}
