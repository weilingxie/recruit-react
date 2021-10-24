import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import RegisterCardContainer from './components/RegisterCardContainer/RegisterCardContainer'
import ComponentInfoList from './constants/ComponentInfoConstant'
import UserContext from './contexts/UserContext'
import { IUser } from './types/Types'

const user: IUser = {
  firstName: 'William',
  lastName: 'Xie',
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <RegisterCardContainer componentInfoList={ComponentInfoList}>
          <AppRouter />
        </RegisterCardContainer>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
