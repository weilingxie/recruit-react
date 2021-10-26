import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import CardNumberInput from './CardNumberInput/CardNumberInput'
import ExpiryDateInput from './ExpiryDateInput/ExpiryDateInput'
import CvcInput from './CvcInput/CvcInput'
import useCreditCardInput from './hooks/useCreditCardInput'
import {
  CardNumberValidator,
  ExpiryDateValidator,
  CvcValidator,
} from './CreditCardValidator'
import { ICreditCard, IStyle, IUser } from '../../types/Types'
import UserContext from '../../contexts/UserContext'
import { ErrorMessage } from '../../constants/CreditCardConstant'
import StyleContext from '../../contexts/StyleContext'

type RegisterCardFormProps = {
  onSubmitCallback: (creditCard: ICreditCard) => Promise<void>
}

const RegisterCardForm: React.FC<RegisterCardFormProps> = ({
  onSubmitCallback,
}: RegisterCardFormProps) => {
  const user = useContext<IUser>(UserContext)
  const { input } = useContext<IStyle>(StyleContext)
  const {
    handleChange: onCardNumberChange,
    value: cardNumber,
    error: cardNumberError,
  } = useCreditCardInput(CardNumberValidator)

  const {
    handleChange: onExpiryDateChange,
    value: expiryDate,
    error: expiryDateError,
  } = useCreditCardInput(ExpiryDateValidator)

  const {
    handleChange: onCvcChange,
    value: cvc,
    error: cvcError,
  } = useCreditCardInput(CvcValidator)

  const hasError = (): boolean => cardNumberError || expiryDateError || cvcError

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    if (hasError()) {
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
          <Grid item container justifyContent="start" spacing={input.spacing}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant="h5">Welcome, {user.firstName}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <CardNumberInput
                onCardNumberChange={onCardNumberChange}
                cardNumber={cardNumber}
                error={cardNumberError}
                helperText={cardNumberError ? ErrorMessage.cardNumber : ''}
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
              spacing={input.spacing}
            >
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <CvcInput
                  onCvcChange={onCvcChange}
                  cvc={cvc}
                  error={cvcError}
                  helperText={cvcError ? ErrorMessage.cvc : ''}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <ExpiryDateInput
                  onExpiryDateChange={onExpiryDateChange}
                  expiryDate={expiryDate}
                  error={expiryDateError}
                  helperText={expiryDateError ? ErrorMessage.expiryDate : ''}
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
              spacing={input.spacing}
            >
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  fullWidth={true}
                  size="medium"
                  disabled={hasError()}
                  aria-label="submit button"
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
