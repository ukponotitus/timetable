import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import theme from '@/theme/Theme';
import { Box, Stack } from '@mui/material';
import { useGetTimeTableApi } from '@/hooks/query/gettimetable';
import { IFormItem, ISection, ITimetabel, IFormTimetable } from '@/lib/interfaces/form';
import { useGetResources } from '@/hooks/query/getdata';
import { ViewDayRounded } from '@mui/icons-material';
import { slotShouldForwardProp } from '@mui/material/styles/styled';

interface Timetableitems{
  [key:string]:
  {[key:string]:IFormTimetable}

}
interface Props{
  timetable?:ITimetabel[];
}
export default function AdminTable({timetable}: Props) {
  
    // console.log("timetable", {timetable})
    const { data: days } = useGetResources<ISection>("day")
    const { data: slots } = useGetResources<ISection>("slot")
    const [newTimetable, setNewTimetabel] = React.useState<Timetableitems>({})

    React.useEffect(()=>{
      if (timetable && days) {
        setNewTimetabel(timetable[0]?.items.reduce<Timetableitems>((total, item) => {
          const current = total[item.day.name] || {}
          total[item.day.name] ={
            ...current,
            [item.slot.name]:{...item}
          }
          console.log({item, total})
          return total
        }, {}))
      }
      // console.log(ITimetabel)
    }, [days,timetable])
    // console.log({newTimetable})
    
  return (
    <TableContainer component={Paper} 
    sx={{background:theme.palette.secondary.light,
    // color:theme.palette.secondary.light,
    color:"#FFFFFF",
    mx:"auto",
    width:"100%",
    mb:"30px"
}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color: "black",}} >MON</TableCell>
            <TableCell sx={{color: "black",}} >TUE</TableCell>
            <TableCell sx={{color: "black",}} >WED</TableCell>
            <TableCell sx={{color: "black",}} >THUR</TableCell>
            <TableCell sx={{color: "black",}} >FRI</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {slots?.map((slot: ISection) => (
            <TableRow
              key={slot.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0,} }}
            >
              {days?.map((day)=>{
                const item = newTimetable?.[day.name]?.[slot.name]
                return item ? <TableCell key={item.id} sx={{color: "white",  background:"#0A6EBD"  }}>
                  <Box sx={{fontSize:"16px", fontWeight:600, }}>
                {item.course.name}
                </Box >
                <Box sx={{fontSize:"16px",  fontWeight:600,}}>
                {item.course.code}
                </Box>
                <Box sx={{fontSize:"16px", mt:"10px", fontWeight:600,}}>
                {item.slot.name}
                </Box>
                <Box>
                {item.venue.code}
                </Box>
                </TableCell>:<TableCell></TableCell>
        })}
          {/* {days?.map((day: ISection) => (
            <TableRow
              key={day.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0,} }}
            >
              {slots?.map((slot)=>{
                const item = newTimetable[day.id]?.[slot.id]
                return item ? <TableCell key={item.id}>
                      <Box sx={{fontSize:"16px", fontWeight:600, }}>
                {item.course.name}
                </Box >
                <Box sx={{fontSize:"16px",  fontWeight:600,}}>
                {item.course.code}
                </Box>
                <Box sx={{fontSize:"16px", mt:"10px", fontWeight:600,}}>
                {item.slot.name}
                </Box>
                <Box>
                {item.venue.code}
                </Box>
                </TableCell>:null
        })} */}
              {/* mon */}
              {/* <TableCell sx={{color: "white", background:"#068FFF",   }} >
              <Box sx={{fontSize:"16px", fontWeight:600, }}>
                {row.courseDesc}
                </Box >
                <Box sx={{fontSize:"16px",  fontWeight:600,}}>
                {row.courseid}
                </Box>
                <Box sx={{fontSize:"16px", mt:"10px", fontWeight:600,}}>
                {row.time}
                </Box>
                <Box>
                {row.venueid}
                </Box>
                </TableCell> */}
            {/* tues */}
                {/* <TableCell sx={{color: "white",  background:"#0A6EBD"  }} >
                <Box sx={{fontSize:"16px", fontWeight:600, }}>
                {row.courseDesc}
                </Box>
                <Box sx={{fontSize:"16px",  fontWeight:600,}}>
                {row.courseid}
                </Box>
                <Box sx={{fontSize:"16px", mt:"10px", fontWeight:600,}}>
                {row.time}
                </Box>
                <Box >
                {row.venueid}
                </Box>
                </TableCell> */}
              {/* wed */}
                {/* <TableCell sx={{color: "white",  background:"#19A7CE"  }} >
                <Box sx={{fontSize:"16px", fontWeight:600, }}>
                {row.courseDesc}
                </Box>
                <Box sx={{fontSize:"16px",  fontWeight:600,}}>
                {row.courseid}
                </Box>
                <Box sx={{fontSize:"16px", mt:"10px", fontWeight:600,}}>
                {row.time}
                </Box>
                <Box>
                {row.venueid}
                </Box>
                </TableCell> */}
                {/* thurs */}
                {/* <TableCell sx={{color: "white",  background:"#3A98B9"  }} >
                <Box sx={{fontSize:"16px", fontWeight:600, }}>
                {row.courseDesc}
                </Box>
                <Box sx={{fontSize:"16px",  fontWeight:600,}}>
                {row.courseid}
                </Box>
                <Box sx={{fontSize:"16px", mt:"10px", fontWeight:600,}}>
                {row.time}
                </Box>
                <Box>
                {row.venueid}
                </Box>
                </TableCell> */}
                {/* fri */}
                {/* <TableCell sx={{color: "white",  background:"#146C94"  }} >
                <Box sx={{fontSize:"16px", fontWeight:600, }}>
                {row.courseDesc}
                </Box>
                <Box sx={{fontSize:"16px",  fontWeight:600,}}>
                {row.courseid}
                </Box>
                <Box sx={{fontSize:"16px", mt:"10px", fontWeight:600,}}>
                {row.time}
                </Box>
                <Box>
                {row.venueid}
                </Box>
                </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function setFormItems(arg0: any) {
  throw new Error('Function not implemented.');
}
