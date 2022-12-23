import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import DocPreview from "./DocPreview";
import SimpleAccordian from "./SimpleAccordian";
import { Button, Stack } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function MakerScreen() {
  return (
    <div className="container">
      <Box sx={{ flexGrow: 1 ,paddingTop:'1%'}}>
        <Grid container spacing={2} columns={16}>
          <Grid xs={8}>
            <Box
              sx={{
                width: "100%",
                height: 100,
                border: "solid",
              }}
            >
              <Grid container spacing={2} columns={16}>
                <Grid item xs={4}>
                 <b>Court Case id</b>:   207/ 2019/1275
                </Grid>
                <Grid item xs={4}>
                <b>Case Created Date</b>:   30/08/2022
                </Grid>
                <Grid item xs={4}>
                <b>Case Type</b>:   Dubai Portal email
                </Grid>
                <Grid item xs={4}>
                <b>Case Ref No</b>:   CCMS-748758
                </Grid>
              </Grid>
            </Box>
            <SimpleAccordian/>
          </Grid>
          <Grid xs={8}>
            <DocPreview />
          </Grid>
          <Stack spacing={2} direction="row" style={{padding:"1%", position:'relative',left:0,bottom:0}}>
        
         <Button size="small" variant="contained">Send to Checker</Button>
         <Button size="small" variant="outlined">Action Approval</Button>
         
         <Button size="small" variant="contained">Generate Court Letter PDF</Button>
         <Button size="small" variant="outlined">Submit to Flex</Button>
         <Button size="small" variant="contained">Generate Excel</Button>
         </Stack>
        </Grid>
      </Box>
    </div>
  );
}
