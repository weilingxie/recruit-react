import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import RegisterCardContainer from './components/RegisterCardContainer/RegisterCardContainer'
import WithHeader from './components/WithHeader/WithHeader'
import ComponentInfoList from './constants/ComponentInfoConstant'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <WithHeader />
      <RegisterCardContainer componentInfoList={ComponentInfoList}>
        <AppRouter />
      </RegisterCardContainer>
    </BrowserRouter>
  )
}

export default App
