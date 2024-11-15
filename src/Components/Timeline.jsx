import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import backgroundImageDesktop from '../assets/bg11.webp'
import backgroundImageMobile from '../assets/bg10.webp'
import { Button, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'

export default function TimelineW ({ setRoute }) {
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
          Events
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
          onClick={() => setRoute('video')}
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
          Video
        </Button>
      </Box>
      {/* YouTube Video Embed */};
      <Timeline
        position='alternate'
        style={{
          backgroundImage: `url(${
            !isMobile ? backgroundImageMobile : backgroundImageDesktop
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0',
          paddingTop: '5rem'
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Nov 14 : Devkarya function</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Nov 15 : Mehandi function</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Nov 17 : Engagement function</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Nov 18 : Wedding</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

// color='success'
