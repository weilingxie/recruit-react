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

export interface IStyle {
  input: {
    fontSize: string
    variant: 'standard' | 'filled' | 'outlined'
  }
}
