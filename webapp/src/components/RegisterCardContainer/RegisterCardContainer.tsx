import React from 'react'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom'
import { IComponentInfo } from '../../types/Types'
import { getComponentInfoByPath } from '../../helpers/helper'

type RegisterCardContainerProps = {
  componentInfoList: IComponentInfo[]
  children?: React.ReactNode
}

const RegisterCardContainer: React.FC<RegisterCardContainerProps> = ({
  componentInfoList,
  children,
}: RegisterCardContainerProps) => {
  const location = useLocation()
  const { Title, HeaderMenuIcon, ToPath, HeaderButtonAriaLabel } =
    getComponentInfoByPath(componentInfoList, location.pathname)

  return (
    <>
      <Header
        title={Title}
        headerIcon={HeaderMenuIcon}
        toPath={ToPath}
        HeaderButtonAriaLabel={HeaderButtonAriaLabel}
      />
      {children}
    </>
  )
}

export default RegisterCardContainer
