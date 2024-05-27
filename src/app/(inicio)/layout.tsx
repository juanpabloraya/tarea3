'use client'

import React, { PropsWithChildren } from 'react'
import {
   Container,
} from '@mui/material'


const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth="sm">
      {children}
    </Container>
  )
}

export default Layout
