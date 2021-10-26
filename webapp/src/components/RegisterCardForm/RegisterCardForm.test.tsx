import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { ICreditCard } from '../../types/Types'
import RegisterCardForm from './RegisterCardForm'
import { ErrorMessage } from '../../constants/CreditCardConstant'

const onSubmitCallback = (creditCard: ICreditCard): Promise<void> => {
  console.log(creditCard)
  alert(JSON.stringify(creditCard))
  return Promise.resolve()
}

const invalidCardNumber = '123456'
const invalidExpiryDate = '9921'
const invalidCvc = '12'
const wrongTypeCardNumber = 'abcdef'
const wrongTypeExpiryDate = 'abcd'
const wrongTypeCvc = 'abc'
const validCardNumber = '1234567890123456'
const validExpiryDate = '1221'
const validCvc = '123'

describe('RegisterCardForm Tests', () => {
  it('Should render all credit card fields', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    expect(getByTestId('CardNumberInput')).toBeTruthy()
    expect(getByTestId('ExpiryDateInput')).toBeTruthy()
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

  it('Should show expiry date with correct backslash', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const expiryDateFormat = getByTestId('ExpiryDateFormat') as HTMLInputElement
    fireEvent.change(expiryDateFormat, { target: { value: '1221' } })
    expect(expiryDateFormat.value).toBe('12/21')
  })

  it('Should show error when provides invalid card number', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const cardNumberFormat = getByTestId('CardNumberFormat') as HTMLInputElement
    fireEvent.change(cardNumberFormat, { target: { value: invalidCardNumber } })
    expect(screen.getByText(ErrorMessage.cardNumber)).toBeTruthy()
  })

  it('Should show error when provides invalid expiry date', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const expiryDateFormat = getByTestId('ExpiryDateFormat') as HTMLInputElement
    fireEvent.change(expiryDateFormat, { target: { value: invalidExpiryDate } })
    expect(screen.getByText(ErrorMessage.expiryDate)).toBeTruthy()
  })

  it('Should show error when provides invalid cvc', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const cvcFormat = getByTestId('CvcFormat') as HTMLInputElement
    fireEvent.change(cvcFormat, { target: { value: invalidCvc } })
    expect(screen.getByText(ErrorMessage.cvc)).toBeTruthy()
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
    const expiryDateFormat = getByTestId('ExpiryDateFormat') as HTMLInputElement
    const cvcFormat = getByTestId('CvcFormat') as HTMLInputElement
    fireEvent.change(cardNumberFormat, { target: { value: validCardNumber } })
    fireEvent.change(expiryDateFormat, { target: { value: validExpiryDate } })
    fireEvent.change(cvcFormat, { target: { value: validCvc } })
    const submitButton = getByRole('button')
    expect(submitButton).toBeEnabled
  })

  it('Should not accept non-numeric value in card number input field', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const cardNumberFormat = getByTestId('CardNumberFormat') as HTMLInputElement
    fireEvent.change(cardNumberFormat, {
      target: { value: wrongTypeCardNumber },
    })
    expect(cardNumberFormat.value).toBe('')
  })

  it('Should not accept non-numeric value in expiry date input field', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const expiryDateFormat = getByTestId('ExpiryDateFormat') as HTMLInputElement
    fireEvent.change(expiryDateFormat, {
      target: { value: wrongTypeExpiryDate },
    })
    expect(expiryDateFormat.value).toBe('')
  })

  it('Should not accept non-numeric value in cvc input field', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallback} />
    )
    const cvcFormat = getByTestId('CvcFormat') as HTMLInputElement
    fireEvent.change(cvcFormat, {
      target: { value: wrongTypeCvc },
    })
    expect(cvcFormat.value).toBe('')
  })
})
