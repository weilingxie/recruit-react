import React from 'react'
import { TextField } from '@mui/material'
import CvcFormat from './CvcFormat'

type CvcInputProps = {
  error: boolean
  helperText: string | undefined
  cvc: string
  onCvcChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CvcInput: React.FC<CvcInputProps> = ({
  error,
  helperText,
  cvc,
  onCvcChange,
}: CvcInputProps) => {
  return (
    <TextField
      required
      fullWidth
      data-testid="CvcInput"
      label="cvc"
      name="cvc"
      error={error}
      helperText={helperText}
      value={cvc}
      onChange={onCvcChange}
      InputProps={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        inputComponent: CvcFormat as any,
      }}
      variant="filled"
    />
  )
}

export default CvcInput
