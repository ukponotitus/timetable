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

interface createData{
  courseDesc:string,
courseid: string,
time: string,
venueid: string,
id: number,
}
const rows : createData[]=[
  {
    courseDesc:"INTRO TO COMPUTER",
    courseid:"com101",
    time:"8-10AM",
    venueid:"LAB101",
    id: 1,
  },
  {
    courseDesc:"Intro to STATISTICS",
    courseid:"com101",
    time:"10-12pM",
    venueid:"BLG101",
    id: 1,
  },
  // {
  //   courseid:"com201",
  //   time:"8-10AM",
  //   venueid:"LAB101",
  //   id: 2,
  // },
  // {
  //   courseid:"com201",
  //   time:"8-10AM",
  //   venueid:"LAB101",
  //   id: 3,
  // },
  // {
  //   courseid:"com201",
  //   time:"8-10AM",
  //   venueid:"LAB101",
  //   id: 4,
  // },
  // {
  //   courseid:"com201",
  //   time:"8-10AM",
  //   venueid:"LAB101",
  //   id: 5,
  // },
]
// ) {
//   return { date, courseid, time,  venueid, id };
// }

// const rows = [
//   createData("MON", "com201", "8-10AM", "LAB101", 1),
//   createData("TUE", "com101", "10-12PM", "PAD201", 2),
//   createData("WED", "COM102", "12-2PM", "EEE101", 3),
//   createData("THUR", "com201", "2-4PM", "LAB201", 4),
//   createData("FRI", "com301", "8-10AM",  "BAM101", 5),
// ];
// courseid:"CSE101",
// venueid:"LAP201",
// date:"MON",
// time:"8-10am",
// id:

export default function AdminTable() {
  return (
    <TableContainer component={Paper} 
    sx={{background:theme.palette.secondary.light,
    // color:theme.palette.secondary.light,
    color:"#FFFFFF",
    mx:"auto",
    width:"100%"
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
          {rows.map((row, id) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0,} }}
            >
              {/* mon */}
              <TableCell sx={{color: "white", background:"#068FFF",   }} >
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
                </TableCell>
            {/* tues */}
                <TableCell sx={{color: "white",  background:"#0A6EBD"  }} >
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
                </TableCell>
              {/* wed */}
                <TableCell sx={{color: "white",  background:"#19A7CE"  }} >
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
                </TableCell>
                {/* thurs */}
                <TableCell sx={{color: "white",  background:"#3A98B9"  }} >
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
                </TableCell>
                {/* fri */}
                <TableCell sx={{color: "white",  background:"#146C94"  }} >
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
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}