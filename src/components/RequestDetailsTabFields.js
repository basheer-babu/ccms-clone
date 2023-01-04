
import { Box, Grid, Stack, TextField } from '@mui/material'
import React from 'react'

export default function RequestDetailsTabFields() {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={1} columns={16}>
         <Grid xs={8} style={{paddingRight:'3%'}}>
         <Stack spacing={1}  style={{paddingTop:'3%'}}>
         <TextField size="small" id="outlined-basic" label="Case Reference No" variant="outlined" />
         <TextField size="small" id="outlined-basic" label="Court Case Id" variant="outlined" />
         <TextField size="small" id="outlined-basic" label="Case Creation Date" variant="outlined" />
         {/* <text>Defendant type</text> */}
         </Stack>
            </Grid>
            <Grid xs={8 }>
            <Stack spacing={1}  style={{paddingTop:'3%'}}>
         <TextField size="small" id="outlined-basic" label="Due Date" variant="outlined" />
         <TextField size="small" id="outlined-basic" label="Customer" variant="outlined" />
         <TextField size="small" id="outlined-basic" label="Previous Order No.(If any)" variant="outlined" />
         </Stack>
            </Grid>
            </Grid>
         </Box>
       
    </div>
  )
}
