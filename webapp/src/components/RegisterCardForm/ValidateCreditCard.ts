const ValidateCardNumber = (cardNumber: string): string =>
  cardNumber.length !== 16 ? 'Credit card number is invalid' : ''

export { ValidateCardNumber }
