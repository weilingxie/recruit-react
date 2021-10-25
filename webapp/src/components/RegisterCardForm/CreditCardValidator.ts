const CardNumberValidator = (cardNumber: string): string =>
  cardNumber.length !== 16 ? 'Credit card number is invalid' : ''

const ExpiryDateValidator = (expiryDate: string): string => {
  const regex = /^(0[1-9]|1[0-2])([0-9]{2})$/
  return expiryDate.length !== 4 || !expiryDate.match(regex)
    ? 'Expiry date is invalid'
    : ''
}

const CvcValidator = (cvc: string): string =>
  cvc.length !== 3 ? 'Cvc is invalid' : ''

export { CardNumberValidator, ExpiryDateValidator, CvcValidator }
