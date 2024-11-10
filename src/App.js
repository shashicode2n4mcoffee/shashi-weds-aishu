import React, { useState } from 'react'
import Home from './Components/Home'
import WeddingBook from './Components/WeddingBook'
import Video from './Components/Video'
import TimelineW from './Components/Timeline'

function App () {
  const [route, setRoute] = useState('')

  return (
    <>
      {route === '' && <Home setRoute={setRoute} />}
      {route === 'gallery' && <WeddingBook setRoute={setRoute} />}
      {route === 'video' && <Video setRoute={setRoute} />}
      {route === 'events' && <TimelineW setRoute={setRoute} />}
    </>
  )
}

export default App
