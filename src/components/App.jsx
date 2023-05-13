import React, {useState, useRef, useLayoutEffect} from 'react'
import Box from './Box'
import Search from './Search'
import Forecast from './Forecast'
import { Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function App() {

  const [city, setCity] = useState('')

  const [temp, setTemp] = useState("")

  const [desc, setDesc] = useState("")

  const [icon, setIcon] = useState("")

  const [cityName, setCityName] = useState("")

  const [feelsLike, setFeelsLike] = useState("")



  const [nextHour, setNextHour] = useState({
    nextHour: '',
    nextHour2: '',
    nextHour3: '',
  })

  const [minMax, setMinMax] = useState({
    minMax: '',
    minMax2: '',
    minMax3: '',
  })

  const [humidity, setHumidity] = useState({
    humidity: '',
    humidity2: '',
    humidity3: '',
  })

  const [icon_, setIcon_] = useState({
    icon_:'',
    icon_2:'',
    icon_3:''
  })

  //forecast2
  
  const [nextHour2, setNextHour2] = useState({
    nextHour: '',
    nextHour2: '',
    nextHour3: '',
  })

  const [minMax2, setMinMax2] = useState({
    minMax: '',
    minMax2: '',
    minMax3: '',
  })

  const [humidity2, setHumidity2] = useState({
    humidity: '',
    humidity2: '',
    humidity3: '',
  })

  const [icon2, setIcon2] = useState({
    icon_:'',
    icon_2:'',
    icon_3:''
  })

  const [errorMessage, setErrorMessage] = useState(Boolean)

  function getCity(event) {
      setCity(event.target.value)
  }

  async function getForecast(path, path2) {
    await fetch(path).then( (response) => response.json()).then( (data) => {
      if (data.cod === 200){
        setTemp(Math.round(data.main.temp) + '°C')
        setDesc(data.weather[0].description)
        setIcon('http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png')
        setCityName(data.name)
        setFeelsLike('Feels Like ' + Math.round(data.main.feels_like)+'°C')

        document.querySelector('.icon').classList.remove('visually-hidden')
        setErrorMessage(false)
      } else {
        setErrorMessage(true)
        document.querySelector('.icon').classList.add('visually-hidden')
      }
      

      })

      await fetch(path2).then((reponse)=> reponse.json()).then((data) => {
        if (data.cod === '200' ){

          setNextHour(()=>{
            return {
              nextHour: data.list[0].dt_txt.slice(10).substring(0,6),
              nextHour2: data.list[1].dt_txt.slice(10).substring(0,6),
              nextHour3: data.list[2].dt_txt.slice(10).substring(0,6)
            }
          })

          setMinMax(()=>{
            return {
              minMax: Math.round(data.list[0].main.temp_min) + '°C/' + Math.round(data.list[0].main.temp_max) + '°C',
              minMax2: Math.round(data.list[1].main.temp_min) + '°C/' + Math.round(data.list[1].main.temp_max) + '°C',
              minMax3:  Math.round(data.list[2].main.temp_min) + '°C/' + Math.round(data.list[2].main.temp_max) + '°C'
            }
          })

          setHumidity(()=>{
            return{
              humidity:data.list[0].main.humidity + '%',
              humidity2:data.list[1].main.humidity + '%',
              humidity3:data.list[2].main.humidity + '%'

            }
          })

          setIcon_(()=>{
            return {
              icon_:'http://openweathermap.org/img/wn/'+data.list[3].weather[0].icon+'@2x.png',
              icon_2:'http://openweathermap.org/img/wn/'+data.list[4].weather[0].icon+'@2x.png',
              icon_3:'http://openweathermap.org/img/wn/'+data.list[5].weather[0].icon+'@2x.png'
            }
          })

          //forecast2

          
          setNextHour2(()=>{
            return {
              nextHour: data.list[3].dt_txt.slice(10).substring(0,6),
              nextHour2: data.list[4].dt_txt.slice(10).substring(0,6),
              nextHour3: data.list[5].dt_txt.slice(10).substring(0,6)
            }
          })

          setMinMax2(()=>{
            return {
              minMax: Math.round(data.list[0].main.temp_min) + '°C/' + Math.round(data.list[3].main.temp_max) + '°C',
              minMax2: Math.round(data.list[1].main.temp_min) + '°C/' + Math.round(data.list[4].main.temp_max) + '°C',
              minMax3:  Math.round(data.list[2].main.temp_min) + '°C/' + Math.round(data.list[5].main.temp_max) + '°C'
            }
          })

          setHumidity2(()=>{
            return{
              humidity:data.list[3].main.humidity + '%',
              humidity2:data.list[4].main.humidity + '%',
              humidity3:data.list[5].main.humidity + '%'

            }
          })

          setIcon2(()=>{
            return {
              icon_:'http://openweathermap.org/img/wn/'+data.list[3].weather[0].icon+'@2x.png',
              icon_2:'http://openweathermap.org/img/wn/'+data.list[4].weather[0].icon+'@2x.png',
              icon_3:'http://openweathermap.org/img/wn/'+data.list[5].weather[0].icon+'@2x.png'
            }
          })

        } else {
          console.log('error')
        }
      })
  }

      function getData(){
        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+ process.env.REACT_APP_KEY +'&units=metric'
        const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+ process.env.REACT_APP_KEY +'&units=metric'
        getForecast(url, url2)
      }

      function getCurrentData(pos){
        const lat = String(pos.coords.latitude)
        const lon = String(pos.coords.longitude)

        const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid='+process.env.REACT_APP_KEY
        const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&units=metric&appid='+process.env.REACT_APP_KEY
        getForecast(url, url2)

      }

      function initCoords() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCurrentData, console.log);
          } else {
            alert("Your browser does not support Geolocation!");
          }
        }
    
    const isFirsRender = useRef(true)

    useLayoutEffect(()=> {
      if (isFirsRender.current) {
        initCoords()
        isFirsRender.current = false
        return;
      }
    }) 


  return (
    <div className='mainmain'>
        <header>
          <Typography className='header-title' style={{cursor: 'pointer'}} variant="h5" component="h2">Weather Checker</Typography>
            <div>
              <Search change={getCity} click={getData} value={city} />
            </div>
            <div>
              <a href='https://github.com/rikwilisbr/Weather-Checker' target='_blank' rel='noreferrer' className='social-icon'>
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/henrique-william-495991219/" target="_blank" rel='noreferrer' className='social-icon2'>
                <LinkedInIcon />
              </a>
            </div>
        </header>
        <div>
        <section className='section1'>
          <div className='container-fluid p-0'>
            <Box 
              feelsLike={errorMessage? '' : feelsLike} 
              cityName={errorMessage ? 'Not found :(' : cityName} 
              icon={errorMessage ? '' : icon} 
              temp={errorMessage ? '' : temp} 
              desc={errorMessage ? '' : desc} 
              refresh={() => document.location.reload()} 
            />
          </div> 
          </section>
          <section className='section2'>
            <Forecast
              hour1={ errorMessage ? '-' : nextHour.nextHour}
              hour2={ errorMessage ? '-' : nextHour.nextHour2}
              hour3={ errorMessage ? '-' : nextHour.nextHour3}

              minmax={ errorMessage ? '-' : minMax.minMax}
              minmax2={ errorMessage ? '-' : minMax.minMax2}
              minmax3={ errorMessage ? '-' : minMax.minMax3}

              humidity ={errorMessage ? '-' : humidity.humidity}
              humidity2 ={errorMessage ? '-' : humidity.humidity2}
              humidity3 ={errorMessage ? '-' : humidity.humidity3}

              icon= {errorMessage ? '-' : icon_.icon_}
              icon2= {errorMessage ? '-' : icon_.icon_2}
              icon3= {errorMessage ? '-' : icon_.icon_3}

              hour1_2={ errorMessage ? '-' : nextHour2.nextHour}
              hour2_2={ errorMessage ? '-' : nextHour2.nextHour2}
              hour3_2={ errorMessage ? '-' : nextHour2.nextHour3}

              minmax_2={ errorMessage ? '-' : minMax2.minMax}
              minmax2_2={ errorMessage ? '-' : minMax2.minMax2}
              minmax3_2={ errorMessage ? '-' : minMax2.minMax3}

              humidity_2 ={errorMessage ? '-' : humidity2.humidity}
              humidity2_2 ={errorMessage ? '-' : humidity2.humidity2}
              humidity3_2 ={errorMessage ? '-' : humidity2.humidity3}

              icon_2= {errorMessage ? '-' : icon2.icon_}
              icon2_2= {errorMessage ? '-' : icon2.icon_2}
              icon3_2= {errorMessage ? '-' : icon2.icon_3}
             />
          </section>
          <footer className='text-center' >
              <Typography variant='h7'>
                © Developed by Henrique William
              </Typography>
          </footer>
        </div>  
    </div>
    

  )
}

export default App