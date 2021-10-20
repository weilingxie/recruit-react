import React from 'react'
import Header from '../Header/Header'
import { useHistory } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

const MenuTitle = 'Menu'
const RegisterCardFormPath = '/RegisterCardForm'
const MenuTextContent = 'This is menu content'
const HeaderMenuIcon = <MenuIcon fontSize="large" /> 

const Menu: React.FC = () => {
    const history = useHistory()

    const switchToRegisterCardForm = ():void => {
        history.push(RegisterCardFormPath)
    }

    return (
    <div data-testid="Menu" style={{ height: '100%'}}>
        <Header
            title = {MenuTitle}
            headerIcon = {HeaderMenuIcon}
            onClickHeaderButton = {switchToRegisterCardForm}
        />
        <Card
            sx={{
                padding: '10px'
            }}
        >
            <Grid container 
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ height: '100%' }}
            >
                <Typography variant="h5" sx={{ height: '100%', textAlign: 'center' }}>
                    {MenuTextContent}
                </Typography>
            </Grid>
        </Card>
    </div>
    )
}

export default Menu