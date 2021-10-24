import React, { useContext } from 'react'
import { TextField } from '@mui/material'
import CvcFormat from './CvcFormat'
import StyleContext from '../../../contexts/StyleContext'
import { IStyle } from '../../../types/Types'

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
  const { input } = useContext<IStyle>(StyleContext)
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
        style: { fontSize: input.fontSize },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        inputComponent: CvcFormat as any,
      }}
      variant={input.variant}
    />
  )
}

export default CvcInput
