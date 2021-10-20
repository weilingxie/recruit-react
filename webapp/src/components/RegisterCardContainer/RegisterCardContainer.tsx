import React from 'react'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom'
import { DefaultComponentInfo } from '../../constans/ComponentInfoConstant'
import { ComponentInfo } from '../../types/ComponentInfo'
import { Container } from '@mui/material'

type RegisterCardContainerProps = {
    componentInfoList: ComponentInfo[]
    children?: React.ReactNode
}

const RegisterCardContainer: React.FC<RegisterCardContainerProps> = 
({ componentInfoList, children }: RegisterCardContainerProps) => {
    const location = useLocation()
    const { Title, HeaderMenuIcon, ToPath } = componentInfoList.find(c => c.Path === location.pathname) || DefaultComponentInfo

    return (
        <Container sx={{height: '100vh'}} data-testid='RegisterCardContainer'>
            <Header
                title = {Title}
                headerIcon = {HeaderMenuIcon}
                toPath = {ToPath}
            />
            {children}
        </Container>
    )
}

export default RegisterCardContainer