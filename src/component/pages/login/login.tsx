import { Box, Button, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography, useTheme } from "@mui/material";
// import{createTheme} from "" 
import { createTheme } from "@mui/material/styles";
import theme from "@/theme/Theme";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import RoundButton from "@/component/common/button/roundbutton";
import Link from "next/link";
import mobile from '../../../images/mobile.jpg'
import { contextProvider } from "@/context/auth";
import { ILogin } from "@/lib/interfaces/login/data";
import CircularProgress from "@mui/material/CircularProgress";



// import {makeStyles} from "@mui/material/styles";


export default function LoginPage() {
    const { UserLogin } = contextProvider();
    const [data, setData] = React.useState<ILogin>({ email: "", password: "" })
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState("");

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value });
        console.log(data)

    }
    const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setLoading(true);
           await UserLogin(data)
           console.log(data)
            // Perform your async operation, e.g., API call
            // await yourAsyncFunction(data);
            setLoading(false);
          } catch (e: any) {
            // console.log(error)
            setError(e.message);
            setLoading(false);
            // Handle the error
          }
        // UserLogin(data)
    }
    return (
        <>
            <Box sx={{
                background: `url(${mobile.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "fixed",
                width: "100%"

            }} height="100vh">
                <Box sx={{
                    height: "90vh",
                    width: { md: "40vw", xs: "90vw" },
                    mt: "30px",
                    mx: "auto",
                    borderRadius: "10px",
                    boxShadow: "   -3px -3px 9px #A7ECEE",
                }}>
                    <Box sx={{
                        height: "40vh",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px"
                    }}>
                        <Box
                            sx={{
                                mt: "70px",
                                position: "fixed",
                                mx: "auto",
                                textAlign: "center",
                                width: { md: "40%", xs: "80%" },
                                pl:{md:"0px", xs:"10px"},
                            }}>
                            <Typography
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
                            <Link href="/signup">
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#FFFFFF",
                                        cursor: "pointer",
                                        fontWeight: "400",
                                        fontSize:{md:"20px", xs:"15px"},
                                        mt:"10px",
                                    }}
                                >
                                    Dont Have An Account?{" "}
                                    <span style={{ fontWeight: "900" }}>Sign Up </span>
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Stack component="form"
                        onSubmit={handleClick}
                        sx={{
                            px: { md: "18%", xs: "5%" },
                            textAlign: "center",
                            mt: {md:"30px", xs:"5px"}
                        }}>
                        <Typography sx={{
                            color: theme.palette.secondary.light,
                        }}> Get Started With Us</Typography>
                        <Stack
                            spacing={1}
                            mt={{ xs: "20px", sm: "17px", md: "2vw" }}
                            sx={{
                                width: "100%",
                            }}>
                            <OutlinedInput
                                autoComplete="new-number"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                placeholder=" Enter email"
                                size="small"
                                sx={{
                                    borderRadius: "20px",
                                    border: "none",
                                    color: theme.palette.secondary.light
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
                                    borderRadius: "20px",
                                    color: theme.palette.secondary.light
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
                                ml: "50%",
                                color: theme.palette.secondary.light,
                                mt: "5px",

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
                                        ":hover": {
                                        },
                                        mt: "15px",
                                        color: theme.palette.secondary.light,
                                        width: { md: "100%", xs: "50%" },
                                        borderRadius: "10px",
    
                                    }}
                                >Login</Button>

                        </Box>
                        )}
                            {/* <RoundButton> Login </RoundButton> */}
                    </Stack>
                </Box>

            </Box>
        </>
    )
}