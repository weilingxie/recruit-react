export interface ICreditCard {
  cardNumber: string
}

export interface IError {
  cardNumber?: string
}

export interface IComponentInfo {
  Path: string
  Title: string
  HeaderMenuIcon: React.ReactNode
  ToPath: string
  Default?: boolean
}
