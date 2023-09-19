import React from 'react'
import ThemeToggleButton from './ThemeToggleButton'
import UserButton from './UserButton'
// import { Link } from 'react-router-dom'
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   navigationMenuTriggerStyle,
// } from './ui/navigation-menu'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <header className='flex justify-between items-center h-20 px-8 sticky top-0 z-50 bg-card'>
        <h1 className='text-3xl font-bold'>Chat App</h1>
        <div className='flex gap-4'>
          <ThemeToggleButton />
          <UserButton urlAfterLogout='/login' />
        </div>
        {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to='/docs'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
      </header>
    </>
  )
}

export default Header
