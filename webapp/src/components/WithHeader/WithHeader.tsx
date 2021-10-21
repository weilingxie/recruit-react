import React from 'react'
import Header from '../Header/Header'
import { HeaderProps } from '../Header/Header'
import { useLocation } from 'react-router-dom'
import ComponentInfo from '../../types/ComponentInfo'
import ComponentInfoList from '../../constants/ComponentInfoConstant'

const WithHeader = (Component: React.FC<HeaderProps>) => {
  return () => {
    const location = useLocation()
    const getComponentInfoByPath = (path: string): ComponentInfo =>
      ComponentInfoList.filter((c) => c.Path === path)[0] ||
      ComponentInfoList.filter((c) => c.Default === true)[0]

    const { Title, HeaderMenuIcon, ToPath } = getComponentInfoByPath(
      location.pathname
    )

    return (
      <Component title={Title} headerIcon={HeaderMenuIcon} toPath={ToPath} />
    )
  }
}

export default WithHeader(Header)
