const ValidateCardNumber = (cardNumber: string): string =>
  cardNumber.length !== 16 ? 'Credit card number is invalid' : ''

const ValidateExpireDate = (expireDate: string): string => {
  console.log(expireDate)
  const errorMessage = 'Expire date number is invalid'
  try {
    const regex = /^(0[1-9]|1[0-2])([0-9]{2})$/
    return expireDate.length !== 4 || !expireDate.match(regex)
      ? errorMessage
      : ''
  } catch (e) {
    return errorMessage
  }
}

export { ValidateCardNumber, ValidateExpireDate }
