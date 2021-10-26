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
          boxShadow: 0,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            {MenuTextContent}
          </Typography>
        </Grid>
      </Card>
    </div>
  )
}

export default Menu
