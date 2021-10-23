import { render, fireEvent, screen } from '@testing-library/react'
import { ICreditCard } from '../../types/Types'
import RegisterCardForm from './RegisterCardForm'

const onSubmitCallback = (creditCard: ICreditCard): Promise<void> => {
  console.log(creditCard)
  alert(JSON.stringify(creditCard))
  return Promise.resolve()
}

const invalidCardNumber = '123456'
const invalidExpireDate = '9921'
const invalidCvc = '12'
const validCardNumber = '1234567890123456'
const validExpireDate = '1221'
const validCvc = '123'

describe('RegisterCardForm Tests', () => {
  it('Should render all credit card fields', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    expect(getByTestId('CardNumberInput')).toBeTruthy()
    expect(getByTestId('ExpireDateInput')).toBeTruthy()
    expect(getByTestId('CvcInput')).toBeTruthy()
  })

  it('Should show card number with correct space', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const cardNumberFormat = getByTestId('CardNumberFormat') as HTMLInputElement
    fireEvent.change(cardNumberFormat, {
      target: { value: '1234567890123456' },
    })
    expect(cardNumberFormat.value).toBe('1234 5678 9012 3456')
  })

  it('Should show expire date with correct backslash', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const expireDateFormat = getByTestId('ExpireDateFormat') as HTMLInputElement
    fireEvent.change(expireDateFormat, { target: { value: '1221' } })
    expect(expireDateFormat.value).toBe('12/21')
  })

  it('Should show error when provides invalid card number', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const cardNumberFormat = getByTestId('CardNumberFormat') as HTMLInputElement
    fireEvent.change(cardNumberFormat, { target: { value: invalidCardNumber } })
    expect(screen.findByText('Credit card number is invalid')).toBeTruthy()
  })

  it('Should show error when provides invalid expire date', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const expireDateFormat = getByTestId('ExpireDateFormat') as HTMLInputElement
    fireEvent.change(expireDateFormat, { target: { value: invalidExpireDate } })
    expect(screen.findByText('Expire date is invalid')).toBeTruthy()
  })

  it('Should show error when provides invalid cvc', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const cvcFormat = getByTestId('CvcFormat') as HTMLInputElement
    fireEvent.change(cvcFormat, { target: { value: invalidCvc } })
    expect(screen.findByText('Cvc is invalid')).toBeTruthy()
  })

  it('Should disable submit button when there is any error', () => {
    const { getByTestId, getByRole } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const cardNumberFormat = getByTestId('CardNumberFormat') as HTMLInputElement
    fireEvent.change(cardNumberFormat, { target: { value: invalidCardNumber } })
    const submitButton = getByRole('button')
    expect(submitButton).toBeDisabled()
  })

  it('Should enable submit button when there is no error', () => {
    const { getByTestId, getByRole } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const cardNumberFormat = getByTestId('CardNumberFormat') as HTMLInputElement
    const expireDateFormat = getByTestId('ExpireDateFormat') as HTMLInputElement
    const cvcFormat = getByTestId('CvcFormat') as HTMLInputElement
    fireEvent.change(cardNumberFormat, { target: { value: validCardNumber } })
    fireEvent.change(expireDateFormat, { target: { value: validExpireDate } })
    fireEvent.change(cvcFormat, { target: { value: validCvc } })
    const submitButton = getByRole('button')
    expect(submitButton).toBeEnabled
  })
})
