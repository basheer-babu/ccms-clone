import React from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import RequestDetailsAccordians from './RequestDetailsAccordians';


function RequestTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box>
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Request Details" />
          <Tab label="Customer Information" />
          <Tab label="Reply and Attachments" />
         
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
          <RequestDetailsAccordians/>
            
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography> .</Typography>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography>.</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default RequestTabs;