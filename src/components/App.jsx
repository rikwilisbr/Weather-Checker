import React, {useState} from 'react'
import Box from './Box'
import Search from './Search'
import { Typography } from '@mui/material'


function App() {

  const [city, setCity] = useState('')

  const [temp, setTemp] = useState("")

  const [desc, setDesc] = useState("")

  const [image, setImage] = useState("")

  const [cityName, setCityName] = useState("")

  function getCity(event) {
      setCity(event.target.value)
  }
  
  function getData(){

      const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=b5ad28dedf1989aba8f4eb9f41591455&units=metric&lang=pt_br'

      fetch(url).then( (response) => response.json()).then( (data) => {
          setTemp(Math.round(data.main.temp) + '°C')
          setDesc(data.weather[0].description)
          setImage('http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png')
          setCityName(data.name)

          document.querySelector('.icon').classList.remove('visually-hidden')
      })}

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
        <header>
          <Typography className='' variant="h5" component="h2">Weather Checker</Typography>
        </header>
        <div className='container'>
          <div className='text-center'>
            <Search change={getCity} click={getData} value={city} />
          </div>
          <Box cityName={cityName} image={image} temp={temp} desc={desc} />
          <div className='row visually-hidden'>
            <div className='col col-12'>
              <div className='section2'></div>
            </div>
          </div>

          </div>
      
    </div>
    

  )
}

export default App