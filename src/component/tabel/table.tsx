// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import theme from '@/theme/Theme';
// import { Box, Stack } from '@mui/material';
// import { useGetTimeTableApi } from "@/hooks/query/gettimetable"
// import { ITimetableFilter } from "@/lib/interfaces/filter"
// import { IFormTimetable, ISection, ITimetabel } from '@/lib/interfaces/form';
// import { useGetResources } from '@/hooks/query/getdata';
// // import BasicTable from "@/component/tabel/table"

// interface createData{
//   courseDesc:string,
// courseid: string,
// time: string,
// venueid: string,
// id: number,
// }
// interface Timetableitems{
//     [key:string]:
//     {[key:string]:IFormTimetable}
  
//   }
//   interface Props{
//     timetable?:ITimetabel[];
//   }

// export default function BasicTable({timetable}: Props) {
//     const { data: days } = useGetResources<ISection>("day")
//     const { data: slots } = useGetResources<ISection>("slot")
//     const [newTimetable, setNewTimetabel] = React.useState<Timetableitems>({})

//     React.useEffect(()=>{
//       if (timetable && days) {
//         setNewTimetabel(timetable[0]?.items.reduce<Timetableitems>((total, item) => {
//           const current = total[item.day.name] || {}
//           total[item.day.name] ={
//             ...current,
//             [item.slot.name]:{...item}
//           }
//           console.log({item, total})
//           return total
//         }, {}))
//       }
//       // console.log(ITimetabel)
//     }, [days,timetable])
//   return (
//     <TableContainer component={Paper} 
//     sx={{background:theme.palette.secondary.light,
//     // color:theme.palette.secondary.light,
//     color:"#FFFFFF",
//     mx:"auto",
//     width:"95%"
// }}
//     >
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell sx={{color: "black",}} >MON</TableCell>
//             <TableCell sx={{color: "black",}} >TUE</TableCell>
//             <TableCell sx={{color: "black",}} >WED</TableCell>
//             <TableCell sx={{color: "black",}} >THUR</TableCell>
//             <TableCell sx={{color: "black",}} >FRI</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//         {slots?.map((slot: ISection) => (
//             <TableRow
//               key={slot.id}
//               sx={{ '&:last-child td, &:last-child th': { border: 0,} }}
//             >
//               {days?.map((day)=>{
//                 const item = newTimetable?.[day.name]?.[slot.name]
//                 return item ? <TableCell key={item.id}>
//                   <Box sx={{fontSize:"16px", fontWeight:600, }}>
//                 {item.course.name}
//                 </Box >
//                 <Box sx={{fontSize:"16px",  fontWeight:600,}}>
//                 {item.course.code}
//                 </Box>
//                 <Box sx={{fontSize:"16px", mt:"10px", fontWeight:600,}}>
//                 {item.slot.name}
//                 </Box>
//                 <Box>
//                 {item.venue.code}
//                 </Box>
//                 </TableCell>:<TableCell></TableCell>
//         })}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }