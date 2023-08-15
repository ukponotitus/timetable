import { Box, Button, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography, useTheme } from "@mui/material";
// import{createTheme} from "" 
import { createTheme } from "@mui/material/styles";
import theme from "@/theme/Theme";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import RoundButton from "@/component/common/button/roundbutton";
import Link from "next/link";
import mobile from '../../../images/mobile.jpg'



// import {makeStyles} from "@mui/material/styles";


export default function LoginPage(){
    const [data, setData] = React.useState({id:"", password:""})
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
        ) => {
            event.preventDefault();
        };
       const handleChange = ( event: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        setData({...data, [name]: value});
        console.log(data)

       }
        // const useStyles = makeStyles({
        //     textField:{
        //         '&.MuiOutlinedInput-root':{
        //             border:"none",
        //             '&:hover':{
        //                 border:"none",
        //             },
        //         }
        //     }
        // })
        // const classes = useStyles();
    
    return(
        <>
        <Box sx={{
            // background:"rgb(15,61,40)",
            // "linear-gradient(90deg, rgb(132, 124, 15, 0.99887623542394) 0%, rgb(7,77,24,1) 35%);",
        // background:
        // :"20px"
        background:`url(${mobile.src})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        position:"fixed",
        width:"100%"
        
    }} height="100vh">
            <Box sx={{
                // background:"#FFFFFF",
                height:"90vh",
                width:{md:"40vw", xs:"90vw"},
                mt:"30px",
                mx:"auto",
                // boxShadow:"5px 5px 5px 5px  #05170a",
                borderRadius:"10px",
                boxShadow:"   -3px -3px 9px #A7ECEE",
            }}>
                <Box sx={{
                    // background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(116,116,236,1) 31%, rgba(167,236,238,1) 51%);",
                    height:"40vh",
                    borderTopLeftRadius:"8px",
                    borderTopRightRadius:"8px"
                }}>
                    <Box
                    sx={{
                        mt:"70px",
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
                //   mt:"70px",
                //   position:"fixed",
                //   mx:"auto",
                //   textAlign:"center",
                //   width:{md:"40%", xs:"80%"}
                }}
              >
                Please provide your details below to <br /> have access to your TimeTable.
                Thank you.
              </Typography>
              <Link href="/signup">
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
              <span style={{ fontWeight: "900" }}>Sign Up </span>
            </Typography>
          </Link>
                    </Box>
                </Box>
        <Stack component="form" 
        sx={{
            px:{md:"18%", xs:"5%"},
            textAlign:"center",
            mt:"30px"
            // color:"white"
        }}>
            <Typography sx={{
                color:theme.palette.secondary.light,
            }}> Get Started With Us</Typography>
            <Stack 
             spacing={1}
             mt={{ xs: "20px", sm: "17px", md: "2vw" }}
             sx={{
                 width: "100%",}}>
            <OutlinedInput
            autoComplete="new-number"
            name="id"
            value={data.id}
            onChange={handleChange}
             placeholder=" Enter your id number"
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
                mt={{ xs: "20px", sm: "17px", md: "2vw" }}
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
            <Stack>
                <Typography sx={{
                   ml:"50%",
                   color:theme.palette.secondary.light,
                   mt:"5px",

                }}>forgotten password</Typography>
            </Stack>
            <Box>
                <Button
                sx={{
                    // background:theme.palette.primary.main,
                    ":hover":{
                        // background:theme.palette.primary.main,
                    },
                    mt:"15px",
                    color:theme.palette.secondary.light,
                    width:{md:"100%", xs:"50%"},
                    borderRadius:"10px",

                }} 
                >Login</Button>
                {/* <RoundButton> Login </RoundButton> */}
            </Box>
            </Stack>
            </Box>

        </Box>
        </>
    )
}