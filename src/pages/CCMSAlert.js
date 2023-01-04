import React, { useEffect, useState } from 'react';
import {Alert} from "@mui/material";
export default function CCMSAlert(props) {
  // the alert is displayed by default
  const [alert, setAlert] = useState(true);
      
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, []);     
    
  return (
    <>{alert && <div>
        <Alert severity={props.variant}>{props.children}</Alert>
        </div>}</>
    
  )
}