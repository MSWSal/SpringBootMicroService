import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Login = () => {
   const [inputs, setInputs] = useState({
      email: "",
      password: "",
   });

   const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ inputs });
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
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  value={inputs.email}
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
