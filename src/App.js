import React, { useState } from 'react'
import Home from './Components/Home'
import { useTheme } from '@mui/material/styles'
import WeddingBook from './Components/WeddingBook'

function App () {
  const [route, setRoute] = useState('')

  return (
    <>
      {route === '' && <Home setRoute={setRoute} />}
      {route === 'gallery' && <WeddingBook setRoute={setRoute} />}
    </>
  )
}

export default App
