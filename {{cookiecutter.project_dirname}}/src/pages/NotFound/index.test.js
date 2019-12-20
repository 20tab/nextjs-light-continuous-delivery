import { render } from '@testing-library/react'

import withRouter from '../../utils/test/withRouter'
import NotFound from './index'

describe('NotFound renders', () => {
  let document

  beforeEach(() => {
    document = render(withRouter(NotFound))
  })

  it('error message', () => {
    const titleElement = document.getByText(/404 ~ page not found!/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('homepage link button', () => {
    const linkElement = document.getByTestId('homepageLink')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.href).toBe('http://localhost/')
  })
})
