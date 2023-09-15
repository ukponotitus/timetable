import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function LogInLoading(){
    return(
        <>
         <Stack spacing={1}>
         <CircularProgress color="inherit" />
        {/* <Skeleton variant="circular" width={40} height={40} /> */}
        </Stack>
        </>
    )
}
// let newArray = array
  // newArray.splice(index, 1)
  // setArray([...newArray])