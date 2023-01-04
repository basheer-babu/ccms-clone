
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, Typography } from "@mui/material";
// import MuiAlert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import { createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";

import {reactLocalStorage} from 'reactjs-localstorage';
// import ReactSession from "react-client-session/dist/ReactSession";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";
// import { getRole, login, refreshJwtToken, tokenService } from '../../services/LoginAPI';
import { Alert} from "@mui/material";







// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });



const theme = createTheme();
// ReactSession.setStoreType("localStorage");
/**
 * login page 
 * @returns 
 */
export default function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [visible, setvisible] = useState(false);
  // const history = useHistory();
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setvisible(false);
  };


  let handleUsername = (event) => {
    event.preventDefault();
    setUsername(event.target.value.replace(/[^\w\s]/gi, ""));
  };


  let handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const [nameError, setNameError] = useState(false);
  const validateName = (e) => {
    if (e.target.value === '' || e.target.value === null) {
      setNameError(true);
    } else {
      setNameError(false)
    }
  }

  const [passwordError, setPasswordError] = useState(false);
  const validatePassowrd = (e) => {
    if (e.target.value === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false)
    }
  }

  const validateOnSubmit = (e) => {
    if (e.target.value === '') {
      setNameError(true);
    } else {
      setNameError(false)
    }

    if (e.target.value === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false)
    }

  }
  const validateOnClick = () => {
    if (userName === '' || userName === null) {
      setNameError(true);
    }
    if (password === '' || password === null) {
      setPasswordError(true);
    }
  }


  /**
   * function to validate username and password
   */
  const handleSubmit = async (event) => {

    event.preventDefault();
     if (userName && password) {
      let user = {
        username: userName,
        password: password,
      };

      
      if (user.username === '' || user.password === null) {
        setNameError(true);
        setPasswordError(true);
      }

      

      try {

        

        
        if (user.username === 'maker' || user.username === 'checker' || user.username === 'demo') {

          setIsError(false);
          setvisible(true);
          setMessage("login Succsess..please wait.");
          reactLocalStorage.set("username",user.username);
          console.log("user",reactLocalStorage.get("username"));
          setTimeout(function(){window.location = "/";}, 1000);
          

          // ReactSession.set("username", userName.toLowerCase());
          // ReactSession.set("jwttoken", response.token);
      
          // let res = await getRole(userName.toLowerCase());
          
          // if (res.httpCode === 200) {
            
          //   // ReactSession.set("userrole", res.roles[0]);
          // }else{
          //   ReactSession.set("userrole", "");
          // }
          //  IntervalForJWT();
          //   history.push(`/home`);
        
        } else if (user.username === '') {
          setIsError(true);
          setvisible(true);
          setMessage("something went wrong!");
          // ReactSession.remove(userName);
        }
        else if (user.username === '') {
          setIsError(true);
          setvisible(true);
          setMessage("something went wrong!");

        }
        else {
          setIsError(true);
          setvisible(true);
          setMessage("Wong Credentials");

        }
      } catch (error) {
        setIsError(true);
        setvisible(true);
        setMessage("Wong Credentials. Please try after some time");
      }
    }
    else {
      setNameError(true);
      setPasswordError(true);
    }

  };
  const [showPassword, setShowPassword] = useState(false);



  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  React.useEffect(() => {
    reactLocalStorage.clear();

    

  }, []);




  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box sx={{ paddingTop: 5 }}>
          {!isError ? (
            // <Stack spacing={2} sx={{ width: '100%' }}>
            //   <Snackbar open={visible} autoHideDuration={6000} onClose={handleClose}>
            //     <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            //       {message}
            //     </Alert>
            //   </Snackbar>
            // </Stack>
            visible?  <Alert severity="success">Login Successfull please wait!</Alert> :""
          ) : (
            // <Stack spacing={2} sx={{ width: '100%' }}>
            //   <Snackbar open={visible} autoHideDuration={6000} onClose={handleClose}>
            //     <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            //       {message}
            //     </Alert>
            //   </Snackbar>
            // </Stack>
            visible? <Alert severity="error">Something went Wrng!</Alert>:""
          )}
        </Box>
        <Box
          sx={{
            paddingTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >


          {/* <IntegratedRMTool style={{ fontFamily: "Gilroy,sans-serif" }}>
            Eagle Eye Compiler
          </IntegratedRMTool> */}
          <LogInToYourAccou style={{ fontFamily: "Gilroy,sans-serif" }}>Sign In</LogInToYourAccou>

          
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 2, padding: "0%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="User Name"
              value={userName}
              onKeyUp={validateName}
              onBlur={validateName}
              onChange={handleUsername}
              name="email"
              autoComplete="email"
              // autoFocus
              helperText={nameError ? <Typography style={{
                fontFamily: 'Gilroy', fontStyle: "normal", lineHeight: '10px',
                backgroundColor: 'white', borderRadius: '', fontSize: '15px', color: '#f22a18'
              }} > User Name cannot be blank </Typography> : ""}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              onKeyUp={validatePassowrd}
              value={password}
              onChange={handlePassword}
              autoComplete="current-password"
              onBlur={validatePassowrd}
              helperText={passwordError ? <Typography style={{
                fontFamily: 'Gilroy', fontStyle: "normal", lineHeight: '10px',
                backgroundColor: 'white', borderRadius: '', fontSize: '15px', color: '#f22a18'
              }}

              > Password cannot be blank </Typography> : ""}

              InputProps={{

                endAdornment: (

                  <InputAdornment position="end">

                    <IconButton

                      aria-label="toggle password"

                      onClick={handleShowPassword}

                      onMouseDown={handleMouseDownPassword}

                    >

                      {showPassword ? <Visibility /> : <VisibilityOff />}



                    </IconButton>



                  </InputAdornment>

                )

              }}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontFamily: "Gilroy,sans-serif" }}
              onClick={handleSubmit}
            // onSubmit={handleSubmit}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </>
  );
}

const SingleSignOnWith = styled.div`
  color: #ff5e00;
  font-size: 18px;
  font-family: Gilroy;
  margin-right: 7.54px;
  white-space: pre-wrap;
`;

const IntegratedRMTool = styled.div`
  color: #313131;
  font-size: 24px;
  font-family: Gilroy;
  
  margin-left: 1px;
  margin-bottom: 10px;
  // align-self: flex-start;
`;
const LogInToYourAccou = styled.div`
  color: #adb8bf;
  font-size: 18px;
  font-family: Gilroy;
  margin-left: 1px;
  margin-bottom: 15.59px;
  align-self: flex-start;
`;
