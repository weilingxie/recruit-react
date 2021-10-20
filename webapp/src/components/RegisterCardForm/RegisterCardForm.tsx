import React from 'react'
import Button from '@mui/material/Button'

const RegisterCardForm: React.FC = () => {
  return (
    <div data-testid="RegisterCardForm">
      <Button variant="contained" color="success">
        Submit
      </Button>
    </div>
  )
}

export default RegisterCardForm
