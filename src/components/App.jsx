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

  const [nextHour, setNextHour] = useState('')
  const [nextHour2, setNextHour2] = useState('')
  const [nextHour3, setNextHour3] = useState('')

  const [minMax, setMinMax] = useState('')
  const [minMax2, setMinMax2] = useState('')
  const [minMax3, setMinMax3] = useState('')

  const [humidity, setHumidity] = useState('')
  const [humidity2, setHumidity2] = useState('')
  const [humidity3, setHumidity3] = useState('')


  const [icon_, setIcon_] = useState('')
  const [icon_2, setIcon_2] = useState('')
  const [icon_3, setIcon_3] = useState('')

  const [errorMessage, setErrorMessage] = useState(Boolean)




  function getCity(event) {
      setCity(event.target.value)
  }
  
  function getData(){
      const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+ process.env.REACT_APP_KEY +'&units=metric&lang=pt_br'
      fetch(url).then( (response) => response.json()).then( (data) => {
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
        
        const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+ process.env.REACT_APP_KEY +'&units=metric&lang=pt_br'
        fetch(url2).then((reponse)=> reponse.json()).then((data) => {
          if (data.cod == 200 ){
            const prevHour = data.list[0].dt_txt.slice(10)
            setNextHour(prevHour.substring(0,6))

            const prevHour2 = data.list[1].dt_txt.slice(10)
            setNextHour2(prevHour2.substring(0,6))

            const prevHour3 = data.list[2].dt_txt.slice(10)
            setNextHour3(prevHour3.substring(0,6))

            const minmax_ = Math.round(data.list[0].main.temp_min) + '°C/' + Math.round(data.list[0].main.temp_max) + '°C'
            setMinMax(minmax_) 

            const minmax2_ = Math.round(data.list[1].main.temp_min) + '°C/' + Math.round(data.list[1].main.temp_max ) + '°C'
            setMinMax2(minmax2_) 

            const minmax3_ = Math.round(data.list[2].main.temp_min) + '°C/' + Math.round(data.list[2].main.temp_max ) + '°C'
            setMinMax3(minmax3_)

            const humidity_ = data.list[0].main.humidity + '%'
            setHumidity(humidity_)

            const humidity2_ = data.list[1].main.humidity + '%'
            setHumidity2(humidity2_)

            const humidity3_ = data.list[2].main.humidity + '%'
            setHumidity3(humidity3_)

            setIcon_('http://openweathermap.org/img/wn/'+data.list[0].weather[0].icon+'@2x.png')
            setIcon_2('http://openweathermap.org/img/wn/'+data.list[1].weather[0].icon+'@2x.png')
            setIcon_3('http://openweathermap.org/img/wn/'+data.list[2].weather[0].icon+'@2x.png')

          } else {
            console.log('error')
          }
        })
      }

      
      function getCurrentData(pos){

        const lat = String(pos.coords.latitude)
        const lon = String(pos.coords.longitude)

        const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&lang=pt_br&appid='+process.env.REACT_APP_KEY
        fetch(url).then( (response) => response.json()).then( (data) => {
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
        
        const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&units=metric&lang=pt_br&appid='+process.env.REACT_APP_KEY
        fetch(url2).then((reponse)=> reponse.json()).then((data) => {
          if (data.cod == 200 ){
            const prevHour = data.list[0].dt_txt.slice(10)
            setNextHour(prevHour.substring(0,6))

            const prevHour2 = data.list[1].dt_txt.slice(10)
            setNextHour2(prevHour2.substring(0,6))

            const prevHour3 = data.list[2].dt_txt.slice(10)
            setNextHour3(prevHour3.substring(0,6))

            const minmax_ = Math.round(data.list[0].main.temp_min) + '°C/' + Math.round(data.list[0].main.temp_max) + '°C'
            setMinMax(minmax_) 

            const minmax2_ = Math.round(data.list[1].main.temp_min) + '°C/' + Math.round(data.list[1].main.temp_max ) + '°C'
            setMinMax2(minmax2_) 

            const minmax3_ = Math.round(data.list[2].main.temp_min) + '°C/' + Math.round(data.list[2].main.temp_max ) + '°C'
            setMinMax3(minmax3_)

            const humidity_ = data.list[0].main.humidity + '%'
            setHumidity(humidity_)

            const humidity2_ = data.list[1].main.humidity + '%'
            setHumidity2(humidity2_)

            const humidity3_ = data.list[2].main.humidity + '%'
            setHumidity3(humidity3_)

            setIcon_('http://openweathermap.org/img/wn/'+data.list[0].weather[0].icon+'@2x.png')
            setIcon_2('http://openweathermap.org/img/wn/'+data.list[1].weather[0].icon+'@2x.png')
            setIcon_3('http://openweathermap.org/img/wn/'+data.list[2].weather[0].icon+'@2x.png')

          } else {
            console.log('error')

          }
        }) 
      
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

    // const [dimensions, setDimensions] = React.useState({ 
    //         height: window.innerHeight,
    //         width: window.innerWidth
    //       })

    // React.useEffect(() => {
    //         function handleResize() {
    //           setDimensions({
    //             height: window.innerHeight,
    //             width: window.innerWidth
    //           })}
    //           window.addEventListener('resize', handleResize)       
    //         })

  return (
    <div className='mainmain'>
        <header>
          <Typography className='' style={{cursor: 'pointer'}} variant="h5" component="h2">Weather Checker</Typography>
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
              hour1={ errorMessage ? '-' : nextHour}
              hour2={ errorMessage ? '-' : nextHour2}
              hour3={ errorMessage ? '-' : nextHour3}

              minmax={ errorMessage ? '-' : minMax}
              minmax2={ errorMessage ? '-' : minMax2}
              minmax3={ errorMessage ? '-' : minMax3}

              humidity ={errorMessage ? '-' : humidity}
              humidity2 ={errorMessage ? '-' : humidity2}
              humidity3 ={errorMessage ? '-' : humidity3}

              icon= {errorMessage ? '-' : icon_}
              icon2= {errorMessage ? '-' : icon_2}
              icon3= {errorMessage ? '-' : icon_3}
             />
          </section>
        </div>  
    </div>
    

  )
}

export default App