import React, { useState } from 'react'
import Home from './Components/Home'
import { useTheme } from '@mui/material/styles'
import WeddingBook from './Components/WeddingBook'
import Video from './Components/Video'

function App () {
  const [route, setRoute] = useState('')

  return (
    <>
      {route === '' && <Home setRoute={setRoute} />}
      {route === 'gallery' && <WeddingBook setRoute={setRoute} />}
      {route === 'video' && <Video setRoute={setRoute} />}
    </>
  )
}

export default App
