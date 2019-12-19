import React from 'react'
import { render } from '@testing-library/react'

import Homepage from './index'

describe('Homepage renders', () => {
  let document

  beforeEach(() => {
    document = render(<Homepage />)
  })

  it('20tab logo', () => {
    const image = document.getByTestId('logo')
    expect(image).toBeInTheDocument()
    expect(image.alt).toBe('logo')
  })
})
