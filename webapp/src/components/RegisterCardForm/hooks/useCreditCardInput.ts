import { useState, useEffect } from 'react'

type Validator = (value: string) => boolean

type Return = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  error: boolean
}

const useCreditCardInput = (validator: Validator): Return => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setError(!validator(value))
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setValue(value)
  }

  return {
    handleChange,
    value,
    error,
  }
}

export default useCreditCardInput
