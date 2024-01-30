import React from 'react'
import styles from '@/styles/navbar.module.css'

import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image
        src={`/images/logo.svg`}
        width='110'
        height='48'
        alt={'sito logo'}
      />
    </nav>
  )
}

export { Navbar }
