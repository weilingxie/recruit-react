import React from 'react'
import NumberFormat from 'react-number-format'

type CardNumberFormatProps = {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const CardNumberFormat = React.forwardRef<NumberFormat, CardNumberFormatProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props

    return (
      <NumberFormat
        {...other}
        data-testid="CardNumberFormat"
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          })
        }}
        format="#### #### #### ####"
        mask="_"
        aria-label="credit car number input field"
        aria-required={true}
      />
    )
  }
)

export default CardNumberFormat
