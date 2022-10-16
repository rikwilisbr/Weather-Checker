import React from 'react'

function Search(prop){

    const handleSubmit = event => {
        event.preventDefault();
    }

    return(
        <div className='search'>
            <form onSubmit={handleSubmit}>
            <label>
            <div className='input-group'>
            <input className='form-control input' placeholder='Type your city name:' type='text' onChange={prop.change} value={prop.value} autoFocus></input>
            <button className='btn btn-secondary button' onClick={prop.click}>Search</button>
            </div>
            </label>
            </form>
        </div>
    )
}

export default Search