import React from 'react'
import {
  Open_Sans as OpenSans,
  Hepta_Slab as HeptaSlab
} from '@next/font/google'

import { Navbar } from '@/components/Navbar'

const baseFont = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-base'
})

const titleFont = HeptaSlab({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal'],
  variable: '--font-title'
})

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={`${titleFont.variable} ${baseFont.variable}`}>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
