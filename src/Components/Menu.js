import React from 'react'
import dashboard from '../Images/dashboard.png'
import message from '../Images/message.png'
import data from '../Images/data.png'


import {
  Link
} from "react-router-dom";


function Menu() {
  return (
    <>
    
    <div className="dashboard-menu-page">
     
      <ul className="menu-list">
      <h6>MENU</h6>
<li> <img src={dashboard} alt="dashboard" /> <span>Dashboard</span> </li>
<li> <img src={data} alt="Historical Data" /> <span>Historical Data</span> </li>
<li> <img src={message} alt="Remote Connection" /> <span>Remote Connection</span> </li>
<li> <img src={data} alt="Rules" /> <span>Rules</span> </li>
</ul>
<div class="dropdown-center">
  <button class="btn btn-secondary dropdown-toggle button-drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <img src={data} alt="dashboard" /> <span>Assets</span>
  </button>
  <ul class="dropdown-menu dropdown-treatment" >
  <li><a class="dropdown-item item-dropdown" to="/dashboard"> <img src={data} alt="dashboard" /> <span>Treatment Plants</span></a></li>
            <li><a class="dropdown-item item-dropdown" to="#"> <img src={data} alt="dashboard" /> <span>Valve 1 (Ward no.133)</span></a></li>
            <li><a class="dropdown-item  item-dropdown" to="#"> <img src={data} alt="dashboard" /> <span>Valve 2(Ward no.132)</span></a></li>
            <li><a class="dropdown-item item-dropdown" to="#"> <img src={data} alt="dashboard" /> <span>Valve 2(Ward no.131)</span></a></li>
  </ul>
</div>
      
    </div>
    
    </>
  )
}

export default Menu