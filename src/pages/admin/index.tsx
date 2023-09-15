import CreateTimeTable from "@/component/common/form/form";
import AdminTable from "@/component/tabel/admin";
import UserDashboardLayout from "@/layout/homepage";
import theme from "@/theme/Theme";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import {useRouter } from 'next/router'
import { useEffect } from "react";
import { setToken } from "@/pages/service/api/config";
import WaringModal from "@/component/common/modal/warning";
import React from "react";
import Warning from "@/component/common/modal/warning";
import AdminDashboardLayout from "@/layout/adminlayout";
// import { useGetResources } from "@/hooks/query/getdata";
import { ISection, ITimetabel } from "@/lib/interfaces/form";
import { useGetTimeTableApi } from "@/hooks/query/gettimetable";
import { useGetResources } from "@/hooks/query/getdata";
import { ITimetableFilter } from "@/lib/interfaces/filter";

interface ChangingComponent{
    selectedIndex: number;
  }

export default function Admin({selectedIndex}: ChangingComponent){
    const router = useRouter();
    const [open, setOpen] = React.useState(false)
    const [ filter, setFilter] = React.useState<ITimetableFilter>({})
    const {data: timetable} = useGetTimeTableApi(filter)
    const current = timetable?.[0]
     const handleOpen = ()=>{
        let tokens = JSON.parse(localStorage.getItem("token") || "{}");
        const objectLength = Object.entries(tokens).length;
        console.log(objectLength);
        if(objectLength > 0){
            router.push("/admin/form")
        }
        else{
            setOpen(true)
        }
     }
     const handleClose = ()=>{
        setOpen(false)
     }


     function formatDate(date: string):string{
        // const time = new Date(date);
        const formattedDate = new Date(date).toLocaleString(); 
        return formattedDate;
      }
      

      

    return(
        <AdminDashboardLayout setFilter={setFilter}>
            <Box 
            sx={{
                pt:{md:"6%", xs:"25%"}, }}>
                    <Stack direction={{md:"row", xs:"column"}} justifyContent="space-around">
                <Typography sx={{
                    color:theme.palette.secondary.light,
                    // alignItems:"center",
                    mt:"20px",
                    textAlign:"center"
                }}>
                    Provisional Lecture Time Table For {current?.semester?.name}
                </Typography>

                 <Box sx={{
            background: theme.palette.secondary.light,
            ":hover": {
              background: theme.palette.secondary.light,
            },
            mt: "15px",
            width: { md: "15%", xs: "50%" },
            borderRadius: "10px",
            mb:"20px",
            ml:"20px",
            textAlign:"center"
        }}>
            <Button
            onClick={handleOpen}
            sx={{background: theme.palette.secondary.light,
                ":hover": {
                  background: theme.palette.secondary.light,
                },
                color: theme.palette.secondary.main,
                textTransform:"none",
        }}
            >Add timetable</Button>
        </Box>
                    </Stack>
                <Stack direction={{md:"row", xs:"column"}} justifyContent="space-around" sx={{color:theme.palette.secondary.light,
                mt:{md:"35px", xs:"px"}, mx:{md:"", xs:"20px"}}}>
                    <Typography>Section:{current?.section?.name}</Typography>
                    <Typography sx={{mt:{md:"", xs:"20px"}}}>Programme:{current?.programme?.name}</Typography>
                    <Typography sx={{mt:{md:"", xs:"20px"}}}>Date:{
                            formatDate(current?.created_at) ? formatDate(current?.created_at) : 'no date yet'
                            } </Typography>
                </Stack>
            </Box>
            <Box
            sx={{
                pt:"20px" }}>
                <AdminTable timetable={timetable}/>  
            </Box>

            <Warning open={open} onClose={handleClose} title={""} />
        </AdminDashboardLayout>
    )
}