import ArrowBack from '@mui/icons-material/ArrowBack'
import MenuIcon from '@mui/icons-material/Menu'
import { ComponentInfo } from '../types/ComponentInfo'

const ComponentInfoList: ComponentInfo[] = [
  {
    Path: '/Menu',
    Title: 'Menu',
    HeaderMenuIcon: <MenuIcon fontSize="large" />,
    ToPath: '/RegisterCardForm',
    Default: true,
  },
  {
    Path: '/RegisterCardForm',
    Title: 'Register card form',
    HeaderMenuIcon: <ArrowBack fontSize="large" />,
    ToPath: '/Menu',
  },
]

export { ComponentInfoList }
