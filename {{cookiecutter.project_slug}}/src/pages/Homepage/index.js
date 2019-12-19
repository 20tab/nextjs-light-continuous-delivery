import React from 'react'

import logo from '../images/logo.svg'
import { Container, Logo } from './style'

export default _ => {
  return (
    <Container>
      <Logo data-testid='logo' src={logo} alt='logo' />
    </Container>
  )
}
