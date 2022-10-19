import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'

function Forecast(prop) {
  return (
    <div className='container-fluid p-0'>
        <div className='row d-flex justify-content-center'>
          <div className='forecast'>
            <Typography variant='h5'>Next Hourly Forecast</Typography>
            <div>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">Hour</th>
                        <th scope="col">min/max</th>
                        <th scope="col">Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">{prop.hour1}</th>
                        <td>{prop.minmax}</td>
                        <td>{prop.humidity}</td>
                        <td>
                             <div className='img'>
                                <img className='icon2' src={prop.icon} />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">{prop.hour2}</th>
                        <td>{prop.minmax2}</td>
                        <td>{prop.humidity2}</td>
                        <td>
                            <div className='img'>
                                <img className='icon2' src={prop.icon2} />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">{prop.hour3}</th>
                        <td colpan="2">{prop.minmax3}</td>
                        <td>{prop.humidity3}</td>
                        <td>
                            <div className='img'>
                                <img className='icon2' src={prop.icon3} />
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>

          <div className='forecast2'></div>
        </div>
    </div>
  )
}

export default Forecast