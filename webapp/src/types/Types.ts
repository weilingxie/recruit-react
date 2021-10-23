export interface ICreditCard {
  cardNumber: string
  expireDate: string
  cvc: string
}

export interface IComponentInfo {
  Path: string
  Title: string
  HeaderMenuIcon: React.ReactNode
  ToPath: string
  Default?: boolean
}
