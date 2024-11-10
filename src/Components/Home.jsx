import React from 'react'
import backgroundImageDesktop from '../assets/bg7.png'
import backgroundImageMobile from '../assets/bg5.png'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

function Home ({ setRoute }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Container
      maxWidth={false}
      style={{
        backgroundImage: `url(${
          !isMobile ? backgroundImageMobile : backgroundImageDesktop
        })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          gap: 2,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center' // Center content horizontally
        }}
      >
        {/* Centered text */}
        <Typography
          variant='h4'
          sx={{
            color: '#42462E',
            fontWeight: 'bold',
            textAlign: 'center',
            position: 'absolute',
            top: '12%',
            marginBottom: 4 // Adds space below the text
          }}
        >
          Shashikumar <br></br>& <br></br>
          Aishwarya
        </Typography>
        <Typography
          variant='h5'
          sx={{
            color: '#42462E',
            fontWeight: 'bold',
            textAlign: 'center',
            position: 'absolute',
            top: '30%',
            marginBottom: 4 // Adds space below the text
          }}
        >
          are getting married
        </Typography>

        <Typography
          variant='h6'
          sx={{
            color: '#42462E',
            fontWeight: 'bold',
            textAlign: 'center',
            position: 'absolute',
            bottom: '10%',
            marginBottom: 4 // Adds space below the text
          }}
        >
          Welcome to the Mamadapur & Patted wedding celebration—a beautiful
          union of love, family, and tradition!
        </Typography>
        {/* Buttons */}
        <Button
          onClick={() => setRoute('gallery')}
          variant='outlined'
          size='large'
          sx={{
            borderColor: 'white',
            borderRadius: '20px',
            position: 'absolute',
            left: '17%',
            top: '5%',
            color: '#325b32',
            width: '7rem',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'white',
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.5)'
            }
          }}
        >
          Gallery
        </Button>
        <Button
          onClick={() => setRoute('video')}
          variant='outlined'
          size='large'
          sx={{
            borderColor: 'white',
            borderRadius: '20px',
            position: 'absolute',
            left: '53%',
            top: '5%',
            color: '#325b32',
            width: '7rem',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'white',
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.5)'
            }
          }}
        >
          Video
        </Button>
        <Button
          variant='outlined'
          size='large'
          onClick={() => setRoute('venue')}
          sx={{
            borderColor: 'white',
            borderRadius: '20px',
            position: 'absolute',
            left: '53%',
            bottom: '5%',
            color: '#325b32',
            width: '7rem',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'white',
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.5)'
            }
          }}
        >
          <a href='https://maps.app.goo.gl/MFDRXrwfYoGXNcybA' target='_blank'>
            <div class='venue'>VENUE</div>
          </a>
        </Button>
        <Button
          variant='outlined'
          size='large'
          onClick={() => setRoute('events')}
          sx={{
            borderColor: 'white',
            borderRadius: '20px',
            position: 'absolute',
            left: '17%',
            bottom: '5%',
            color: '#325b32',
            width: '7rem',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'white',
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.5)'
            }
          }}
        >
          Events
        </Button>
      </Box>
    </Container>
  )
}

export default Home
