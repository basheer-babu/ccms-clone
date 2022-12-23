import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Alert, Grid, Stack } from "@mui/material";
import axios from 'axios';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [processName, setprocessName] = React.useState('');
  const [CaseRefNo, setCaseRefNo] = React.useState("");
  const [CourtCaseId, setCourtCaseId] = React.useState("");
  const [makerName, setMakerName] = React.useState("");
  const [checkerName, setCheckerName] = React.useState("");
  const [bpmRefNo, setBpmRefNo] = React.useState("");
  const [CaseCreationDate, setCaseCreationDate] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [alert, setAlert] = React.useState(0);



  const handleChange = (event) => {
    setprocessName(event.target.value);
  };

  const handleCreateTask = (event) => {
    setAlert(0);
   
    axios.post('http://localhost:9191/addProduct', {
        "id": 0,
        "case_ref_no": CaseRefNo,
        "court_order_id": CourtCaseId,
        "request_type": "",
        "court_name": "",
        "court_order_date": CaseCreationDate,
        "maker_name": makerName,
        "checker_name": checkerName,
        "defendant_type": null
    })
    .then((resp) => {
      console.dir(resp);
      setResponse(resp.data);
        setAlert(1);

    })
    .catch(err => {
      console.log(err);
        setAlert(2);

    });



    const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
       setOpen(false);
      }, 2000)
      return () => {
        clearTimeout(timeId)
      }
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Task
      </Button>
      <Dialog fullWidth="true" maxWidth="md" open={open} onClose={handleClose}>
        {alert==1?  <Alert severity="success">Task Created Successfully!</Alert> :""}
        {alert==2? <Alert severity="error">Something went Wrng!</Alert>:""}
        <DialogTitle>Creating A Task</DialogTitle>

       
        <DialogContent>
          <DialogContentText>
            Please select the prosses and start.
          </DialogContentText>
          
          
          
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >

            
            <Grid item xs={2} sm={4} md={3}>
            <FormControl fullWidth  size="small">
            <InputLabel  id="demo-simple-select-label">* Select Process</InputLabel>
            <Select 
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={processName}
              label="processName"
              onChange={handleChange}
            >
              <MenuItem value={"Process_16aocrb"}>CCMS Process</MenuItem>
              <MenuItem value={""}>Traveling Process</MenuItem>
              <MenuItem value={""}>Thirty</MenuItem>
            </Select>
          </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField value={CaseRefNo} onChange={(e)=>setCaseRefNo(e.target.value)} size="small" id="outlined-basic" label="Case Ref No" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField  value={CourtCaseId} onChange={(e)=>setCourtCaseId(e.target.value)} size="small" id="outlined-basic" label="Court Case Id" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField  value={bpmRefNo} onChange={(e)=>setBpmRefNo(e.target.value)} size="small" id="outlined-basic" label="BPM Ref No" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
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
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <FormControl fullWidth>
                <TextField value={checkerName} onChange={(e)=>setCheckerName(e.target.value)} size="small" id="outlined-basic" label="Checker Name" variant="outlined" />
              </FormControl>
            </Grid>
            
            
             
           
            </Grid>
        </DialogContent>
       
        <DialogActions>
                <Button   sx={{ textTransform: 'none', backgroundColor: '#FF5E00' }}  variant="contained" onClick={handleCreateTask}>Create</Button>
                  <Button   sx={{ textTransform: 'none', color: "#FF5E00", borderColor: '#FF5E00' }}  variant="outlined" onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
