import React, { useState } from 'react'
import Search from './Search'


function App() {

    const [city, setCity] = useState('')

    const [temp, setTemp] = useState("")

    function getCity(event) {
        setCity(event.target.value)
    }
    
    function getData(){

        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=b5ad28dedf1989aba8f4eb9f41591455&units=metric&lang=pt_br'

        fetch(url).then( response => response.json()).then( data => {
            setTemp(data.main.temp + '°C')
        })} 
    
  return (
    <div className='test'>
        <h1>Weather Checker</h1>
        <Search change={getCity} click={getData} value={city} />
        <h1>{temp}</h1>
    </div>
  )
}

export default App