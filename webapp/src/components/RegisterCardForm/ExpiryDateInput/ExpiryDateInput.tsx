import React, { useContext } from 'react'
import { TextField } from '@mui/material'
import ExpiryDateFormat from './ExpiryDateFormat'
import StyleContext from '../../../contexts/StyleContext'
import { IStyle } from '../../../types/Types'

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
  const { input } = useContext<IStyle>(StyleContext)
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
        style: { fontSize: input.fontSize },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        inputComponent: ExpiryDateFormat as any,
      }}
      variant={input.variant}
    />
  )
}

export default ExpiryDateInput
