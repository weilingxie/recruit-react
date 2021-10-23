import { render, fireEvent } from '@testing-library/react'
import { ICreditCard } from '../../types/Types'
import RegisterCardForm from './RegisterCardForm'

const onSubmitCallback = (creditCard: ICreditCard): Promise<void> => {
  console.log(creditCard)
  alert(JSON.stringify(creditCard))
  return Promise.resolve()
}

describe('RegisterCardForm Tests', () => {
  it('Should render all credit card fields', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    expect(getByTestId('CardNumber')).toBeTruthy()
    expect(getByTestId('ExpireDate')).toBeTruthy()
    expect(getByTestId('Cvc')).toBeTruthy()
  })

  it('Should show card number with correct space', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const cardNumberInput = getByTestId('CardNumberFormat') as HTMLInputElement
    fireEvent.change(cardNumberInput, { target: { value: '1234567890123456' } })
    expect(cardNumberInput.value).toBe('1234 5678 9012 3456')
  })

  it('Should show expire date with correct backslash', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const expireDateInput = getByTestId('ExpireDateFormat') as HTMLInputElement
    fireEvent.change(expireDateInput, { target: { value: '1221' } })
    expect(expireDateInput.value).toBe('12/21')
  })
})
