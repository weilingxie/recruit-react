import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import RegisterCardContainer from './components/RegisterCardContainer/RegisterCardContainer'
import ComponentInfoList from './constants/ComponentInfoConstant'
import StyleContext from './contexts/StyleContext'
import UserContext from './contexts/UserContext'
import { IStyle, IUser } from './types/Types'

const user: IUser = {
  firstName: 'William',
  lastName: 'Xie',
}

const style: IStyle = {
  input: {
    fontSize: '1.2em',
    variant: 'filled',
  },
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StyleContext.Provider value={style}>
        <UserContext.Provider value={user}>
          <RegisterCardContainer componentInfoList={ComponentInfoList}>
            <AppRouter />
          </RegisterCardContainer>
        </UserContext.Provider>
      </StyleContext.Provider>
    </BrowserRouter>
  )
}

export default App
