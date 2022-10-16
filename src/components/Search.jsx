import React from 'react'

function Search(prop){

    const handleSubmit = event => {
        event.preventDefault();
    }

    return(
        <div className='search'>
            <form onSubmit={handleSubmit}>
            <label>
            <input placeholder='Type your city name:' type='text' onChange={prop.change} value={prop.value} autoFocus></input>
            <button onClick={prop.click}>Search</button>
            </label>
            </form>
        </div>
    )
}

export default Search