import { Container } from '@mui/material'
import { Route, Switch, Redirect } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import RegisterCardForm from './components/RegisterCardForm/RegisterCardForm'
import { ICreditCard } from './types/Types'

const onSubmitCallback = (creditCard: ICreditCard): Promise<void> => {
  console.log(creditCard)
  alert(JSON.stringify(creditCard))
  return Promise.resolve()
}

const AppRouter: React.FC = () => {
  return (
    <Container sx={{ paddingTop: '30px' }} data-testid="RegisterCardContainer">
      <Switch>
        <Route path="/RegisterCardForm" exact>
          <RegisterCardForm onSubmitCallback={onSubmitCallback} />
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
