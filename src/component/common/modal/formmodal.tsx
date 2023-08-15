import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { ICode, IModal, ISlot, IVenue } from "@/lib/interfaces/modal";
import {
  Box,
  Grid,
  InputAdornment,
  Link,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import theme from "@/theme/Theme";
import TableAppBar from "@/component/app/appbar";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import {IoMdAdd} from 'react-icons/io'
import ClassesPage from "@/component/common/classes/classes";
import { useState, useRef, useEffect } from 'react'

const VenueCode: readonly IVenue[] = [
  { Venue: "LAP102", id: 1 },
  { Venue: "COM103", id: 2 },
  { Venue: "EEE101", id: 3 },
  { Venue: "PAD104", id: 4 },
  { Venue: "BAM101", id: 5 },
  { Venue: "STA102", id: 6 },
];
const CourseCode: readonly ICode[] = [
  { Code: "Sta102", id: 1 },
  { Code: "COM103", id: 2 },
  { Code: "EED101", id: 3 },
  { Code: "COM101", id: 4 },
  { Code: "COM102", id: 5 },
  { Code: "STA102", id: 6 },
];
const Slot: readonly ISlot[] = [
  { Slot: "8AM-10AM", id: 1 },
  { Slot: "10AM-12PM", id: 2 },
  { Slot: "12PM-2PM", id: 3 },
  { Slot: "2PM-4PM", id: 4 },
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function FormModal(props: IModal) {
  const { open, onClose } = props;
  const [state, setState] = useState(false)
  const afterFirstRender = useRef(false);
  
  const handleClick = () => {
    setState(true);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setState(true);
  //   }, 1000); // Change the interval duration as needed

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

 
  
  

  return (
    <Box>
      <Dialog
        sx={{
          ".MuiDialog-paper": {
            width: "700px",
            height: "471px",
            borderRadius: "8px",
            background: theme.palette.secondary.light,
            mt:"5%",
          },
        }}
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <Box sx={{mx:"px"}}>
          <Stack component="form">
            <Stack
              direction="row"
              justifyContent="space-around"
              sx={{ color: theme.palette.secondary.main, mt: "35px" }}
            >
              <Typography>Section: 2022/2023</Typography>
              <Typography>Programme:HND11</Typography>
              <Typography>Date:17th APRIL, 2023</Typography>
            </Stack>
            <Grid container spacing={2} sx={{ px: "40px", mt: "20px" }}>
              <Grid item md={12} py={{ xs: "1.40vw", md: "1.04vw" }}>
                <Typography
                  sx={{
                    textAlign: "left",
                    color: theme.palette.secondary.main,
                  }}
                >
                  select Day
                </Typography>
                <TextField
                  name="role"
                  select
                  size="small"
                  fullWidth
                  placeholder="select Day"
                  variant="outlined"
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value={"HOD"}>MON</MenuItem>
                  <MenuItem value={" Student"}>TUE</MenuItem>
                  <MenuItem value={"Timetable Officer"}>WED</MenuItem>
                  <MenuItem value={"Timetable Officer"}>THUR</MenuItem>
                  <MenuItem value={"Timetable Officer"}>FRI</MenuItem>
                </TextField>
              </Grid>
            </Grid>

                  <Box sx={{mx:"40px", 
                 border:" 1px solid gray",
                 mt:"30px",
                 px:"px"
                }}>
                   <Typography sx={{mt:"-20px"}}>Set Classes</Typography>
            <Box>
            <ClassesPage  />
            </Box>
            <Box>
            <ClassesPage  />
            </Box>
                <Box>
                {state && <ClassesPage  />}
                </Box>

            <Box>
              {/* <Link href="component/common/classes/classes"> */}
              <Button 
              onClick={handleClick}
               sx={{
                // background: theme.palette.primary.main,
                // ":hover": {
                //   background: theme.palette.primary.main,
                // },
                mt: "60px",
                color: theme.palette.secondary.main,
                width: { md: "50%", xs: "50%" },
                borderRadius: "10px",
                mx: "auto",
                ml: { md: "23%" },
                mb:"30px"
              }}>
                <IoMdAdd />
                Add more classes</Button>
              {/* </Link> */}
            </Box>
            </Box>
            <Box>
              <Link href="/admin">
              <Button
                sx={{
                  background: theme.palette.primary.main,
                  ":hover": {
                    background: theme.palette.primary.main,
                  },
                  mt: "60px",
                  color: theme.palette.secondary.main,
                  width: { md: "50%", xs: "50%" },
                  borderRadius: "10px",
                  mx: "auto",
                  ml: { md: "23%" },
                  mb:"30px",
                  padding: "14px 16px",
                  justifyContent:" center",
                  alignItems:" center",
                  gap: "10px",
                }}
              >
                Save
              </Button>
              </Link>
              {/* <RoundButton> Login </RoundButton> */}
            </Box>
          </Stack>
        </Box>
      </Dialog>
    </Box>
  );
}
