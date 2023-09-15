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
import { useCreateConfig } from "@/hooks/mutation/createconfig";
import { ISection, ISingleConfigCreate, ISingleConfigGet } from "@/lib/interfaces/form";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface ISectionModalProps extends IModal<ISection> {
  isEditingSection: boolean;
}


export default function SectionModal(props: ISectionModalProps) {
  const { open, onClose, item } = props;
  const [state, setState] = useState(false)
  const afterFirstRender = useRef(false);
  const [section, setSection] = React.useState<ISection>(item || { name: '', id:0, })
  const router = useRouter();
  const {mutate: addsections} = useCreateConfig<ISingleConfigCreate, ISingleConfigGet>({onSuccess: () => { }},  "section")
  console.log({addsections})

  const sectionText = props.isEditingSection ? "Edit Section" : "Edit Section";
  // const secction: ISections = { name: "", id: 1,}
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type:string) => {
    setSection({ ...section, name: e.target.value });
  }

  const handleSubmit = () => {
    console.log('Section Name:', section.name);
    const sectionName = section.name;
    const newSection: ISection = { name: sectionName, id: 0 };
    addsections(newSection);
    setSection({ ...section, name: '' });
    
    // onClose();
    
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
           
            <Typography sx={{ fontSize: "20px", fontWieght: 600, }}>
           { props.isEditingSection ? "Add Section" : "Edit Section"}
              </Typography>
          </Box>
          <Box sx={{ mt: "10px" }}>
            <TextField 
            name="section"
            value={section.name}
            onChange={(e)=>handleChange(e, "section")}
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
