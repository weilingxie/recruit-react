import React from 'react'
import { IUser } from '../types/Types'

const DefaultUser: IUser = {
  firstName: '',
  lastName: '',
}

const UserContext = React.createContext(DefaultUser)

export default UserContext
