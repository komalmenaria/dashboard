import React from 'react'

function Dashnav() {
  return (
    <>
    
    <ul className='dashnav'>
        <li><a href="#">DASHBOARD</a></li>
        
<div class="dropdown-center">
  <button class="btn btn-secondary dropdown-toggle button-drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   <span>REPORTS</span>
  </button>
  
  <ul class="dropdown-menu dropdown-treatment" >
  <li><a class="dropdown-item item-dropdown" to="/dashboard"> <span>Treatment Plants</span></a></li>
            <li><a class="dropdown-item item-dropdown" to="#">  <span>Valve 1 (Ward no.133)</span></a></li>
            <li><a class="dropdown-item  item-dropdown" to="#">  <span>Valve 2(Ward no.132)</span></a></li>
            <li><a class="dropdown-item item-dropdown" to="#">  <span>Valve 2(Ward no.131)</span></a></li>
  </ul>
</div>
<li><a href="#">REMOTE OPERATIONS</a></li>

    </ul>
    <br />
    </>
  )
}

export default Dashnav