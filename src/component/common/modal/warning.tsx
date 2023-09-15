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
import { IoMdAdd } from 'react-icons/io'
import ClassesPage from "@/component/common/classes/classes";
import { useState, useRef, useEffect } from 'react'
import { useRouter } from "next/router";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function WaringModal(props: IModal) {
  const { open, onClose } = props;
  const [state, setState] = useState(false)
  const afterFirstRender = useRef(false);
  const [section, setSection] = React.useState("")
  const router = useRouter();

  const handleRedirect = () =>{
    // e.preventDefault();
    let tokens = JSON.parse(localStorage.getItem("token") || "{}");
    const objectLength = Object.entries(tokens).length;
    console.log(objectLength);
    if(objectLength > 0){
        router.push("/admin/form")
        // console.log("i am log in")
    }
    else{
        router.push("/login")
    // console.log("i am not log in")
    }
    // console.log(tokens)

}



  return (
    <Box>
      <Dialog
        sx={{
          ".MuiDialog-paper": {
            width: "500px",
            height: "231px",
            borderRadius: "8px",
            background: theme.palette.secondary.light,
            mt: "5%",
          },
        }}
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <Stack sx={{ mt: "55px", mx: "auto" }}>
          <Box>
            <Typography sx={{ fontSize: "20px", fontWieght: 600, textAlign:"center"}}> Login First</Typography>
          </Box>
          <Stack  direction="row" justifyContent="space-around"  sx={{
            mt:"20px"
          }}>
            <Box>
            <Button 
            onClick={handleRedirect}
            sx={{
              color: theme.palette.secondary.main,
            //   ml: "30%",
              background: theme.palette.primary.main,
            ":hover": {
              background: theme.palette.primary.main,
            },
            mx:"20px"
            }}>okay</Button>
            </Box>
            <Box>
            <Button 
            sx={{
              color: theme.palette.secondary.main,
            //   ml: "30%",
              background: theme.palette.primary.main,
            ":hover": {
              background: theme.palette.primary.main,
            },
            mx:"20px"
            }}>No</Button>
            </Box>
          </Stack>
        </Stack>


      </Dialog>
    </Box>
  );
}
