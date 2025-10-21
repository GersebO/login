import React from 'react'



interface HeaderProps {
  children: React.ReactNode
}
const Header = ({children}: HeaderProps) => {
  return (
    <div className={'flex items-center justify-between h-16 bg-pink-800 text-white px-4'}>{children}</div>
  )
}

export default Header