import React from 'react'
import NumberFormat from 'react-number-format'

type ExpiryDateFormatProps = {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const ExpiryDateFormat = React.forwardRef<NumberFormat, ExpiryDateFormatProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props

    return (
      <NumberFormat
        {...other}
        data-testid="ExpiryDateFormat"
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          })
        }}
        format="##/##"
        placeholder="MM/YY"
        mask={['M', 'M', 'Y', 'Y']}
        aria-label="Expiry date input field"
        aria-required={true}
      />
    )
  }
)

export default ExpiryDateFormat
