import { Box, Button, IconButton, InputAdornment, MenuItem, OutlinedInput, Stack, TextField, Typography, useTheme } from "@mui/material";
// import{createTheme} from "" 
import { createTheme } from "@mui/material/styles";
import theme from "@/theme/Theme";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import RoundButton from "@/component/common/button/roundbutton";
import Link from "next/link";
import mobile from '../../../images/mobile.jpg'
// import {makeStyles} from "@mui/material/styles";


export default function SignUpPage(){
    const[data, setData]= React.useState({id:"", password:"", role:"", option:""})
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    
    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
        ) => {
            event.preventDefault();
        };
        const handleChange =(event: React.ChangeEvent<HTMLInputElement>) =>{
            const {name, value}= event.target
            setData({...data, [name]:value})

        }
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log(data)
        }
    
    return(
        <>
        <Box sx={{
        background:`url(${mobile.src})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        position:"fixed",
        width:"100%"
        
    }} height="100vh">
            <Box sx={{
                height:"90vh",
                width:{md:"40vw", xs:"90vw"},
                mt:"30px",
                mx:"auto",
                boxShadow:"   -3px -3px 9px #A7ECEE",
                borderRadius:"10px"
            }}>
                <Box sx={{
                    height:"30vh",
                    borderTopLeftRadius:"8px",
                    borderTopRightRadius:"8px"
                }}>
                   <Box
                    sx={{
                        mt:"50px",
                  position:"fixed",
                  mx:"auto",
                  textAlign:"center",
                  width:{md:"40%", xs:"80%"}
                    }}>
                   <Typography
                // mt={{ xs: "3.00vw", md: "20px" }}
                component="p"
                sx={{
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "#FFFFFF",
                }}
              >
                Please provide your details below to <br /> have access to your TimeTable.
                Thank you.
              </Typography>
              <Link href="/login">
            <Typography
            //   color="secondary"
              variant="body2"
              sx={{
                color: "#FFFFFF",
                cursor: "pointer",
                fontWeight: "400",
                fontSize: "20px",
              }}
            >
              Dont Have An Account?{" "}
              <span style={{ fontWeight: "900" }}>Login </span>
            </Typography>
          </Link>
            </Box>
                </Box>
        <Stack 
        onSubmit={handleSubmit}
        component="form" 
        sx={{
            px:{md:"18%", xs:"5%"},
            textAlign:"center",
            mt:"25px"
            // color:"white"
        }}>
            <Typography sx={{
                color:theme.palette.secondary.light,
            }}> Get Access to your TimeTable</Typography>
            <Stack 
             spacing={1}
             mt={{ xs: "20px", sm: "17px", md: "1.5vw" }}
             sx={{
                 width: "100%",}}>
            <OutlinedInput
             placeholder=" Enter your id number"
             name="id"
             value={data.id}
             onChange={handleChange}
             size="small"
             sx={{
                //  background:theme.palette.primary.main,
                 borderRadius:"20px",
                 border:"none",
                 color:theme.palette.secondary.light
             }}
            />
            </Stack>

            <Stack
                spacing={1}
                mt={{ xs: "20px", sm: "17px", md: "1.5vw" }}
                sx={{
                    width: "100%",
                }}
            >
            <OutlinedInput
            autoComplete="new-password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder=" Enter Your Password"
                size="small"
                fullWidth
                id="outlined-adornment-password"
                sx={{
                    // background:theme.palette.primary.main,
                    borderRadius:"20px",
                    color:theme.palette.secondary.light
                }}
                type={showPassword ? "text" : "password"}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>}
             />
            </Stack>
            <Box 
                py={{xs:"1.40vw", md:"1.04vw"}}
                // px={{xs:"3.00vw", md:"1.74vw"}}
                  borderRadius={{ xs: "6.60vw", md: "2.29vw" }}
                  boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                    <Typography sx={{
                        textAlign:"left",
                        color:theme.palette.secondary.light,
                    }}>select your role</Typography>
                  <TextField
                  size="small"
                    value={data.role}
                    onChange={handleChange}
                    name="role"
                    select
                    fullWidth
            //   disableUnderline
              placeholder="select ypur Role"
            //   label="select your Role"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                startAdornment: <InputAdornment position="start">
                </InputAdornment>,
              }}
              sx={{
                borderRadius:"20px",
                color:theme.palette.secondary.light
            }} 
            >
              <MenuItem value={"HOD"}>
                HOD
              </MenuItem>
              <MenuItem value={"Timetable Officer"}>
                Timetable Officer
              </MenuItem>
            </TextField>
                </Box>
            <Stack>
                <Typography sx={{
                   ml:"50%",
                   color:theme.palette.secondary.light,
                   mt:"5px",

                }}>forgotten password</Typography>
            </Stack>
            <Box>
                <Button
                type="submit"
                sx={{
                    // background:theme.palette.primary.main,
                    // ":hover":{
                    //     background:theme.palette.primary.main,
                    // },
                    mt:"15px",
                    color:theme.palette.secondary.light,
                    width:{md:"100%", xs:"50%"},
                    borderRadius:"10px",

                }} 
                >SignUp</Button>
            </Box>
            </Stack>
            </Box>

        </Box>
        </>
    )
}