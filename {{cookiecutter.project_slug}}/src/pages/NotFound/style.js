import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  margin-top: 0px;
  text-transform: uppercase;
`

export const StyledLink = styled(Link)`
  display: block;
  position: relative;
  z-index: 1;
`
