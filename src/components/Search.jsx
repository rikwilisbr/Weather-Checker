import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search(prop){

    const handleSubmit = event => {
        event.preventDefault();
    }

    return(
        <div className='search container'>
            <form onSubmit={handleSubmit}>
            <label>
            <div className='search-div'>
            <input className='input' placeholder='Type your city name:' type='text' onChange={prop.change} value={prop.value} autoFocus></input>
            <button onClick={prop.click} className='search-icon'><SearchIcon /></button>
            </div>
            </label>
            </form>
        </div>
    )
}

export default Search