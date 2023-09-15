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
import { ISection, ISingleConfigCreate,  ISingleConfigGet } from "@/lib/interfaces/form";
import { useCreateConfig } from "@/hooks/mutation/createconfig";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ProgrammeModal(props: IModal<ISection>) {
  const { open, onClose } = props;
  const [state, setState] = useState(false)
  const afterFirstRender = useRef(false);
  const [programme, setProgramme] = React.useState<ISection>({ name: '', id:0 })
  const router = useRouter();
  const {mutate: addProgramme} = useCreateConfig<ISingleConfigCreate, ISingleConfigGet>({ onSuccess: () => { }}, "programme")
  console.log({addProgramme})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type:string) => {
    setProgramme({ ...programme, name: e.target.value });
  }
  const handleSubmit = ()=>{
  // console.log(proramme)
  const newprogramme = programme.name;
  const programmeName: ISection = {name: newprogramme, id:0}
  addProgramme(programmeName)
  setProgramme({...programme, name:""})
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
        <Stack sx={{ mt: "30px", mx: "auto" }}>
          <Box>
            <Typography sx={{ fontSize: "20px", fontWieght: 600, }}>Add programme</Typography>
          </Box>
          <Box sx={{ mt: "10px" }}>
            <TextField 
            name="section"
            value={programme.name}
            onChange={(e)=>handleChange(e, "programme")}
            id="outlined-basic"
             label="Outlined" 
             variant="outlined" />
          </Box>
          <Box sx={{
            background: theme.palette.primary.main,
            ":hover": {
              background: theme.palette.primary.main,
            },
            mt: "30px",
            padding: "10px 14px",
            borderRadius: "10px"
          }}>
            <Button 
            onClick={handleSubmit}
            sx={{
              color: theme.palette.secondary.light,
              ml: "30%"
              // alignItems:" center",
              // mx:"auto"
            }}>Add</Button>
          </Box>
        </Stack>


      </Dialog>
    </Box>
  );
}
