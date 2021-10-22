import { ICreditCard, IError } from '../../types/Types'

const ValidateCreditCard = (creditCard: ICreditCard): IError => {
  let error: IError = {}
  if (creditCard.cardNumber.length !== 16) {
    error.cardNumber = 'Credit card number is invalid'
  }
  return error
}

export default ValidateCreditCard
