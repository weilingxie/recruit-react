import React from 'react'
import { IStyle, IUser } from '../types/Types'
import StyleContext from './StyleContext'
import UserContext from './UserContext'

const style: IStyle = {
  input: {
    fontSize: '1.2em',
    variant: 'standard',
  },
}

const user: IUser = {
  firstName: 'William',
  lastName: 'Xie',
}

type ContextContainerProps = {
  children?: React.ReactNode
}

const ContextContainer: React.FC<ContextContainerProps> = ({
  children,
}: ContextContainerProps) => (
  <StyleContext.Provider value={style}>
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  </StyleContext.Provider>
)

export default ContextContainer
