import React from 'react'
import Button from '@mui/material/Button'
import Header from '../Header/Header'
import { useHistory } from 'react-router-dom'
import ArrowBack from '@mui/icons-material/ArrowBack'

const RegisterCardFormTitle = 'Register card form'
const MenuPath = '/Menu'
const HeaderArrowBackIcon = <ArrowBack fontSize="large" />

const RegisterCardForm: React.FC = () => {
    const history = useHistory()

    const switchToMenu = ():void => {
        history.push(MenuPath)
    }

    return (
    <div data-testid="RegisterCardForm">
        <Header
            title = {RegisterCardFormTitle}            
            headerIcon = {HeaderArrowBackIcon}
            onClickHeaderButton = {switchToMenu}
        />
        <Button variant="contained" color="success">Submit</Button>
    </div>
    )
}

export default RegisterCardForm