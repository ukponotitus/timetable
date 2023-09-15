import TableAppBar from "@/component/app/appbar"
import UserDashboardLayout from "@/layout/homepage"
import { Box, Stack, Typography } from "@mui/material"
import theme from "@/theme/Theme"
// import BasicTabl
import AdminTable from "@/component/tabel/admin"
import React from "react"
import { useGetTimeTableApi } from "@/hooks/query/gettimetable"
import { ITimetableFilter } from "@/lib/interfaces/filter"
// import BasicTable from "@/component/tabel/table"


interface ChangingComponent{
    selectedIndex : number;
  }

export default function HomePage({selectedIndex}: ChangingComponent){
    const [ filter, setFilter] = React.useState<ITimetableFilter>({})
    const {data: timetable} = useGetTimeTableApi(filter)
    const current = timetable?.[0]

    function formatDate(date: string):string{
        const formattedDate = new Date(date).toLocaleString(); 
        return formattedDate;
      }
    return(
        <>
        <UserDashboardLayout setFilter={setFilter}>
            <Box 
            sx={{
                pt:"5%" }}>
                <Typography sx={{
                    color:theme.palette.secondary.light,
                    // alignItems:"center",
                    mt:"50px",
                    textAlign:"center"
                }}>
                    Provisional Lecture Time Table For  {current?.semester?.name}
                </Typography>
                <Stack direction="row" justifyContent="space-around" sx={{color:theme.palette.secondary.light,
                mt:"35px"}}>
                    <Typography>Section:{current?.section?.name}</Typography>
                    <Typography>Programme:{current?.programme?.name}</Typography>
                    <Typography>Date:{formatDate(current?.created_at )}</Typography>
                </Stack>
            </Box>
            <Box
            sx={{
                pt:"30px" }}>
                <AdminTable timetable={timetable}  />  
            </Box>

            
        </UserDashboardLayout>
        </>

    )
}