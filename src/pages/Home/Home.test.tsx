import { screen, render, waitFor } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { Home } from '.'

const MockHome = () => (
  <HelmetProvider>
    <Home />
  </HelmetProvider>
)

describe('Page <Home />', () => {
  beforeEach(() => {
    render(<MockHome />)
  })

  it('Proper rendering', () => {
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })

  it('change title <head>', async () => {
    await waitFor(() => {
      expect(document.title).toEqual('Inicio | Mercado Libre')
    })
  })
})
