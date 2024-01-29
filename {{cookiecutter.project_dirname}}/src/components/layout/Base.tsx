import { ThemeProvider } from 'styled-components'
import React from 'react'

import { GlobalStyle } from '@/styles/GlobalStyle'
import { Navbar } from '@/components/Navbar'
import themes from '@/styles/themes'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={themes['light']}>
      <GlobalStyle />
      <Navbar />
      {children}
    </ThemeProvider>
  )
}

export default Layout
