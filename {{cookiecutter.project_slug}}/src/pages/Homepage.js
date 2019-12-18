import React from 'react'
import styled, { keyframes } from 'styled-components'

import logo from '../images/logo.svg'

export default _ => {
  return (
    <Container>
      <header>
        <Logo src={logo} alt='logo' />
        <p>REACT_API_URL: {window._env.REACT_API_URL}</p>
        <p>REACT_VAR_ONE: {window._env.REACT_VAR_ONE}</p>
      </header>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`
