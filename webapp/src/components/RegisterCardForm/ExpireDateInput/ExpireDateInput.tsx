import React from 'react'
import { TextField } from '@mui/material'
import ExpireDateFormat from './ExpireDateFormat'

type ExpireDateInputProps = {
  error: boolean
  helperText: string | undefined
  expireDate: string
  onExpireDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ExpireDateInput: React.FC<ExpireDateInputProps> = ({
  error,
  helperText,
  expireDate,
  onExpireDateChange,
}: ExpireDateInputProps) => {
  return (
    <TextField
      required
      fullWidth
      data-testid="ExpireDateInput"
      label="Expire Date"
      name="expireDate"
      error={error}
      helperText={helperText}
      value={expireDate}
      onChange={onExpireDateChange}
      InputProps={{
        style: { fontSize: '1.2em' },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        inputComponent: ExpireDateFormat as any,
      }}
      variant="filled"
    />
  )
}

export default ExpireDateInput
