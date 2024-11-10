import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import heroImg from '../assets/p1.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function Home() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const containerHeight = '60vh'

  return (
    <Box sx={{ flexGrow: 1, padding: 2, height: containerHeight }}>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        sx={{ height: containerHeight }}
      >
        <Grid item xs={isMobile ? 12 : 5} sx={{ height: containerHeight }}>
          <Item
            sx={{
              // height: '100%',
              background: 'transparent',
              boxShadow: 10,
              padding: '0',
              height: isMobile ? `(${+window.innerWidth} - ${50})px` : '100%',
              width: isMobile ? '100%' : isTablet ? '80%' : '100%',
            }}
          >
            <img
              src={heroImg}
              alt=''
              style={{
                height: '100%',
                width: '80%',
                objectFit: 'contain',
              }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
