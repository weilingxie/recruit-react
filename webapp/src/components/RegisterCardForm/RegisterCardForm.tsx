import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import CardNumberInput from './CardNumberInput/CardNumberInput'
import useCreditCardInput from './Hook/useCreditCardInput'
import { ValidateCardNumber } from './ValidateCreditCard'
import { ICreditCard } from '../../types/Types'

type RegisterCardFormProps = {
  onSubmitCallback: (creditCard: ICreditCard) => Promise<void>
}

const RegisterCardForm: React.FC<RegisterCardFormProps> = ({
  onSubmitCallback,
}: RegisterCardFormProps) => {
  const {
    handleChange,
    value: cardNumber,
    error: cardNumberError,
  } = useCreditCardInput(ValidateCardNumber)

  type ErrorType = {
    name: string
    errorMessage: string
  }

  const getErrors = (): ErrorType[] => {
    const err: ErrorType[] = []
    cardNumberError &&
      err.push({ name: 'cardNumber', errorMessage: cardNumberError })

    return err
  }

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    if (getErrors().length > 0) {
      return
    }
    const creditCard: ICreditCard = {
      cardNumber,
    }

    return await onSubmitCallback(creditCard)
  }

  return (
    <form data-testid="RegisterCardForm" onSubmit={onSubmit}>
      <Grid container item sm={12} md={10} lg={6} spacing={2}>
        <Grid item>
          <CardNumberInput
            onCardNumberChange={handleChange}
            cardNumber={cardNumber}
            error={getErrors().some((err) => err.name === 'cardNumber')}
            helperText={
              getErrors().find((err) => err.name === 'cardNumber')
                ?.errorMessage || ''
            }
          />
        </Grid>
        <Grid item sm={12} lg={12}>
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default RegisterCardForm
