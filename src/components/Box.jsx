import React, { useEffect, useRef } from 'react'
import { Typography } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay';
import SearchMobile from './SearchMobile'



export default function Box(prop) {

    const now = new Date()
    const options = { weekday: 'long'};
    const day = new Intl.DateTimeFormat('en-US', options).format(now)
    const dayUp = day.charAt(0).toUpperCase() + day.slice(1)
    var minutes = now.getMinutes()
    if( minutes < 10 ) {
        minutes = '0' + minutes   
    }

    var hours = now.getHours()
    if (hours < 10){
        hours = '0' + hours
    }
    const currentHour = dayUp + ', ' + hours + ':' + minutes

    const time = useRef(Boolean)

    useEffect( () => {
   
        if (now.getHours() >= 6 && now.getHours() <= 18  ) {
            time.current = true
        } else {
            time.current = false
        }
        }
    )

  return (
    <div style={time.current ? {backgroundImage: 'url("https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1067&q=80")'} : {backgroundImage: 'url("https://cdn.wallpapersafari.com/39/41/LtjY2a.jpg")'}} className='box'>
    <div className='container-fluid p-0 m-0'>
    <div className='row text-center hour m-0' style={{background: 'rgba(255, 255, 255, 0.103)'}} >
        <Typography className='hourText' variant="h5" component="h2">{currentHour}</Typography>
        <button className='reload' onClick={prop.refresh}><ReplayIcon /> </button>
    </div>
        <div className='row text-center'>
            <div className='cityName'>
                <Typography variant='h4'>{prop.cityName}</Typography>
            </div>
            <div className='col-12 temp'>
            <Typography variant='h2' sx={{fontWeight: 'bold'}}>{prop.temp}</Typography>
            </div>
            <div className='feelslike'>
                <Typography className='text-center' variant='h7' sx={{fontWeight: 'normal'}}>{prop.feelsLike}</Typography>
            </div>
            <div className='desc-area'>
                <div className='desc-child'>
                    <Typography  variant='h6' sx={{fontWeight: 'bold'}} className='desc'>{prop.desc}</Typography>
                </div>
                <div className='desc-child'>
                    <div className='img'>
                        <img className='icon visually-hidden' alt='icon' border='0' src={prop.icon} />
                    </div>
                </div>
            </div>
            <SearchMobile change={prop.searchChange} click={prop.searchClick} value={prop.searchValue} />
        </div>
            
            

        </div>
        
        </div>
  )
}
