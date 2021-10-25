import React from 'react'
import NumberFormat from 'react-number-format'

type CvcFormatProps = {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const CvcFormat = React.forwardRef<NumberFormat, CvcFormatProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props

    return (
      <NumberFormat
        {...other}
        data-testid="CvcFormat"
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          })
        }}
        type="password"
        format="###"
        aria-label="Cvc number input field"
      />
    )
  }
)

export default CvcFormat
