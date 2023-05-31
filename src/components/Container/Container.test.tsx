import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Container } from '.'

describe('<Container />', () => {
  test('Render the children properly', () => {
    render(
      <Container>
        <h1>Título</h1>
      </Container>
    )
    const title = screen.getByRole('heading', { name: 'Título' })
    expect(title).toBeInTheDocument()
  })
})
