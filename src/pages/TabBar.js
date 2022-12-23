import React from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import CheckboxSlectTable from './CheckboxSlectTable';
import SearchTab from '../components/SearchTab';

function TabBar() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box>
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="My Queue" />
          <Tab label="Re Sub Queue" />
          <Tab label="BOT Rejected Queue" />
          <Tab label="Action Approval Queue" />
          <Tab label="Action Rejected Queue" />
          <Tab label="Search" />
          <Tab label="Manual Case Creation" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            {/* <Typography> Coming Soon...</Typography> */}
            <CheckboxSlectTable/>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography> Coming Soon...</Typography>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography> Coming Soon...</Typography>
          </Box>
        )}
        {tabIndex === 5 && (
          <Box>
            <SearchTab/>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default TabBar;