import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NavBar } from '.'
import { BrowserRouter } from 'react-router-dom'

export const MockNavbar: React.FC = () => (
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
)

beforeEach(() => {
  render(<MockNavbar />)
})

describe('<Navbar />', () => {
  test('Rendered on screen', () => {
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  test('Contains the component <SearchBar />', () => {
    const input = screen.getByPlaceholderText('Nunca dejes de buscar')
    expect(input).toBeInTheDocument()
  })
})
