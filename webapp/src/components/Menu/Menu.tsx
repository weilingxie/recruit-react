import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

const MenuTextContent = 'This is menu content'

const Menu: React.FC = () => {
  return (
    <div data-testid="Menu" style={{ height: '100%' }}>
      <Card
        sx={{
          padding: '10px',
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: '100%' }}
        >
          <Typography variant="h5" sx={{ height: '100%', textAlign: 'center' }}>
            {MenuTextContent}
          </Typography>
        </Grid>
      </Card>
    </div>
  )
}

export default Menu
