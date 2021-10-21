import React from 'react'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom'
import { ComponentInfo } from '../../types/ComponentInfo'
import { Container } from '@mui/material'

type RegisterCardContainerProps = {
  componentInfoList: ComponentInfo[]
  children?: React.ReactNode
}

const RegisterCardContainer: React.FC<RegisterCardContainerProps> = ({
  componentInfoList,
  children,
}: RegisterCardContainerProps) => {
  const location = useLocation()
  const getComponentInfoByPath = (path: string): ComponentInfo =>
    componentInfoList.filter((c) => c.Path === path)[0] ||
    componentInfoList.filter((c) => c.Default === true)[0]

  const { Title, HeaderMenuIcon, ToPath } = getComponentInfoByPath(
    location.pathname
  )

  return (
    <Container sx={{ height: '100vh' }} data-testid="RegisterCardContainer">
      <Header title={Title} headerIcon={HeaderMenuIcon} toPath={ToPath} />
      {children}
    </Container>
  )
}

export default RegisterCardContainer
