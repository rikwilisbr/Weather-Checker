import React, { useEffect, useRef } from 'react'
import { Typography } from '@mui/material'

function Forecast(prop) {

    const now = new Date()
    const time = useRef(Boolean)
    useEffect( () => {
   
        if (now.getHours() >= 6 && now.getHours() <= 8  ) {
            time.current = true
        } else {
            time.current = false
        }
        }
    )

  return (
    <div className='forecast-container container-fluid p-0'>
        <div className='row d-flex justify-content-center'>
          <div className='forecast'>
            <Typography className='forecast-title' variant='h5' sx={{fontWeight: 'bold'}}>Next Hourly Forecast</Typography>
            <div className='forecast-table'>
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
          <div className='forecast2'>
            <Typography className='forecast-title' variant='h5' sx={{fontWeight: 'bold'}}>
                {time.current ? 'Tonight Forecast' : 'Tomorrow Forecast'}
            </Typography>
            <div className='forecast-table'>
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
                        <th scope="row">{prop.hour1_2}</th>
                        <td>{prop.minmax_2}</td>
                        <td>{prop.humidity_2}</td>
                        <td>
                             <div className='img'>
                                <img className='icon2' src={prop.icon_2} />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">{prop.hour2_2}</th>
                        <td>{prop.minmax2_2}</td>
                        <td>{prop.humidity2_2}</td>
                        <td>
                            <div className='img'>
                                <img className='icon2' src={prop.icon2_2} />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">{prop.hour3_2}</th>
                        <td colpan="2">{prop.minmax3_2}</td>
                        <td>{prop.humidity3_2}</td>
                        <td>
                            <div className='img'>
                                <img className='icon2' src={prop.icon3_2} />
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Forecast