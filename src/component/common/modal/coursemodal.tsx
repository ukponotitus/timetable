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
  InputLabel,
  Link,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import theme from "@/theme/Theme";
import TableAppBar from "@/component/app/appbar";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import { IoMdAdd } from "react-icons/io";
import ClassesPage from "@/component/common/classes/classes";
import { useState, useRef, useEffect } from "react";
import { ICourses, IMultiConfigCreate, IMultiConfigGet } from "@/lib/interfaces/form";
import { useCreateConfig } from "@/hooks/mutation/createconfig";
// import { useGetResources } from "@/hooks/query/getdata";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function CourseModal(props: IModal<ICourses>) {
  const { open, onClose } = props;
  const [state, setState] = useState(false);
  const afterFirstRender = useRef(false);
  const [courses, setCourses]= React.useState<ICourses>({
    name:"", code:"", id:0})
  const {mutate: addcourse} = useCreateConfig<IMultiConfigCreate, IMultiConfigGet>({onSuccess: () => { }},  "course")
  console.log({addcourse})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type:string) => {
    const {name, value}= e.target
    setCourses({ ...courses, [name]: value });
  }
 
  const handleSubmit= () =>{
    console.log("course", courses.code)
    console.log("course", courses.name)
    const CourseCode = courses.code
    const courseName = courses.name
    // const allcourse = {CourseCode, courseName}
    const newCourse: ICourses = {
      name:courseName,
      id:0,
      code: CourseCode,
    }
    addcourse(newCourse)
    setCourses({...courses, code:"", name:""})


  }

  return (
    <Box>
      <Dialog
        sx={{
          ".MuiDialog-paper": {
            width: "500px",
            height: "431px",
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
        <Stack sx={{ mt: "60px", mx: "auto" }}>
          <Box>
            <Typography sx={{ fontSize: "20px", fontWieght: 600 }}>
              Add New Course
            </Typography>
          </Box>
          <Box sx={{ mt: "10px" }}>
            <InputLabel>Enter CourseTitle</InputLabel>
            <TextField
              name="name"
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={courses.name}
              onChange={(e)=>handleChange(e, "course")}
            />
          </Box>
          <Box sx={{ mt: "20px" }}>
            <InputLabel>Enter CourseCode</InputLabel>
            <TextField
            name="code"
            value={courses.code}
            onChange={(e)=>handleChange(e, "course")}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              sx={{width:"100%"}}
            />
          </Box>
          <Box
            sx={{
              background: theme.palette.primary.main,
              ":hover": {
                background: theme.palette.primary.main,
              },
              mt: "30px",
              padding: "10px 14px",
              borderRadius: "10px",
            }}
          >
            <Button
            onClick={handleSubmit}
              sx={{
                color: theme.palette.secondary.light,
                ml: "30%",
              }}
            >
              Save
            </Button>
          </Box>
        </Stack>
      </Dialog>
    </Box>
  );
}
