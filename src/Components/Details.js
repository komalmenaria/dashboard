import React from 'react'
import { GoogleMap, LoadScript, useLoadScript } from '@react-google-maps/api';

function Details() {
//  const {} = useLoadScript({ googleMapsApiKey : ""});
  return (
    <>
    
    <div className="address-weather-details">
      <h1>TREATMENT PLANT</h1>
      <p>VVCMC</p>
      <div className="address">
        <span>ADDRESS</span>
        <p>315/316, Kingston Court Commericial, Near Old Viva College, Virar West Mumbai, Maharashtra 401303</p>
      </div>
      <hr />
      <div className="additional-details">
        <span>ADDITIONAL DETAILS</span>
        <p>Category: EQMS</p>
        <p>Industry Type: MANUFACTURING</p>
        <p>Installation Type: EXTRACTIVE</p>
        <p>System Make: PT-OPRUSS</p>
        <p>Source Location: ETP-OUTLET</p>
      </div>
      <hr />
      <div className="contact-details">
        <span>CONTACT DETAILS</span>
        <p>Number: +919450083738</p>
        <p>Email: support@ecolyser.com</p>
      </div>
      <hr />
      <div className="map">

      </div>
    </div>
   
    </>
  )
}

export default Details