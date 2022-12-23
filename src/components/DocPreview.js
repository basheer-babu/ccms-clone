
import { Button } from '@mui/material'
import React, { useState } from 'react'
import Iframe from 'react-iframe'
export default function DocPreview() {
    const [openDoc, setopenDoc] = useState(false)
  return (
    <div >
         <Button onClick={()=>setopenDoc(true)} size="small" variant="contained">Open File</Button>
        {openDoc && 
       <Iframe url="https://gfgc.kar.nic.in/sirmv-science/GenericDocHandler/138-a2973dc6-c024-4d81-be6d-5c3344f232ce.pdf"
       width="640px"
       height="600px"
       id=""
       className=""
       display="block"
       position="relative"/>
       }
    </div>
  )
}
