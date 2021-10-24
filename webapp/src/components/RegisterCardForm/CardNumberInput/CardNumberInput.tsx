import React, { useContext } from 'react'
import { TextField } from '@mui/material'
import CardNumberFormat from './CardNumberFormat'
import StyleContext from '../../../contexts/StyleContext'
import { IStyle } from '../../../types/Types'

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
  const { input } = useContext<IStyle>(StyleContext)
  return (
    <TextField
      required
      fullWidth
      data-testid="CardNumberInput"
      label="Credit Card Number"
      name="cardNumber"
      error={error}
      helperText={helperText}
      value={cardNumber}
      onChange={onCardNumberChange}
      InputProps={{
        style: { fontSize: input.fontSize },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        inputComponent: CardNumberFormat as any,
      }}
      variant={input.variant}
    />
  )
}

export default CardNumberInput
