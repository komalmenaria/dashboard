import React from 'react'
import Weather from "./Weather"
import data from "./data"
import setting from '../Images/setting.png'
import Dashnav from './Dashnav.js'

function Dashboard(props) {
  return (
   <>
  
          <div className="weather-items">
          <Dashnav />
         
          {data.weatherData.map((item,index)=>{
            return( 
            
            <Weather  name={item.name}  temprature={item.temprature} tempratureName={item.tempratureName}
            max={item.max}  min={item.min}   mad={item.mad} limits={item.limits} key={index} />
           
            )
          })}

<br />

            <div className="weather-def-box">
        <div className="weather-heading ">
            <p>VALVE STATUS</p>
            <img src={setting}  />
        </div>
        <div className="temprature-data">
            <p className='temprature'> ON </p>
        </div>
        <div className="weather-limits">
            <p>DURATION</p>
        </div>
        <div className="weather-minmax">
            <p>04 Hours</p>
 
        </div>
    </div>

    <div className="weather-def-box">
        <div className="weather-heading ">
            <p>AC MAINS</p>
            
        </div>
        <div className="temprature-data">
            <p className='temprature'> ON </p>
        </div>
        <div className="weather-limits">
           
        </div>
        <div className="weather-minmax">
          
        </div>
    </div>

          </div>


   </>
  )
}

export default Dashboard