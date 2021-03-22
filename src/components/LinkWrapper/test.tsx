import { render, screen } from '@testing-library/react'

import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/vrau">Vrau</LinkWrapper>)

    const children = screen.getByText(/Vrau/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/vrau')
  })
})
