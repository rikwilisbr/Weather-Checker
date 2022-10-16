import React from 'react'
import { Typography } from '@mui/material'



export default function Box(prop) {

    const now = new Date()
    const options = { weekday: 'long'};
    const day = new Intl.DateTimeFormat('pt-BR', options).format(now)
    const dayUp = day.charAt(0).toUpperCase() + day.slice(1)
    var minutes = now.getMinutes()
    if( minutes < 10 ) {
        minutes = '0' + minutes   
    }
    const currentHour = dayUp + ' ' + now.getHours() + ':' + minutes

  return (
    <div className='box'>
    <div className='container'>
    <div className='row text-center hour' >
        <Typography className='hourText' variant="h5" component="h2">{currentHour}</Typography>
    </div>
        <div className='row text-center'>
            <div className='cityName'>
                <Typography variant='h4'>{prop.cityName}</Typography>
            </div>
            <div className='col-12 temp'>
            <Typography variant='h2' sx={{fontWeight: 'bold'}}>{prop.temp}</Typography>
            </div>
            <div className='col col-12'>
                <p className='desc'>{prop.desc}</p>
            </div>
            <div className='col col-12'>
                <div className='img'>
                    <img className='icon visually-hidden' alt='icon' border='0' src={prop.image} />
                </div>
            </div>
        </div>
            
            

        </div>
        
        </div>
  )
}
