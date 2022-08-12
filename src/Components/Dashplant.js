import React from 'react'

import Dashboard from './Dashboard';
import Menu from './Menu';
import Details from './Details';



function Dashplant() {
  return (
    <>
    <div className="dashboard-all-components">
        <Menu />
        <Dashboard />
        <Details />
    </div>
    </>
  )
}

export default Dashplant