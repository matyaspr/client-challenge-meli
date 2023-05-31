import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ProductDetail } from '.'
import { mockProduct } from './_mocks_'

describe('<ProductDetail />', () => {
  beforeEach(() => {
    render(<ProductDetail product={mockProduct} />)
  })

  test('Se renderiza correctamente', () => {
    const headings = screen.getAllByRole('heading')
    const img = screen.getByRole('img')
    const finalArray = [...headings, img]
    expect(finalArray.length).toBe(3)
  })

  test('Displays the image of the product', () => {
    const img = screen.getByAltText('Notebook Lenovo Ideapad', { exact: false })
    expect(img).toBeInTheDocument()
  })

  test('Displays the product title', () => {
    const title = screen.getByText('Notebook Lenovo Ideapad 14iil05', { exact: false })
    expect(title).toBeInTheDocument()
  })

  test('Displays the formatted price of the product', () => {
    const price = screen.getByText('$91.899')
    expect(price).toBeInTheDocument()
  })

  test('Displays the condition of the product', () => {
    const condition = screen.getByText('Nuevo -', { exact: false })
    expect(condition).toBeInTheDocument()
  })
})
