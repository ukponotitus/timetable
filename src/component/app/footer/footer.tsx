import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
//   Row,
//   Column,
//   FooterLink,
//   Heading,
} from '@mui/material';
import Link from "next/link";
import theme from "@/theme/Theme";
import {useEffect} from 'react';
  
const Footer = () => {
    useEffect(() =>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
  return (
    <Box sx={{mt:"30px"}}>
      <Typography sx={{
        color:theme.palette.primary.main,
        pt:"3%",
        textAlign:"center",
        fontSize:"30px"     }}>
        Computer Science department Timetable Portal for Foundation Polytechnic
      </Typography>
      <Stack direction="row" justifyContent="space-around"
       sx={{
        ml:"10%",
        pt:"20px",
        pb:"30px"
      }} >
        {/* <Typography sx={{color:theme.palette.secondary.light}}>Home</Typography>
        <Typography sx={{color:theme.palette.secondary.light}}>About Us</Typography> */}
        <Box>
        <Button onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
         sx={{color:theme.palette.secondary.light,
        textTransform:"none"}}
         >Back to Top</Button>
        </Box>
        {/* <Typography sx={{color:theme.palette.secondary.light}}>Logout</Typography> */}

      </Stack>
      {/* <Grid container spacing={2}
      sx={{
        ml:"10%",
        pt:"10px",
        pb:"20px"
      }} >
        <Grid item md={3}>
            <Typography sx={{color:theme.palette.secondary.light}}>Home</Typography>
          </Grid>
          <Grid item md={3}>
            <Typography sx={{color:theme.palette.secondary.light}}>About Us</Typography>
          </Grid>
          <Grid item md={3}>
            <Typography sx={{color:theme.palette.secondary.light}}>Back to Top</Typography>
          </Grid>
          <Grid item md={3}>
            <Typography sx={{color:theme.palette.secondary.light}}>Logout</Typography>
          </Grid>
      </Grid> */}
    </Box>
  );
};
export default Footer;