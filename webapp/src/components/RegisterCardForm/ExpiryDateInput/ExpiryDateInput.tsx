import React from 'react'
import { TextField } from '@mui/material'
import ExpiryDateFormat from './ExpiryDateFormat'

type ExpiryDateInputProps = {
  error: boolean
  helperText: string | undefined
  expiryDate: string
  onExpiryDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ExpiryDateInput: React.FC<ExpiryDateInputProps> = ({
  error,
  helperText,
  expiryDate,
  onExpiryDateChange,
}: ExpiryDateInputProps) => {
  return (
    <TextField
      required
      fullWidth
      data-testid="ExpiryDateInput"
      label="Expiry Date"
      name="expiryDate"
      error={error}
      helperText={helperText}
      value={expiryDate}
      onChange={onExpiryDateChange}
      InputProps={{
        style: { fontSize: '1.2em' },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        inputComponent: ExpiryDateFormat as any,
      }}
      variant="filled"
    />
  )
}

export default ExpiryDateInput
