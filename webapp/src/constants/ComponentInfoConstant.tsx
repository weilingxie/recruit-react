import ArrowBack from '@mui/icons-material/ArrowBack'
import MenuIcon from '@mui/icons-material/Menu'
import { IComponentInfo } from '../types/Types'

const ComponentInfoList: IComponentInfo[] = [
  {
    Path: '/Menu',
    Title: 'Menu',
    HeaderMenuIcon: <ArrowBack fontSize="large" />,
    ToPath: '/RegisterCardForm',
    HeaderButtonAriaLabel: 'show card register form',
  },
  {
    Path: '/RegisterCardForm',
    Title: 'Register card form',
    HeaderMenuIcon: <MenuIcon fontSize="large" />,
    ToPath: '/Menu',
    HeaderButtonAriaLabel: 'show menu',
    Default: true,
  },
]

export default ComponentInfoList
