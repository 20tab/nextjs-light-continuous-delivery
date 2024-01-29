import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import React from 'react'

import themes from '@/styles/themes'

import type { ReactElement } from 'react'

export const renderWithWrappers = (
  element: ReactElement,
) => {
  return render(
    <ThemeProvider theme={themes.light}>
      {element}
    </ThemeProvider>
  ).container
}
