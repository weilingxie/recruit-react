import ArrowBack from '@mui/icons-material/ArrowBack'
import MenuIcon from '@mui/icons-material/Menu'
import { IComponentInfo } from '../types/Types'

const ComponentInfoList: IComponentInfo[] = [
  {
    Path: '/Menu',
    Title: 'Menu',
    HeaderMenuIcon: <ArrowBack fontSize="large" />,
    ToPath: '/RegisterCardForm',
    HeaderButtonAriaLabel: 'go back to card register form',
    Default: true,
  },
  {
    Path: '/RegisterCardForm',
    Title: 'Register card form',
    HeaderMenuIcon: <MenuIcon fontSize="large" />,
    ToPath: '/Menu',
    HeaderButtonAriaLabel: 'open menu',
  },
]

export default ComponentInfoList
