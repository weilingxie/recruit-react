import { renderHook, act } from '@testing-library/react-hooks'
import useCreditCardInput from './useCreditCardInput'

const ToValue = '000'
const validateNoError = (value: string): boolean => true
const validatehasError = (value: string): boolean => false

describe('useCreditCardInput Tests', () => {
  it('Should initial the value and error properly', () => {
    const { result } = renderHook(() => useCreditCardInput(validateNoError))
    expect(result.current.value).toBe('')
    expect(result.current.error).toBeFalsy()
  })

  it('Should set error to true when returns false from validator', () => {
    const { result } = renderHook(() => useCreditCardInput(validatehasError))
    expect(result.current.error).toBeTruthy()
  })

  it('Should change value by calling handleChange', () => {
    const { result } = renderHook(() => useCreditCardInput(validateNoError))
    const event = {
      target: {
        value: ToValue,
      },
    } as React.ChangeEvent<HTMLInputElement>

    act(() => {
      result.current.handleChange(event)
    })

    expect(result.current.value).toBe(ToValue)
  })
})
