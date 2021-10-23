import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import CardNumberInput from './CardNumberInput/CardNumberInput'
import ExpireDateInput from './ExpireDateInput/ExpireDateInput'
import useCreditCardInput from '../../hooks/useCreditCardInput'
import { ValidateCardNumber, ValidateExpireDate } from './ValidateCreditCard'
import { ICreditCard } from '../../types/Types'

type RegisterCardFormProps = {
  onSubmitCallback: (creditCard: ICreditCard) => Promise<void>
}

type ErrorType = {
  name: string
  errorMessage: string
}

const RegisterCardForm: React.FC<RegisterCardFormProps> = ({
  onSubmitCallback,
}: RegisterCardFormProps) => {
  const {
    handleChange: onCardNumberChange,
    value: cardNumber,
    error: cardNumberError,
  } = useCreditCardInput(ValidateCardNumber)

  const {
    handleChange: onExpireDateChange,
    value: expireDate,
    error: expireDateError,
  } = useCreditCardInput(ValidateExpireDate)

  const getErrors = (): ErrorType[] => {
    const err: ErrorType[] = []
    cardNumberError &&
      err.push({ name: 'cardNumber', errorMessage: cardNumberError })
    expireDateError &&
      err.push({ name: 'expireDate', errorMessage: cardNumberError })
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
            onCardNumberChange={onCardNumberChange}
            cardNumber={cardNumber}
            error={getErrors().some((err) => err.name === 'cardNumber')}
            helperText={
              getErrors().find((err) => err.name === 'cardNumber')
                ?.errorMessage || ''
            }
          />
        </Grid>
        <Grid item>
          <ExpireDateInput
            onExpireDateChange={onExpireDateChange}
            expireDate={expireDate}
            error={getErrors().some((err) => err.name === 'expireDate')}
            helperText={
              getErrors().find((err) => err.name === 'expireDate')
                ?.errorMessage || ''
            }
          />
        </Grid>
        <Grid item sm={12} lg={12}>
          <Button
            variant="contained"
            color="success"
            type="submit"
            disabled={getErrors().length > 0}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default RegisterCardForm
