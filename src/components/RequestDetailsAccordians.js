import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RequestDetailsTabFields from './RequestDetailsTabFields';


export default function RequestDetailsAccordians() {
  return (
    <div>
        <Accordion >
        <AccordionSummary style={{background:'#2979ff',color:"#FFFFFF"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Request Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <RequestDetailsTabFields/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary style={{background:'#2979ff',color:"#FFFFFF"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Defendant Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary style={{background:'#2979ff',color:"#FFFFFF"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Compliant Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
       
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary style={{background:'#2979ff',color:"#FFFFFF"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Request Type Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
    
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
