import React from 'react'
import styles from '@/styles/index.module.css'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello World!</h1>
    </div>
  )
}

export default Home
