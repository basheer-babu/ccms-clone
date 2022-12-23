import { Box, Button, FormControl, Grid, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Underline from '../pages/Underline'
import NormalSearchTable from './NormalSearchTable'
import { NormalSearchTableColumns } from './NormalSearchTableColumns'

export default function SearchTab() {
  return (
    <div>
         <Box sx={{ m: 3 }}>
          <h5> Cases List</h5>
          <Underline width="30px" className="my-2" />

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >

            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField  size="small" id="outlined-basic" label="Court Case Id" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField  size="small" id="outlined-basic" label="Status" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField  size="small" id="outlined-basic" label="BPM Ref No" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField  size="small" id="outlined-basic" label="Case Creation Date" variant="outlined" />
              </FormControl>
              
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField  size="small" id="outlined-basic" label="Due Date" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField  size="small" id="outlined-basic" label="Maker Name" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField  size="small" id="outlined-basic" label="Checker Name" variant="outlined" />
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={12} md={12} >
              <div style={{ textTransform: 'none', float: 'right' }}>
                <Stack direction="row" spacing={3}>
                <Button   sx={{ textTransform: 'none', backgroundColor: '#FF5E00' }}  variant="contained">Search</Button>
                  <Button   sx={{ textTransform: 'none', color: "#FF5E00", borderColor: '#FF5E00' }}  variant="outlined" >Clear</Button>
                  
                </Stack>
              </div>
            </Grid> 
            </Grid>

            <NormalSearchTable col={NormalSearchTableColumns} apiData={[]} isPagination={false} isExportExcel={false} isGlobalSearch={true} />
            </Box>
    </div>
  )
}
