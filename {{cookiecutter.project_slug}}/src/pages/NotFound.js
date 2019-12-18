import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default _ => {
  return (
    <Container>
      <Title>404 ~ page not found!</Title>
      <StyledLink to='/'>Go to homepage</StyledLink>
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

const Title = styled.h1`
  margin-top: 0px;
  text-transform: uppercase;
`

const StyledLink = styled(Link)`
  display: block;
  position: relative;
  z-index: 1;
`
