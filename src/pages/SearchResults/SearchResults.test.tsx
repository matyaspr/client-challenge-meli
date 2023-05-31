import { screen, render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { SearchResults } from '.'

const MockResults = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <SearchResults />
      </HelmetProvider>
    </BrowserRouter>
  )
}

describe('Página <Results />', () => {
  describe('Si no contiene nada en la URL', () => {
    beforeEach(() => {
      render(<MockResults />)
    })

    test('Renders a spinner when it has not finished loading', () => {
      const spinner = screen.getByText('Buscando...')
      expect(spinner).toBeInTheDocument()
    })

    test('Displays an error if a search term is not passed to it', async () => {
      const errormsg = await screen.findByRole('heading', { name: 'Ocurrió un error' })
      expect(errormsg).toBeInTheDocument()
    })
  })
})
