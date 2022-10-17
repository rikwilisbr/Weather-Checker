import React, {useState} from 'react'
import Box from './Box'
import Search from './Search'
import { Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function App() {

  const [city, setCity] = useState('New York')

  const [temp, setTemp] = useState("")

  const [desc, setDesc] = useState("")

  const [icon, setIcon] = useState("")

  const [cityName, setCityName] = useState("")

  const [errorMessage, setErrorMessage] = useState(Boolean)

  function getCity(event) {
      setCity(event.target.value)
  }
  
  function getData(){
      const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+ process.env.REACT_APP_KEY +'&units=metric&lang=pt_br'
      fetch(url).then( (response) => response.json()).then( (data) => {
        if (data.cod == 200){
          setTemp(Math.round(data.main.temp) + '°C')
          setDesc(data.weather[0].description)
          setIcon('http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png')
          setCityName(data.name)

          document.querySelector('.icon').classList.remove('visually-hidden')
          setErrorMessage(false)
        } else {
          setErrorMessage(true)
          document.querySelector('.icon').classList.add('visually-hidden')
        }

      })}

  window.onload = getData()

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
    <div className='mainmain'>
        <header>
          <Typography className='' style={{cursor: 'pointer'}} variant="h5" component="h2">Weather Checker</Typography>
            <div>
              <Search change={getCity} click={getData} value={city} />
            </div>
            <div>
              <a href='https://github.com/rikwilisbr/Weather-Checker' target='_blank' className='social-icon'>
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/henrique-william-495991219/" target="_blank" className='social-icon2'>
                <LinkedInIcon />
              </a>
            </div>
        </header>
        <div className='main' style={{width: dimensions.width, height: dimensions.height}}>    
          <div className='container'>
            <Box refresh={() => document.location.reload()} cityName={errorMessage ? 'Not found :(' : cityName} icon={errorMessage ? '' : icon} temp={errorMessage ? '' : temp} desc={errorMessage ? '' : desc} />
            <div className=''>
              <div className='col col-12'>
                <div className='section2'></div>
              </div>
            </div>

            </div>
      
    </div>
    </div>
    

  )
}

export default App