import ThemeToggleButton from '@/components/ThemeToggleButton'
import { useAppSelector } from '@/redux/hooks'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  const user = useAppSelector((state) => state.auth.user)

  return (
    <>
      <div className='absolute right-4 top-4'>
        <ThemeToggleButton />
      </div>
      <Outlet />
    </>
  )
}
