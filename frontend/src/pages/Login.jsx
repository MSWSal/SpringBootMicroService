import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Login = () => {

   const navigate = useNavigate();

   const [inputs, setInputs] = useState({
      mobile: "",
      password: "",
   });

   const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ inputs });
      console.log(inputs.mobile, inputs.password)

      axios.post("http://localhost:8222/api/v1/authentication/"+inputs.mobile+"/"+inputs.password)
         .then(res => {
            console.log(res.data);
            if (res.data.status === "POSTPAID SUCCESS") {
               navigate("/postpaid");
               localStorage.setItem("user", "postpaid");
            }
            else if (res.data.status === "PREPAID SUCCESS") {
               navigate("/prepaid");
               localStorage.setItem("user", "prepaid");
            }
            else {
               console.log(res.data.status);
            }

         }).catch(err => {
            console.log(err);
         })

   };

   return (
      <Container component="main" maxWidth="sm">
         <Box
            sx={{
               boxShadow: 3,
               borderRadius: 2,
               px: 4,
               py: 6,
               marginTop: 20,
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
            }}
         >
            <Typography component="h1" variant="h5">
               Sign in
            </Typography>
            <Box noValidate sx={{ mt: 1 }}>
               <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile Number"
                  name="mobile"
                  autoComplete="mobile"
                  onChange={handleChange}
                  value={inputs.mobile}
                  autoFocus
               />
               <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={inputs.password}
                  onChange={handleChange}
                  autoComplete="current-password"
               />
               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{ mt: 3, mb: 2 }}
               >
                  Sign In
               </Button>
               <Grid container>
                  <Grid item xs>
                     <Link href="#" variant="body2">
                        Forgot password?
                     </Link>
                  </Grid>
                  <Grid item>
                     <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                     </Link>
                  </Grid>
               </Grid>
            </Box>
         </Box>
      </Container>
   );
};

export default Login;
