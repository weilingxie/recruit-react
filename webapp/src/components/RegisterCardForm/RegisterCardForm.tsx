import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import CardNumberInput from './CardNumberInput/CardNumberInput'
import ExpiryDateInput from './ExpiryDateInput/ExpiryDateInput'
import CvcInput from './CvcInput/CvcInput'
import useCreditCardInput from '../../hooks/useCreditCardInput'
import {
  ValidateCardNumber,
  ValidateExpiryDate,
  ValidateCvc,
} from './ValidateCreditCard'
import { ICreditCard, IUser } from '../../types/Types'
import UserContext from '../../contexts/UserContext'

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
  const user = useContext<IUser>(UserContext)
  const {
    handleChange: onCardNumberChange,
    value: cardNumber,
    error: cardNumberError,
  } = useCreditCardInput(ValidateCardNumber)

  const {
    handleChange: onExpiryDateChange,
    value: expiryDate,
    error: expiryDateError,
  } = useCreditCardInput(ValidateExpiryDate)

  const {
    handleChange: onCvcChange,
    value: cvc,
    error: cvcError,
  } = useCreditCardInput(ValidateCvc)

  const getErrors = (): ErrorType[] => {
    const err: ErrorType[] = []
    cardNumberError &&
      err.push({ name: 'cardNumber', errorMessage: cardNumberError })
    expiryDateError &&
      err.push({ name: 'expiryDate', errorMessage: expiryDateError })
    cvcError && err.push({ name: 'cvc', errorMessage: cvcError })
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
      expiryDate,
      cvc,
    }

    return await onSubmitCallback(creditCard)
  }

  return (
    <form data-testid="RegisterCardForm" onSubmit={onSubmit}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid container item xs={12} sm={8} md={6} lg={4} xl={4}>
          <Grid item container justifyContent="start" spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant="h5">Welcome, {user.firstName}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
            <Grid
              item
              container
              justifyContent="space-between"
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              spacing={2}
            >
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <ExpiryDateInput
                  onExpiryDateChange={onExpiryDateChange}
                  expiryDate={expiryDate}
                  error={getErrors().some((err) => err.name === 'expiryDate')}
                  helperText={
                    getErrors().find((err) => err.name === 'expiryDate')
                      ?.errorMessage || ''
                  }
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <CvcInput
                  onCvcChange={onCvcChange}
                  cvc={cvc}
                  error={getErrors().some((err) => err.name === 'cvc')}
                  helperText={
                    getErrors().find((err) => err.name === 'cvc')
                      ?.errorMessage || ''
                  }
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              spacing={2}
            >
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  fullWidth={true}
                  size="medium"
                  disabled={getErrors().length > 0}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default RegisterCardForm
