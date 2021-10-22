import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import CardNumberInput from './CardNumberInput/CardNumberInput'
import useCreditCardForm from './Hook/useCreditCardForm'
import ValidateCreditCard from './ValidateCreditCard'
import { ICreditCard } from '../../types/Types'

const callback = (creditCard: ICreditCard): void => {
  console.log(creditCard)
  alert(JSON.stringify(creditCard))
}

const RegisterCardForm: React.FC = () => {
  const { handleChange, handleSubmit, creditCard, error } = useCreditCardForm(
    callback,
    ValidateCreditCard
  )

  return (
    <form data-testid="RegisterCardForm" onSubmit={handleSubmit}>
      <Grid container item sm={12} md={10} lg={6} spacing={2}>
        <Grid item>
          <CardNumberInput
            onCardNumberChange={handleChange}
            cardNumber={creditCard.cardNumber}
            error={error.cardNumber !== undefined}
            helperText={error.cardNumber}
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
