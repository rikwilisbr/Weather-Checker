import React, { useEffect, useRef } from 'react'
import { Typography } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay';



export default function Box(prop) {

    const now = new Date()
    const options = { weekday: 'long'};
    const day = new Intl.DateTimeFormat('pt-BR', options).format(now)
    const dayUp = day.charAt(0).toUpperCase() + day.slice(1)
    var minutes = now.getMinutes()
    if( minutes < 10 ) {
        minutes = '0' + minutes   
    }
    const currentHour = dayUp + ', ' + now.getHours() + ':' + minutes

    const time = useRef(Boolean)

    useEffect( () => {
   
        if (now.getHours() >= 6 && now.getHours() <= 18  ) {
            time.current = true
        } else {
            time.current = false
        }

        console.log(time ? 'day' : 'night')
        }
    )

  return (
    <div style={time ? {backgroundImage: 'url("https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1067&q=80")'} : {backgroundImage: 'url("https://images.unsplash.com/flagged/photo-1553475873-55d8c03e9f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80")'}} className='box'>
    <div className='container-fluid p-0 m-0'>
    <div className='row text-center hour m-0' >
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
        </div>
            
            

        </div>
        
        </div>
  )
}
