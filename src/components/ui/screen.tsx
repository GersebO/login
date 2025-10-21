"use client";
import React from 'react'
import Header from './header'
import Content  from './content'

import { useUI,useUser } from '@/store/hooks'

interface ScreenProps {
  children: React.ReactNode
}

const Screen = ({children}: ScreenProps) => {

  const { ui  } = useUI();
  const { user } = useUser();
  return (
    <div className={'h-full bg-blue-100'}>
    <Header>
      <div>{ui?.title || ''}</div>
      <div>{user?.name || ''}</div>
      </Header>
    <Content>{children}</Content>
    </div>
  )
}

export default Screen