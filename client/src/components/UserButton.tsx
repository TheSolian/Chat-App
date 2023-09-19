import { useAppDispatch } from '@/redux/hooks'
import { logout } from '@/redux/slices/authSlice'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

interface UserButtonProps {
  urlAfterLogout?: string
}

const UserButton: React.FC<UserButtonProps> = ({ urlAfterLogout }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function handleClick() {
    dispatch(logout())
    navigate(urlAfterLogout || '/login')
  }
  return <Button onClick={handleClick}>Logout</Button>
}

export default UserButton
