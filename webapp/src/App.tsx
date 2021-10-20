import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import RegisterCardContainer from './components/RegisterCardContainer/RegisterCardContainer'
import { ComponentInfoList } from './constans/ComponentInfoConstant'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RegisterCardContainer componentInfoList={ComponentInfoList}>        
          <AppRouter />                    
      </RegisterCardContainer>
    </BrowserRouter>
  );
}

export default App;
