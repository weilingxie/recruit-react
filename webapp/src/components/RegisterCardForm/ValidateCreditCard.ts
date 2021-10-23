const ValidateCardNumber = (cardNumber: string): string =>
  cardNumber.length !== 16 ? 'Credit card number is invalid' : ''

const ValidateExpireDate = (expireDate: string): string => {
  const regex = /^(0[1-9]|1[0-2])([0-9]{2})$/
  return expireDate.length !== 4 || !expireDate.match(regex)
    ? 'Expire date number is invalid'
    : ''
}

const ValidateCvc = (cvc: string): string =>
  cvc.length !== 3 ? 'Cvc is invalid' : ''

export { ValidateCardNumber, ValidateExpireDate, ValidateCvc }
