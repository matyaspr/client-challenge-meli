import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Breadcrumbs } from '.'

describe('<Breadcrumbs />', () => {
  test('should render the breadcrumbs', () => {
    render(<Breadcrumbs breadcrumbs={['Item 1', 'Item 2', 'Item 3']} />)
    const breadCrumbList = screen.getByRole('list')
    expect(breadCrumbList).toBeInTheDocument()
  })

  test('Renders all elements of the array passed through props', () => {
    render(<Breadcrumbs breadcrumbs={['Item 1', 'Item 2', 'Item 3']} />)
    const listOfLinks = screen.getAllByRole('listitem')
    expect(listOfLinks.length).toBe(3)
  })

  test('Correct display of text', () => {
    render(<Breadcrumbs breadcrumbs={['Texto 1', 'Enlace 2', 'Link 3']} />)
    const link = screen.getByText('Enlace 2')
    expect(link).toBeInTheDocument()
  })
})
