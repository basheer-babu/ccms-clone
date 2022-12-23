
import { Box, Grid, Stack, TextField } from '@mui/material'
import React from 'react'

export default function RequestDetailsTabFields() {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={1} columns={16}>
         <Grid xs={8} style={{paddingRight:'3%'}}>
         <Stack spacing={1}  style={{paddingTop:'3%'}}>
         <TextField size="small" id="outlined-basic" label="Court Name" variant="outlined" />
         <TextField size="small" id="outlined-basic" label="Subject" variant="outlined" />
         <TextField size="small" id="outlined-basic" label="Defendant type" variant="outlined" />
         <text>Defendant type</text>
         </Stack>
            </Grid>
            <Grid xs={8 }>
            <Stack spacing={1}  style={{paddingTop:'3%'}}>
         <TextField size="small" id="outlined-basic" label="Court Order Number" variant="outlined" />
         <TextField size="small" id="outlined-basic" label="Court Order Issue Date(DD/MM/YYYY)" variant="outlined" />
         <TextField size="small" id="outlined-basic" label="Previous Order No.(If any)" variant="outlined" />
         </Stack>
            </Grid>
            </Grid>
         </Box>
       
    </div>
  )
}
