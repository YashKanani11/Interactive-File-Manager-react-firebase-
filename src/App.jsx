import React from 'react'
import BackgroundDark from './Components/BackgroundDark'
import Foreground from './Components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <BackgroundDark/>
      <Foreground/>
      </div>
  )
}

export default App