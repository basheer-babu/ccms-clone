import React from 'react'
import "../styles/headder.css"
import mashlogo from '../asserts/mashlogo.png';
import PowerSettingsNewTwoToneIcon from '@mui/icons-material/PowerSettingsNewTwoTone';

import {reactLocalStorage} from 'reactjs-localstorage';
export default function Headder() {

  const handleLogout=() => {
    reactLocalStorage.clear();
  }
  return (
    <header class="d-flex justify-content-between site-header">
  <div class="site-identity">
    <a href="#"><img style={{ width: "250px", padding: "2%" }} src={mashlogo} alt="Site Name" /></a>
    
  </div>  
  <div>
  <h3><a href="#">CCMS Application</a></h3>
    </div>
    <div>
    </div>
    <div>
  <h5> {reactLocalStorage.get("username")} <a onClick={handleLogout} href="/login" ><PowerSettingsNewTwoToneIcon/></a></h5>
    </div>
</header>
  )
}
