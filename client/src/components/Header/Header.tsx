import React, { MouseEvent } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

type HeaderProps = {
    title: string
    onClickHeaderButton(event: React.MouseEvent<HTMLButtonElement>): void
    headerIcon: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({
    title = 'Register Card Form',
    headerIcon,
    onClickHeaderButton
} : HeaderProps) => {        

    return (
    <header data-testid="Header">
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    onClick={onClickHeaderButton}
                >
                    { headerIcon }
                </IconButton>
                <Typography 
                    variant="h5" 
                    sx={{ 
                        flexGrow: 1,
                        textAlign: 'center' 
                        }}>
                    {title}
                </Typography>
            </Toolbar>            
        </AppBar>        
    </header>
    )
}

export default Header