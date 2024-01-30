import { expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import React from 'react'

import { Navbar } from '@/components/Navbar'

test('Navbar renders correctly', () => {
  render(<Navbar />)
  expect(screen.getByRole('img')).toBeTruthy()
})
