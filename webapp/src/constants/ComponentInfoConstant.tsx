import ArrowBack from '@mui/icons-material/ArrowBack'
import MenuIcon from '@mui/icons-material/Menu'
import { IComponentInfo } from '../types/Types'

const ComponentInfoList: IComponentInfo[] = [
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

export default ComponentInfoList
