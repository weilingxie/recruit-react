import React from 'react'
import { TextField } from '@mui/material'
import CardNumberFormat from './CardNumberFormat'

type CardNumberInputProps = {
  error: boolean
  helperText: string | undefined
  cardNumber: string
  onCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CardNumberInput: React.FC<CardNumberInputProps> = ({
  error,
  helperText,
  cardNumber,
  onCardNumberChange,
}: CardNumberInputProps) => {
  return (
    <TextField
      required
      fullWidth
      data-testid="CardNumber"
      label="Credit Card Number"
      name="CardNumber"
      error={error}
      helperText={helperText}
      value={cardNumber}
      onChange={onCardNumberChange}
      InputProps={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        inputComponent: CardNumberFormat as any,
      }}
      variant="filled"
    />
  )
}

export default CardNumberInput
