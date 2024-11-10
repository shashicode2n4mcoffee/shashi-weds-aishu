import React from 'react'
import backgroundImage from './assets/bg1.webp'
import WeddingBook from './Components/WeddingBook'
import Container from '@mui/material/Container'
import Home from './Components/Home'

function App() {
  return (
    <Container
      maxWidth={false}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* <WeddingBook /> */}
      <Home />
    </Container>
  )
}

export default App
