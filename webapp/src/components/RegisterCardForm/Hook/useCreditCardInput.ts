import { useState, useEffect } from 'react'

type Validate = (value: string) => string

type Return = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  error: string
}

const useCreditCardInput = (validate: Validate): Return => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setError(validate(value))
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    console.log(`Name:${name}  Value:${value}`)
    setValue(value)
  }

  return {
    handleChange,
    value,
    error,
  }
}

export default useCreditCardInput
