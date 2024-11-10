import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import { imageList } from '../imageList'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import useMediaQuery from '@mui/material/useMediaQuery'

function WeddingBook() {
  // Use media query to check if the screen is small (mobile)
  const isMobile = useMediaQuery('(max-width:900px)')
  console.log('====MOBILE==== : ', isMobile)

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '10px' : '0', // Add padding on mobile
        boxSizing: 'border-box', // Ensure padding does not affect width
      }}
    >
      <HTMLFlipBook
        width={isMobile ? window.innerWidth * 0.45 : window.innerWidth * 0.4} // Adjust width for mobile and desktop
        height={isMobile ? 250 : 500} // Adjust height for mobile and desktop
        style={{
          width: '100%',
          height: '100%',
          maxWidth: isMobile ? '48vw' : '95vw', // Responsive max-width
          maxHeight: '90vh', // Prevent flipbook from going beyond viewport height
        }}
      >
        {imageList.map((image, index) => (
          <div key={index} className='page' style={{ height: '100%' }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 10,
                backgroundColor: 'transparent',
              }}
            >
              <CardMedia
                component='img'
                image={image}
                alt={`Page ${index + 1}`}
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </Card>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  )
}

export default WeddingBook
