import React, {useState, useRef, useLayoutEffect} from 'react'
import Box from './Box'
import Search from './Search'
import Forecast from './Forecast'
import { Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function App() {
  
  const [inputValue, setInputValue] = useState('')

  const [weatherData, setWeatherData] = useState({
    city: '',
    temp: '',
    desc: '',
    icon: '',
    feelsLike: ''
  });

  const [forecast, setForecast] = useState({
    nextHour: {
      nextHour: '',
      nextHour2: '',
      nextHour3: '',
    },
    minMax: {
      minMax: '',
      minMax2: '',
      minMax3: '',
    },
    humidity: {
      humidity: '',
      humidity2: '',
      humidity3: '',
    },
    icon_: {
      icon_: '',
      icon_2: '',
      icon_3: '',
    },
  });
  
  // forecast2
  
  const [forecast2, setForecast2] = useState({
    nextHour: {
      nextHour: '',
      nextHour2: '',
      nextHour3: '',
    },
    minMax: {
      minMax: '',
      minMax2: '',
      minMax3: '',
    },
    humidity: {
      humidity: '',
      humidity2: '',
      humidity3: '',
    },
    icon_: {
      icon_: '',
      icon_2: '',
      icon_3: '',
    },
  });

  const [errorMessage, setErrorMessage] = useState(Boolean)

  function getCity(event) {
    setInputValue(event.target.value);
  }

  async function getForecast(path, path2) {
        const response = await fetch(path);
        const data = await response.json();
        if (data.cod === 200) {
          setWeatherData({
            temp: Math.round(data.main.temp) + '°C',
            desc: data.weather[0].description,
            icon: 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png',
            city: data.name,
            feelsLike: 'Feels Like ' + Math.round(data.main.feels_like) + '°C'
          });
          document.querySelector('.icon').classList.remove('visually-hidden');
          setErrorMessage(false);
        } else {
          setErrorMessage(true);
          document.querySelector('.icon').classList.add('visually-hidden');
        }
  
      await fetch(path2).then((reponse)=> reponse.json()).then((data) => {
        if (data.cod === '200' ){
            setForecast({
              nextHour: {
                nextHour: data.list[0].dt_txt.slice(10).substring(0, 6),
                nextHour2: data.list[1].dt_txt.slice(10).substring(0, 6),
                nextHour3: data.list[2].dt_txt.slice(10).substring(0, 6)
              },
              minMax: {
                minMax: Math.round(data.list[0].main.temp_min) + '°C/' + Math.round(data.list[0].main.temp_max) + '°C',
                minMax2: Math.round(data.list[1].main.temp_min) + '°C/' + Math.round(data.list[1].main.temp_max) + '°C',
                minMax3: Math.round(data.list[2].main.temp_min) + '°C/' + Math.round(data.list[2].main.temp_max) + '°C'
              },
              humidity: {
                humidity: data.list[0].main.humidity + '%',
                humidity2: data.list[1].main.humidity + '%',
                humidity3: data.list[2].main.humidity + '%'
              },
              icon_: {
                icon_: 'http://openweathermap.org/img/wn/' + data.list[3].weather[0].icon + '@2x.png',
                icon_2: 'http://openweathermap.org/img/wn/' + data.list[4].weather[0].icon + '@2x.png',
                icon_3: 'http://openweathermap.org/img/wn/' + data.list[5].weather[0].icon + '@2x.png'
              }
            });
          
            setForecast2({
              nextHour: {
                nextHour: data.list[3].dt_txt.slice(10).substring(0, 6),
                nextHour2: data.list[4].dt_txt.slice(10).substring(0, 6),
                nextHour3: data.list[5].dt_txt.slice(10).substring(0, 6)
              },
              minMax: {
                minMax: Math.round(data.list[0].main.temp_min) + '°C/' + Math.round(data.list[3].main.temp_max) + '°C',
                minMax2: Math.round(data.list[1].main.temp_min) + '°C/' + Math.round(data.list[4].main.temp_max) + '°C',
                minMax3: Math.round(data.list[2].main.temp_min) + '°C/' + Math.round(data.list[5].main.temp_max) + '°C'
              },
              humidity: {
                humidity: data.list[3].main.humidity + '%',
                humidity2: data.list[4].main.humidity + '%',
                humidity3: data.list[5].main.humidity + '%'
              },
              icon_: {
                icon_: 'http://openweathermap.org/img/wn/' + data.list[3].weather[0].icon + '@2x.png',
                icon_2: 'http://openweathermap.org/img/wn/' + data.list[4].weather[0].icon + '@2x.png',
                icon_3: 'http://openweathermap.org/img/wn/' + data.list[5].weather[0].icon + '@2x.png'
              }
            });
        } else {
          console.log('error')
        }
      })
    }

      function getData(){
        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&appid='+ process.env.REACT_APP_KEY +'&units=metric'
        const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q='+inputValue+'&appid='+ process.env.REACT_APP_KEY +'&units=metric'
        getForecast(url, url2)
      }

      function getCurrentData(pos){
          const lat = String(pos.coords.latitude)
          const lon = String(pos.coords.longitude)
          const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid='+process.env.REACT_APP_KEY
          const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&units=metric&appid='+process.env.REACT_APP_KEY
          getForecast(url, url2)        
      }

      function handleGeolocationError(error) {
        console.error('Error getting geolocation:', error);
        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+'New York'+'&appid='+ process.env.REACT_APP_KEY +'&units=metric';
        const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q='+'New York'+'&appid='+ process.env.REACT_APP_KEY +'&units=metric';
        getForecast(url, url2);
      }

      function initCoords() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCurrentData, handleGeolocationError());
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
              <Search change={getCity} click={getData} value={inputValue} />
            </div>
            <div className='socialIconsContainer'>
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
            feelsLike={errorMessage ? '' : weatherData.feelsLike}
            cityName={errorMessage ? 'Not found :(' : weatherData.city}
            icon={errorMessage ? '' : weatherData.icon}
            temp={errorMessage ? '' : weatherData.temp}
            desc={errorMessage ? '' : weatherData.desc}
            refresh={() => document.location.reload()}
            searchChange={getCity}
            searchClick={getData}
            searchValue={inputValue}
          />
          </div> 
          </section>
          <section className='section2'>
          <Forecast
            hour1={errorMessage ? '-' : forecast.nextHour.nextHour}
            hour2={errorMessage ? '-' : forecast.nextHour.nextHour2}
            hour3={errorMessage ? '-' : forecast.nextHour.nextHour3}
            minmax={errorMessage ? '-' : forecast.minMax.minMax}
            minmax2={errorMessage ? '-' : forecast.minMax.minMax2}
            minmax3={errorMessage ? '-' : forecast.minMax.minMax3}
            humidity={errorMessage ? '-' : forecast.humidity.humidity}
            humidity2={errorMessage ? '-' : forecast.humidity.humidity2}
            humidity3={errorMessage ? '-' : forecast.humidity.humidity3}
            icon={errorMessage ? '-' : forecast.icon_.icon_}
            icon2={errorMessage ? '-' : forecast.icon_.icon_2}
            icon3={errorMessage ? '-' : forecast.icon_.icon_3}
            hour1_2={errorMessage ? '-' : forecast2.nextHour.nextHour}
            hour2_2={errorMessage ? '-' : forecast2.nextHour.nextHour2}
            hour3_2={errorMessage ? '-' : forecast2.nextHour.nextHour3}
            minmax_2={errorMessage ? '-' : forecast2.minMax.minMax}
            minmax2_2={errorMessage ? '-' : forecast2.minMax.minMax2}
            minmax3_2={errorMessage ? '-' : forecast2.minMax.minMax3}
            humidity_2={errorMessage ? '-' : forecast2.humidity.humidity}
            humidity2_2={errorMessage ? '-' : forecast2.humidity.humidity2}
            humidity3_2={errorMessage ? '-' : forecast2.humidity.humidity3}
            icon_2={errorMessage ? '-' : forecast2.icon_.icon_}
            icon2_2={errorMessage ? '-' : forecast2.icon_.icon_2}
            icon3_2={errorMessage ? '-' : forecast2.icon_.icon_3}
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