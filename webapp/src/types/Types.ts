export interface ICreditCard {
  cardNumber: string
  expiryDate: string
  cvc: string
}

export interface IComponentInfo {
  Path: string
  Title: string
  HeaderMenuIcon: React.ReactNode
  ToPath: string
  Default?: boolean
}

export interface IUser {
  firstName: string
  lastName: string
}
