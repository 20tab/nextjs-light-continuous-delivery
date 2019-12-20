import React from 'react'

import { Container, Title, StyledLink as Link } from './style'

export default _ => {
  return (
    <Container>
      <Title>404 ~ page not found!</Title>
      <Link data-testid='homepageLink' to='/'>Go to homepage</Link>
    </Container>
  )
}
