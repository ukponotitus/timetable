import CreateTimeTable from "@/component/common/form/form";
import AdminTable from "@/component/tabel/admin";
import UserDashboardLayout from "@/layout/homepage";
import theme from "@/theme/Theme";
import { Box, Button, Link, Stack, Typography } from "@mui/material";


export default function Admin(){
    return(
        <UserDashboardLayout>
            <Box 
            sx={{
                pt:{md:"6%", xs:"25%"}, }}>
                    <Stack direction="row" justifyContent="space-around">
                <Typography sx={{
                    color:theme.palette.secondary.light,
                    // alignItems:"center",
                    mt:"20px",
                    textAlign:"center"
                }}>
                    Provisional Lecture Time Table For Rain Semester
                </Typography>

                 <Box sx={{
            background: theme.palette.secondary.light,
            ":hover": {
              background: theme.palette.secondary.light,
            },
            mt: "15px",
            // color: theme.palette.primary.main,
            width: { md: "15%", xs: "50%" },
            borderRadius: "10px",
            mb:"20px",
            ml:"20px",
            textAlign:"center"
            // textDecoration:'none'
            // mx: "auto",
        }}>
            <Link href="/admin/form">
            <Button
            sx={{background: theme.palette.secondary.light,
                ":hover": {
                  background: theme.palette.secondary.light,
                },
                // mt: "10px",
                color: theme.palette.secondary.main,
                textTransform:"none",
            // textAlign:"center"
        }}
            >Add timetable</Button>
            </Link>
        </Box>
                    </Stack>
                <Stack direction="row" justifyContent="space-around" sx={{color:theme.palette.secondary.light,
                mt:"35px"}}>
                    <Typography>Section:</Typography>
                    <Typography>Programme:</Typography>
                    <Typography>Date:</Typography>
                </Stack>
            </Box>
            <Box
            sx={{
                pt:"20px" }}>
                <AdminTable />  
            </Box>

            
        </UserDashboardLayout>
    )
}