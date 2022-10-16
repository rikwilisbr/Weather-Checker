import React, { useState } from 'react'
import Search from './Search'
import Box from './Box'


function App() {

    const [dimensions, setDimensions] = React.useState({ 
            height: window.innerHeight,
            width: window.innerWidth
          })

    React.useEffect(() => {
            function handleResize() {
              setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
              })}
              window.addEventListener('resize', handleResize)       
            })
    
  return (
    <div className='main' style={{width: dimensions.width, height: dimensions.height}}>
        <h1 className='text-center'>Weather Checker</h1>
        <Box />
    </div>
    

  )
}

export default App