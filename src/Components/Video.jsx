import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import backgroundImageDesktop from '../assets/bg11.webp'
import backgroundImageMobile from '../assets/bg10.webp'

function Video ({ setRoute }) {
  // Use media query to check if the screen is small (mobile)
  const isMobile = useMediaQuery('(max-width:900px)')
  const [video, setVideo] = useState(0)

  const getVideo = () => {
    if (video === 0) {
      return 'https://www.youtube.com/embed/7gvYDNesZ8w'
    } else if (video === 1) {
      return 'https://www.youtube.com/embed/QQMXKr7meS4'
    }
    if (video === 2) {
      return 'https://www.youtube.com/embed/Y3sSXMnbWro'
    }
    if (video === 3) {
      return 'https://www.youtube.com/embed/8Z68xMyE0uA'
    }

    return 'https://www.youtube.com/embed/7gvYDNesZ8w'
  }
  return (
    <div
      style={{
        backgroundImage: `url(${
          !isMobile ? backgroundImageMobile : backgroundImageDesktop
        })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        paddingTop: '5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '10px' : '0', // Add padding on mobile
        boxSizing: 'border-box', // Ensure padding does not affect width
        position: 'relative'
      }}
    >
      <Box
        sx={{
          gap: 2
        }}
      >
        <Button
          onClick={() => setRoute('')}
          variant='outlined'
          size='large'
          sx={{
            zIndex: '10',
            borderColor: 'white',
            borderRadius: '20px',
            position: 'absolute',
            left: '17%',
            top: '12%',
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
          Home
        </Button>
        <Button
          variant='outlined'
          size='large'
          onClick={() => setRoute('gallery')}
          sx={{
            borderColor: 'white',
            zIndex: '10',
            borderRadius: '20px',
            position: 'absolute',
            left: '53%',
            top: '12%',
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
          variant='outlined'
          size='large'
          sx={{
            borderColor: 'none',
            zIndex: '10',
            position: 'absolute',
            left: '0%',
            top: '0%',
            color: '#325b32',
            width: '100vw',
            fontWeight: '1000',
            fontSize: '20px',
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
            zIndex: '10',
            position: 'absolute',
            left: '53%',
            top: '23%',
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
            zIndex: '10',
            left: '17%',
            top: '23%',
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
        <Button
          variant='outlined'
          size='large'
          onClick={() => setVideo(0)}
          sx={{
            borderColor: 'white',
            borderRadius: '20px',
            position: 'absolute',
            zIndex: '10',
            left: '17%',
            bottom: '18%',
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
          Pre-Wedding
        </Button>
        <Button
          variant='outlined'
          size='large'
          onClick={() => setVideo(1)}
          sx={{
            borderColor: 'white',
            borderRadius: '20px',
            position: 'absolute',
            zIndex: '10',
            right: '17%',
            bottom: '18%',
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
          Retro Video
        </Button>
        <Button
          variant='outlined'
          size='large'
          onClick={() => setVideo(2)}
          sx={{
            borderColor: 'white',
            borderRadius: '20px',
            position: 'absolute',
            zIndex: '10',
            right: '17%',
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
          Haldi and Devakarya
        </Button>
        ;
        <Button
          variant='outlined'
          size='large'
          onClick={() => setVideo(3)}
          sx={{
            borderColor: 'white',
            borderRadius: '20px',
            position: 'absolute',
            zIndex: '10',
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
          Bangles ceremony
        </Button>
      </Box>

      {/* YouTube Video Embed */}
      <Box sx={{ zIndex: 1 }}>
        <iframe
          width='100%'
          height={isMobile ? '250' : '1000'}
          src={getVideo()}
          title='Wedding Video'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </Box>
    </div>
  )
}

export default Video
