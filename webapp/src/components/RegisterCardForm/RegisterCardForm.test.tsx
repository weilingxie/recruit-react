import { render, fireEvent, screen } from '@testing-library/react'
import RegisterCardForm from './RegisterCardForm'
import { ErrorMessage } from '../../constants/CreditCardConstant'

const onSubmitCallbackMock = jest.fn((x) => Promise.resolve())

const InvalidCardNumber = '123456'
const InvalidExpiryDate = '9921'
const InvalidCvc = '12'
const WrongTypeCardNumber = 'abcdef'
const WrongTypeExpiryDate = 'abcd'
const WrongTypeCvc = 'abc'
const ValidCardNumber = '1234567890123456'
const ValidExpiryDate = '1221' // 12/21 = December 2021
const ValidCvc = '123'

describe('RegisterCardForm Tests', () => {
  it('Should render all credit card fields', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallbackMock} />
    )
    expect(getByTestId('CardNumberInput')).toBeTruthy()
    expect(getByTestId('ExpiryDateInput')).toBeTruthy()
    expect(getByTestId('CvcInput')).toBeTruthy()
  })

  it('Should show card number with correct space', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallbackMock} />
    )
    const cardNumberFormat = getByTestId('CardNumberFormat') as HTMLInputElement
    fireEvent.change(cardNumberFormat, {
      target: { value: '1234567890123456' },
    })
    expect(cardNumberFormat.value).toBe('1234 5678 9012 3456')
  })

  it('Should show expiry date with correct backslash', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallbackMock} />
    )
    const expiryDateFormat = getByTestId('ExpiryDateFormat') as HTMLInputElement
    fireEvent.change(expiryDateFormat, { target: { value: '1221' } })
    expect(expiryDateFormat.value).toBe('12/21')
  })

  it('Should show error when provides invalid card number', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallbackMock} />
    )
    const cardNumberFormat = getByTestId('CardNumberFormat') as HTMLInputElement
    fireEvent.change(cardNumberFormat, { target: { value: InvalidCardNumber } })
    expect(screen.getByText(ErrorMessage.cardNumber)).toBeTruthy()
  })

  it('Should show error when provides invalid expiry date', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallbackMock} />
    )
    const expiryDateFormat = getByTestId('ExpiryDateFormat') as HTMLInputElement
    fireEvent.change(expiryDateFormat, { target: { value: InvalidExpiryDate } })
    expect(screen.getByText(ErrorMessage.expiryDate)).toBeTruthy()
  })

  it('Should show error when provides invalid cvc', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallbackMock} />
    )
    const cvcFormat = getByTestId('CvcFormat') as HTMLInputElement
    fireEvent.change(cvcFormat, { target: { value: InvalidCvc } })
    expect(screen.getByText(ErrorMessage.cvc)).toBeTruthy()
  })

  it('Should disable submit button when all input fields are empty', () => {
    const { getByRole } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallbackMock} />
    )
    const submitButton = getByRole('button')
    expect(submitButton).toBeDisabled()
  })

  it('Should not accept non-numeric value in card number input field', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallbackMock} />
    )
    const cardNumberFormat = getByTestId('CardNumberFormat') as HTMLInputElement
    fireEvent.change(cardNumberFormat, {
      target: { value: WrongTypeCardNumber },
    })
    expect(cardNumberFormat.value).toBe('')
  })

  it('Should not accept non-numeric value in expiry date input field', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallbackMock} />
    )
    const expiryDateFormat = getByTestId('ExpiryDateFormat') as HTMLInputElement
    fireEvent.change(expiryDateFormat, {
      target: { value: WrongTypeExpiryDate },
    })
    expect(expiryDateFormat.value).toBe('')
  })

  it('Should not accept non-numeric value in cvc input field', () => {
    const { getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallbackMock} />
    )
    const cvcFormat = getByTestId('CvcFormat') as HTMLInputElement
    fireEvent.change(cvcFormat, {
      target: { value: WrongTypeCvc },
    })
    expect(cvcFormat.value).toBe('')
  })

  it('Should enable submit button when there is no error and not empty', () => {
    const validForm = getValidForm()
    const submitButton = validForm.querySelector(
      'button#SubmitButton'
    ) as HTMLButtonElement
    expect(submitButton).toBeEnabled
  })

  it('Should call onSubmitCallback once when submit button is clicked', () => {
    const validForm = getValidForm()
    const submitButton = validForm.querySelector(
      'button#SubmitButton'
    ) as HTMLButtonElement
    fireEvent.click(submitButton)
    expect(onSubmitCallbackMock.mock.calls.length).toBe(1)
  })

  it('Should NOT call onSubmitCallback when submit button is clicked but there is any error', () => {
    const { getByRole, getByTestId } = render(
      <RegisterCardForm onSubmitCallback={onSubmitCallbackMock} />
    )
    const cardNumberFormat = getByTestId('CardNumberFormat') as HTMLInputElement
    const cvcFormat = getByTestId('CvcFormat') as HTMLInputElement
    const expiryDateFormat = getByTestId('ExpiryDateFormat') as HTMLInputElement
    //Change card number to be invalid
    fireEvent.change(cardNumberFormat, {
      target: { value: InvalidCardNumber },
    })
    fireEvent.change(cvcFormat, { target: { value: ValidCvc } })
    fireEvent.change(expiryDateFormat, {
      target: { value: ValidExpiryDate },
    })
    const submitButton = getByRole('button') as HTMLButtonElement
    fireEvent.click(submitButton)
    expect(onSubmitCallbackMock.mock.calls.length).toBe(0)
    //Change cvc to be invalid
    fireEvent.change(cardNumberFormat, {
      target: { value: ValidCardNumber },
    })
    fireEvent.change(cvcFormat, { target: { value: InvalidCvc } })
    fireEvent.click(submitButton)
    expect(onSubmitCallbackMock.mock.calls.length).toBe(0)
    //Change expiry date to be invalid
    fireEvent.change(cvcFormat, { target: { value: ValidCvc } })
    fireEvent.change(expiryDateFormat, {
      target: { value: InvalidExpiryDate },
    })
    fireEvent.click(submitButton)
    expect(onSubmitCallbackMock.mock.calls.length).toBe(0)
  })
})

const getValidForm = (): HTMLElement => {
  const { container, getByTestId } = render(
    <RegisterCardForm onSubmitCallback={onSubmitCallbackMock} />
  )
  const cardNumberFormat = getByTestId('CardNumberFormat') as HTMLInputElement
  const expiryDateFormat = getByTestId('ExpiryDateFormat') as HTMLInputElement
  const cvcFormat = getByTestId('CvcFormat') as HTMLInputElement
  fireEvent.change(cardNumberFormat, { target: { value: ValidCardNumber } })
  fireEvent.change(expiryDateFormat, { target: { value: ValidExpiryDate } })
  fireEvent.change(cvcFormat, { target: { value: ValidCvc } })
  return container
}
