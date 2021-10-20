import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import RegisterCardForm from './components/RegisterCardForm/RegisterCardForm'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/RegisterCardForm">
          <RegisterCardForm />
        </Route>
        <Route path="/Menu">
          <Menu />          
        </Route>
        <Route path="/">
          <Redirect to="/RegisterCardForm" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
