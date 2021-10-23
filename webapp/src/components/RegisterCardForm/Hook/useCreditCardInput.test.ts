import { renderHook, act } from '@testing-library/react-hooks'
import useCreditCardInput from './useCreditCardInput'

const toValue = '000'
const invalidValue = 'invalid'
const errorMessage = 'Error Message'
const validateNoError = (value: string): string => ''
const validatehasError = (value: string): string => errorMessage
const validateShowErrorWhenInvalid = (value: string): string =>
  value === invalidValue ? errorMessage : ''

describe('useCreditCardInput Tests', () => {
  it('Should initial the value and error properly', () => {
    const { result } = renderHook(() => useCreditCardInput(validateNoError))
    expect(result.current.value).toBe('')
    expect(result.current.error).toBe('')
  })

  it('Should set error properly when returns errorMessage from validate', () => {
    const { result } = renderHook(() => useCreditCardInput(validatehasError))
    expect(result.current.error).toBe(errorMessage)
  })

  it('Should change value by calling handleChange', () => {
    const { result } = renderHook(() => useCreditCardInput(validateNoError))
    const event = {
      target: {
        value: toValue
      }
    } as React.ChangeEvent<HTMLInputElement>

    act(() => {
      result.current.handleChange(event)
    })

    expect(result.current.value).toBe(toValue)
  })

  it('Should change error when change value to invalid', () => {
    const { result } = renderHook(() =>
      useCreditCardInput(validateShowErrorWhenInvalid)
    )
    const event = {
      target: {
        value: invalidValue
      }
    } as React.ChangeEvent<HTMLInputElement>

    expect(result.current.error).toBe('')

    act(() => {
      result.current.handleChange(event)
    })

    expect(result.current.error).toBe(errorMessage)
  })
})
