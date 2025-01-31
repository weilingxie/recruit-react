import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { useHistory } from 'react-router-dom'

export type HeaderProps = {
  title: string
  toPath: string
  headerButtonAriaLabel: string
  headerIcon: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({
  title = 'Register Card Form',
  toPath = '/',
  headerButtonAriaLabel = 'header button',
  headerIcon,
}: HeaderProps) => {
  const history = useHistory()
  const onClickHeaderButton = (): void => {
    history.push(toPath)
  }

  return (
    <header data-testid="Header">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={onClickHeaderButton}
            aria-label={headerButtonAriaLabel}
          >
            {headerIcon}
          </IconButton>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              textAlign: 'center',
            }}
            aria-label={title}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
