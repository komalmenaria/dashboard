import React from 'react'
import logo from "../Images/ecolyser.png"
import setting from "../Images/setting.png"
import notification from "../Images/notification.png"
import camera from "../Images/camera.png"
import fullscreen from "../Images/fullscreen.png"

import {
    Link
  } from "react-router-dom";

function Navbar() {
  return (
<>

<nav className="navbar navbar-expand-lg background">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src={logo} alt="ecolyser"  width="100px" />  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/dashboard" style={{color:" #fff" ,  marginLeft: "200px" , fontWeight:"bold"}}>TREATMENT PLANT DASHBOARD </Link>
        </li>

      </ul>
      <div className="side-menus">
<li> <img src={fullscreen} alt="" /> </li>
<li> <img src={camera} alt="" /> </li>
<li> <img src={notification} alt="" /> </li>
 
<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" style={{fontWeight:"bold" , color:" rgb(138, 136, 136)"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Jay
          </a>
          <ul class="dropdown-menu">
            <Link><a class="dropdown-item" >Action</a></Link>
            <Link><a class="dropdown-item" >Another action</a></Link>
            <Link><hr class="dropdown-divider" /></Link>
            <Link><a class="dropdown-item" >Something else here</a></Link>
          </ul>
        </li>

<li> <img src={setting} alt="" /> </li>


      </div>
    </div>
  </div>
</nav>
</>  )
}

export default Navbar