const CardNumberValidator = (cardNumber: string): boolean =>
  cardNumber.length !== 16

const ExpiryDateValidator = (expiryDate: string): boolean => {
  const regex = /^(0[1-9]|1[0-2])([0-9]{2})$/
  return expiryDate.length !== 4 || !expiryDate.match(regex)
}

const CvcValidator = (cvc: string): boolean => cvc.length !== 3

export { CardNumberValidator, ExpiryDateValidator, CvcValidator }
