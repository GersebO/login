import React from 'react'

interface ContentProps {
  children: React.ReactNode
}

const Content = ({children}: ContentProps) => {
  return (
    <div className={'h-[calc(100vh-4rem)] bg-gray-100 overflow-auto p-4 text-gray-800'}>{children}</div>
  )
}

export default Content