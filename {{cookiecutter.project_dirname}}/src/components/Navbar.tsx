import React from 'react'
import styled from 'styled-components'

import Image from 'next/image'

const Navbar = () => {
  return (
    <Nav>
      <Image
        src={`/images/logo-light.svg`}
        width='110'
        height='48'
        alt={'sito logo'}
      />
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`

export { Navbar }
