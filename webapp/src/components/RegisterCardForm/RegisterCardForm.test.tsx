import { render, fireEvent, screen } from '@testing-library/react'
import RegisterCardForm from './RegisterCardForm'

describe('RegisterCardForm Tests', () => {
  it('Should render Card Number', () => {
    const { getByTestId } = render(<RegisterCardForm />)
    expect(getByTestId('CardNumber')).toBeTruthy()
  })

  it('Should show card number with correct space', () => {
    const { getByTestId } = render(<RegisterCardForm />)
    const cardNumberInput = getByTestId('CardNumberFormat') as HTMLInputElement
    fireEvent.change(cardNumberInput, { target: { value: '1234567890123456' } })
    expect(cardNumberInput.value).toBe('1234 5678 9012 3456')
  })
})
