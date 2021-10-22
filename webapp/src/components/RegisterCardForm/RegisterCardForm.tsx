import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import CardNumberInput from './CardNumberInput/CardNumberInput'

const RegisterCardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('')

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  const onCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCardNumber(e.target.value)
  }

  return (
    <form data-testid="RegisterCardForm" onSubmit={submit}>
      <Grid container item sm={12} md={10} lg={6} spacing={2}>
        <Grid item>
          <CardNumberInput
            onCardNumberChange={onCardNumberChange}
            cardNumber={cardNumber}
            error={false}
            helperText=""
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
