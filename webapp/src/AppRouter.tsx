import { Container } from '@mui/material'
import { Route, Switch, Redirect } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import RegisterCardForm from './components/RegisterCardForm/RegisterCardForm'

const AppRouter: React.FC = () => {
  return (
    <Container sx={{ height: '100vh' }} data-testid="RegisterCardContainer">
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
    </Container>
  )
}

export default AppRouter
