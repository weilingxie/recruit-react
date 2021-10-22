import { useState, useEffect } from 'react'
import { ICreditCard, IError } from '../../../types/Types'

type Callback = (creditCard: ICreditCard) => void
type Validate = (creditCard: ICreditCard) => IError

type Return = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: React.FormEventHandler<HTMLFormElement>
  creditCard: ICreditCard
  error: IError
}

const useCreditCardForm = (callback: Callback, validate: Validate): Return => {
  const [creditCard, setCreditCard] = useState<ICreditCard>({
    cardNumber: '',
  })

  const [error, setError] = useState<IError>({})

  useEffect(() => {
    setError(validate(creditCard))
  }, [creditCard])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    console.log(`Name:${name}  Value:${value}`)

    setCreditCard({
      ...creditCard,
      [name]: value,
    })
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault()
    console.log('handleSubmit::', creditCard)
    setError(validate(creditCard))
    if (Object.keys(error).length === 0) {
      console.log('No error, call API')
      callback(creditCard) //Call API
    }
  }

  return {
    handleChange,
    handleSubmit,
    creditCard,
    error,
  }
}

export default useCreditCardForm
