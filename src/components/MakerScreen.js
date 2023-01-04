import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import DocPreview from "./DocPreview";
import SimpleAccordian from "./SimpleAccordian";
import {Button,  InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import axios from "axios";
import CCMSAlert from "../pages/CCMSAlert";


import {reactLocalStorage} from 'reactjs-localstorage';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function MakerScreen() {
  const [alert, setAlert] = React.useState(0);
  const [completeAlert, setCompleteAlert] = React.useState(0);
  const [data, setData] = React.useState("");
  const [processName, setprocessName] = React.useState('');
  const [CaseRefNo, setCaseRefNo] = React.useState("");
  const [CourtCaseId, setCourtCaseId] = React.useState("");
  const [makerName, setMakerName] = React.useState("");
  const [checkerName, setCheckerName] = React.useState("");
  const [bpmRefNo, setBpmRefNo] = React.useState("");
  const [CaseCreationDate, setCaseCreationDate] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [customer, setCustomer] = React.useState("");
  const [accept, setAccept] = React.useState("");
  const [taskId, setTaskId] = React.useState("");
 


  let id = window.location.href.split("/");
    let pro_id = id.pop();

let username=reactLocalStorage.get("username");
    React.useEffect(() => {
      setAlert(0)
       axios.get('http://localhost:9191/ccmsclaimtask/'+pro_id+'/'+username, {})
      .then((resp) => {
        console.info(resp);
        // setData(resp);
        
        setAlert(1);
      })
      .catch(err => {
        console.log(err);
        setAlert(2);
      });
      handleGetTaskId();
      
    }, [])
    
const handleLoadData=() => {
  setAlert(0)
  axios.get('http://localhost:9191/ccmsgetbyprocessid/'+pro_id, {})
 .then((resp) => {
   console.info(resp);
   setData(resp);
   setCaseRefNo(resp.data.case_ref_no);
   setAlert(1);
 })
 .catch(err => {
   console.log(err);
   setAlert(2);
 });
}

const handleGetTaskId=()=>{
 
  axios.get('http://localhost:9191/gettaskid/'+pro_id, {})
  .then((resp) => {
    console.info("task id",resp.data);
   setTaskId(resp.data);
    // return resp.data;
  })
  .catch(err => {
    console.log(err);
    
  });
}


const handleComplete=() => {
 
 let makerbody= {
    "variables": {
        "aVariable": {
            "value": "aStringValue"
        },
        "anotherVariable": {
            "value": 42
        },
        "noctem": {
            "value": true
        },
        "Customer": {
             "value": customer
        }
         
    },
    "withVariablesInReturn": true
}

let checkerbody= {
  "variables": {
      "aVariable": {
          "value": "aStringValue"
      },
      "anotherVariable": {
          "value": 42
      },
      "noctem": {
          "value": true
      },
      "Customer": {
           "value": customer
      },
       "accept": {
           "value": accept
      }
  },
  "withVariablesInReturn": true
}
let body=accept==="yes" ? checkerbody : makerbody; 
setCompleteAlert(0);

axios.post('http://localhost:8085/engine-rest/task/'+taskId+'/complete', body)
  .then((resp) => {
    console.info("complete.",resp.data);
setCompleteAlert(1);
setTimeout(function(){window.close();}, 3000)
  })
  .catch(err => {
    console.log(err);
setCompleteAlert(2);
    
  });

}
let user='';
React.useEffect(() => {
  
  user=reactLocalStorage.get("username")
  
}, [])

    

  return (
    <div className="container">
      <Box sx={{ flexGrow: 1 ,paddingTop:'1%'}}>
        <div style={{padding:'1%'}}>
        {alert==1?  <CCMSAlert severity="success" children="Case Claimed Successfully!" />:""}
         {alert==2? <CCMSAlert severity="error" children="ERROR while Claiming the Case!" />:""}
         {completeAlert==1?  <CCMSAlert severity="success" children="Case Completed Successfully!" />:""}
         {completeAlert==2? <CCMSAlert severity="error" children="ERROR while completing the Case!" />:""}
          </div>
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
                 <b>Court Case id</b>:   ***/ ****/****
                </Grid>
                <Grid item xs={4}>
                <b>Case Created Date</b>:   03/01/2023
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
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >

            
            
            {/* <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField value={CaseRefNo} onChange={(e)=>setCaseRefNo(e.target.value)} size="small" id="outlined-basic" label="Case Ref No" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField  value={CourtCaseId} onChange={(e)=>setCourtCaseId(e.target.value)} size="small" id="outlined-basic" label="Court Case Id" variant="outlined" />
              </FormControl>
            </Grid> */}
            {/* <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField  value={bpmRefNo} onChange={(e)=>setBpmRefNo(e.target.value)} size="small" id="outlined-basic" label="BPM Ref No" variant="outlined" />
              </FormControl>
            </Grid> */}
            {/* <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField  value={CaseCreationDate} onChange={(e)=>setCaseCreationDate(e.target.value)} size="small" id="outlined-basic" label="Case Creation Date" variant="outlined" />
              </FormControl>
              
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField  value={dueDate} onChange={(e)=>setDueDate(e.target.value)} size="small" id="outlined-basic" label="Due Date" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField value={makerName} onChange={(e)=>setMakerName(e.target.value)}  size="small" id="outlined-basic" label="Maker Name" variant="outlined" />
              </FormControl>
            </Grid> */}
            {/* <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField value={checkerName} onChange={(e)=>setCheckerName(e.target.value)} size="small" id="outlined-basic" label="Checker Name" variant="outlined" />
              </FormControl>
            </Grid> */}
            {username==="maker"?
            <Grid item xs={2} sm={4} md={12}>
              <FormControl fullWidth>
                <TextField value={customer} onChange={(e)=>setCustomer(e.target.value)} size="small" id="outlined-basic" label="Customer" variant="outlined" placeholder="yes/no" />
              </FormControl>
            </Grid> :
            <Grid item xs={2} sm={4} md={12}>
              <FormControl fullWidth>
                <TextField value={accept} onChange={(e)=>setAccept(e.target.value)} size="small" id="outlined-basic" label="Checker(accept/not)" variant="outlined" placeholder="yes/no" />
              </FormControl>
            </Grid>}
            {/* <Grid item xs={2} sm={4} md={3}>
            
         <Button size="small" onClick={handleLoadData} variant="contained">Load Data</Button></Grid> */}
             
           
            </Grid >
            <Grid item xs={2} sm={12} md={12}>
          <Stack spacing={2} direction="row" style={{padding:"1%", position:'relative',left:0,bottom:0}}>
        
         <Button size="small" onClick={handleComplete}  variant="contained">Submit</Button>
         <Button size="small" variant="outlined">Action Approval</Button>
         
         <Button size="small" variant="contained">Generate Court Letter PDF</Button>
         <Button size="small" variant="outlined">Submit to Flex</Button>
         <Button size="small" variant="contained">Generate Excel</Button>
         </Stack>
         </Grid>
        </Grid>
      </Box>
    </div>
  );
}
