import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'

export default function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        {/* Logo or Title */}
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Wedding Website
        </Typography>

        {/* Conditional rendering for mobile */}
        {isMobile ? (
          <IconButton edge='end' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
        ) : (
          // Desktop layout with buttons
          <Box>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Venue</Button>
            <Button color='inherit'>Photos</Button>
            <Button color='inherit'>Videos</Button>
            <Button color='inherit'>Events</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}
