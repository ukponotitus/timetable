import { Box, Button, IconButton, InputAdornment, MenuItem, OutlinedInput, Stack, TextField, Typography, useTheme } from "@mui/material";
// import{createTheme} from "" 
import { createTheme } from "@mui/material/styles";
import theme from "@/theme/Theme";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import RoundButton from "@/component/common/button/roundbutton";
import Link from "next/link";
import mobile from '../../../images/mobile.jpg'
import { contextProvider } from "@/context/auth";
import { ISignUp } from "@/lib/interfaces/signup/data";
// import {makeStyles} from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";


export default function SignUpPage(){
  const {UserSignUp} = contextProvider();
    const[data, setData]= React.useState<ISignUp>({email:"", password:"", user_type:"", option:""})
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState("");

    
    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
        ) => {
            event.preventDefault();
        };
        const handleChange =(event: React.ChangeEvent<HTMLInputElement>) =>{
            const {name, value}= event.target
            setData({...data, [name]:value})

        }
        const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            try {
              setLoading(true);
             await UserSignUp(data)
              // Perform your async operation, e.g., API call
              // await yourAsyncFunction(data);
              setLoading(false);
            } catch (e: any) {
              // console.log(error)
              setError(e.message);
              setLoading(false);
              // Handle the error
            }
            // UserSignUp(data)
            // console.log(data)
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
                  width:{md:"40%", xs:"80%"},
                  pl:{md:"0px", xs:"10px"},
                    }}>
                   <Typography
                // mt={{ xs: "3.00vw", md: "20px" }}
                component="p"
                sx={{
                  fontWeight: "400",
                  fontSize:{md:"20px", xs:"15px"},
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
                fontSize: {md:"20px", xs:"15px"},
              }}
            >
              Dont Have An Account?{" "}
              <span style={{ fontWeight: "400" }}>Login </span>
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
             placeholder=" Enter your email"
             name="email"
             value={data.email}
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
                    }}>select your Role</Typography>
                  <TextField
                  size="small"
                    value={data.user_type}
                    onChange={handleChange}
                    name="user_type"
                    select
                    fullWidth
            //   disableUnderline
              placeholder="select your Role"
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
              <MenuItem value={"hod"}>
               hod
              </MenuItem>
              <MenuItem value={"exam_officer"}>
              exam_officer
              </MenuItem>
            </TextField>
                </Box>
            <Stack>
                <Typography sx={{
                   ml:"50%",
                   color:theme.palette.secondary.light,
                   mt:{md:"5px", xs:"10px"},
                   fontSize:{md:"20px", xs:"14px"},

                }}>forgotten password</Typography>
            </Stack>
            {loading ?(
              <Box>

                <CircularProgress />
              </Box>)
              :(

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
              )}
            </Stack>
            </Box>

        </Box>
        </>
    )
}


