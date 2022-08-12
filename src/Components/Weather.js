import React from 'react'
import graph from '../Images/graph.png'

function Weather({ name, temprature,tempratureName,max,min ,mad,limits}) {
    
       
  return (
    <>
    <div className="weather-def-box">
        <div className="weather-heading ">
            <p>{name}</p>
            <img src={graph} alt="Graph" />
        </div>
        <div className="temprature-data">
            <p className='temprature'> {temprature} </p>  <p className='tempratureName'> {tempratureName} </p>
        </div>
        <div className="weather-limits">
            <p>{limits}</p>
        </div>
        <div className="weather-minmax">
            <p>{max} {min}</p>
            <p>{mad}</p>
        </div>
    </div>
    </>
  )
}

export default Weather