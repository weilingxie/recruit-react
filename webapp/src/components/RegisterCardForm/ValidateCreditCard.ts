const ValidateCardNumber = (cardNumber: string): string =>
  cardNumber.length !== 16 ? 'Credit card number is invalid' : ''

const ValidateExpiryDate = (expiryDate: string): string => {
  const regex = /^(0[1-9]|1[0-2])([0-9]{2})$/
  return expiryDate.length !== 4 || !expiryDate.match(regex)
    ? 'Expiry date is invalid'
    : ''
}

const ValidateCvc = (cvc: string): string =>
  cvc.length !== 3 ? 'Cvc is invalid' : ''

export { ValidateCardNumber, ValidateExpiryDate, ValidateCvc }
