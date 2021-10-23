import React from 'react'
import NumberFormat from 'react-number-format'

type ExpireDateFormatProps = {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const ExpireDateFormat = React.forwardRef<NumberFormat, ExpireDateFormatProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props

    return (
      <NumberFormat
        {...other}
        data-testid="ExpireDateFormat"
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
      />
    )
  }
)

export default ExpireDateFormat
