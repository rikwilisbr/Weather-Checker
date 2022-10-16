import React from 'react'
import Search from './Search'
import { useState } from 'react'

export default function Box() {

    const [city, setCity] = useState('')

    const [temp, setTemp] = useState("")

    const [desc, setDesc] = useState("")

    const [image, setImage] = useState("")

    function getCity(event) {
        setCity(event.target.value)
    }
    
    function getData(){

        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=b5ad28dedf1989aba8f4eb9f41591455&units=metric&lang=pt_br'

        fetch(url).then( response => response.json()).then( data => {
            setTemp(data.main.temp + '°C')
            setDesc(data.weather[0].description)
            setImage('http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png')
        })}

        
  return (
    <div className='box'>
        <div className='container'>
        <div className='row text-center'>
            <Search change={getCity} click={getData} value={city} />
            <p className='temp'>{temp}</p>
            <p className='desc'>{desc}</p>
            <div className='img'>
            <img src={image} />
            </div>
        </div>
        </div>
    </div>
  )
}
