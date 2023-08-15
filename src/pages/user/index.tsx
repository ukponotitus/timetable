import TableAppBar from "@/component/app/appbar"
import UserDashboardLayout from "@/layout/homepage"
import { Box, Stack, Typography } from "@mui/material"
import theme from "@/theme/Theme"
// import BasicTabl
import BasicTable from "@/component/tabel/table"




export default function HomePage(){
    return(
        <>
        <UserDashboardLayout>
            <Box 
            sx={{
                pt:"5%" }}>
                <Typography sx={{
                    color:theme.palette.secondary.light,
                    // alignItems:"center",
                    mt:"50px",
                    textAlign:"center"
                }}>
                    Provisional Lecture Time Table For Rain Semester
                </Typography>
                <Stack direction="row" justifyContent="space-around" sx={{color:theme.palette.secondary.light,
                mt:"35px"}}>
                    <Typography>Section:</Typography>
                    <Typography>Programme:</Typography>
                    <Typography>Date:</Typography>
                </Stack>
            </Box>
            <Box
            sx={{
                pt:"30px" }}>
                <BasicTable />  
            </Box>

            
        </UserDashboardLayout>
        </>

    )
}