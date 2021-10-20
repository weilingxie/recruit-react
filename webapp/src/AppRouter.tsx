import { Route, Switch, Redirect } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import RegisterCardForm from './components/RegisterCardForm/RegisterCardForm'

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path="/RegisterCardForm" exact>
        <RegisterCardForm />
      </Route>
      <Route path="/Menu" exact>
        <Menu />
      </Route>
      <Route path="/">
        <Redirect to="/RegisterCardForm" />
      </Route>
    </Switch>
  )
}

export default AppRouter
