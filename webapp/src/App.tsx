import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import RegisterCardContainer from './components/RegisterCardContainer/RegisterCardContainer'
import ComponentInfoList from './constants/ComponentInfoConstant'
import ContextContainer from './contexts/ContextContainer'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ContextContainer>
        <RegisterCardContainer componentInfoList={ComponentInfoList}>
          <AppRouter />
        </RegisterCardContainer>
      </ContextContainer>
    </BrowserRouter>
  )
}

export default App
