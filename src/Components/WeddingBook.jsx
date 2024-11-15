import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import { imageList } from '../imageList'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import useMediaQuery from '@mui/material/useMediaQuery'
import backgroundImageDesktop from '../assets/bg11.webp'
import backgroundImageMobile from '../assets/bg10.webp'
import gallery from '../assets/DSC06303.JPG'

import { Box, Button } from '@mui/material'

function WeddingBook ({ setRoute }) {
  const isMobile = useMediaQuery('(max-width:900px)')

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
        display: 'flex',
        paddingTop: '5rem',
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
          onClick={() => setRoute('video')}
          variant='outlined'
          size='large'
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
          video
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
          Gallery
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
        ;
        <Button
          variant='outlined'
          size='large'
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
          <a
            href='https://drive.google.com/drive/folders/1xnl3xw3F8lMO3EXMEuOq6Z1OSaqeSXlo?usp=sharing'
            target='_blank'
          >
            Pre Wedding Pictures
          </a>
        </Button>
        ;
        <Button
          variant='outlined'
          size='large'
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
          <a
            href='https://drive.google.com/drive/folders/1j-Sei43rwbeiFxTOh2NVu8iQgDJVMhr-?usp=sharing'
            target='_blank'
          >
            Devakarya + Haldi Pictures
          </a>
        </Button>
      </Box>
      <Card
        sx={{
          height: '30%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 10,
          backgroundColor: 'transparent',
          position: 'absolute'
        }}
      >
        <CardMedia
          component='img'
          image={gallery}
          alt='Shashi weds Aishu'
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'contain'
          }}
        />
      </Card>
    </div>
  )
}

export default WeddingBook
