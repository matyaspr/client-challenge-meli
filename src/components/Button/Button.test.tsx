import { Button } from '.'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Button component', () => {
  test('should render correctly', () => {
    render(<Button text='I am button' />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test('Shows the text passed through props', () => {
    render(<Button text='I am button' />)
    const button = screen.getByText('I am button')
    expect(button).toBeInTheDocument()
  })

  test('Allows you to pass different props and add them to the button', () => {
    const mockOnClick = jest.fn()
    render(<Button text='I am button' onClick={mockOnClick} />)
    const button = screen.getByText('I am button')
    userEvent.click(button)
    expect(mockOnClick).toHaveBeenCalled()
  })
})
