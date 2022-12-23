import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RequestTabs from './RequestTabs';
import { Button } from '@mui/material';

export default function SimpleAccordian() {
  return (
    <div>
      <Accordion >
        <AccordionSummary style={{background:'#2979ff',color:"#FFFFFF"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>CCMS Request</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <RequestTabs/>
        </AccordionDetails>
        <div >
        <Button  size="small" variant="contained">save</Button>
        </div>
        

      </Accordion>
      <Accordion>
        <AccordionSummary  style={{background:'#2979ff',color:"#FFFFFF"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Audit Trail/Comment/Upload Document</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}