import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IClasses, ICode, IModal, ISlot, IVenue } from "@/lib/interfaces/modal";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import theme from "@/theme/Theme";
import CourseModal from "../modal/coursemodal";
import VenueModal from "../modal/venuemodal";
import { ReactNode, useEffect } from "react";
import { SelectChangeEvent } from '@mui/material/Select';
import { ICourses, IFormItem, IMultiConfigCreate, IMultiConfigGet, ISection, IVenues } from "@/lib/interfaces/form";
import { useGetResources } from "@/hooks/query/getdata";
import { type } from "os";
import SlotModal from "../modal/slotmodal";
import { slotShouldForwardProp } from "@mui/material/styles/styled";
import { useCreateConfig } from "@/hooks/mutation/createconfig";


interface Props {
  index: number
  display: IFormItem
  onChange: (index: number, data: { name: string, value: number } ) => void
}

export default function ClassesPage({ display, index, onChange }: Props) {

  const [data, setData] = React.useState<IFormItem>({slot: 0, course: 0, venue: 0,  day: 0,})
  const [course, setCourse] = React.useState(false)
  const [venue, setVenue] = React.useState(false)
  const {data: courses}= useGetResources<ICourses>("course")
  const {data: venues}= useGetResources<IVenues>("venue")
  const {data: slot}= useGetResources<ISection>("slot")
  const [slots, setSlots] = React.useState(false)
  const {mutate: addslot}= useCreateConfig<IMultiConfigCreate, IMultiConfigGet>({onSuccess: () => { }},  "slot")
  // console.log(courses)
  const [selectedCourses, setSelectedCourses] = React.useState({
    course: {name:"" },
  venue:{name: ""},
  slot:{name:""}
}); 
  // console.log(selectedCourses);
  useEffect(() => {

      selectedCourses.course.name = courses?.find((item)=>item.id == parseInt(String(display.course)))?.code ?? ""


      // const sectionType = venues?.find((item)=>item.id == parseInt(String(value)));
      // text = sectionType?.code ?? ''


      // const sectionType = slot?.find((item)=>item.id == parseInt(String(value)));
      // text = sectionType?.name ?? ''

    // console.log(value)
    setSelectedCourses({...selectedCourses})
  }, []);
  // coursemodal
  const handleClickOpen = () => {
    setCourse(true)
  }
  const handleClickClose = () => {
    setCourse(false)
  }
  // venuemodal
  const handleVenueOpen = () => {
    setVenue(true)
  }
  const handleVenueClose = () => {
    setVenue(false)
  }
  // slotmodal
  const handleClickSlot = () =>{
    setSlots(true)
  }
  const handleClose = () =>{
    setSlots(false)
  }


  const handleEdit=(e: React.MouseEvent <Element, MouseEvent>,  item: ICourses)=>{
    e.stopPropagation()
  }

  const handleDelete=(e: React.MouseEvent <Element, MouseEvent>,  item: ICourses)=>{
    e.stopPropagation()
  }

  const handleEdits=(e: React.MouseEvent <Element, MouseEvent>,  item: ISection)=>{
    e.stopPropagation()
  }

  const handleDeletes=(e: React.MouseEvent <Element, MouseEvent>,  item: ISection)=>{
    e.stopPropagation()
  }

  function handleChange(event: SelectChangeEvent<ReactNode
     | HTMLInputElement |HTMLTextAreaElement | 
     HTMLSelectElement>, type:string ):void {
    const { value, name } = event.target
    onChange(index, {name, value:Number(value)})
    // let selectedValue: string =  event.target
    let text= ''
    if(type == 'course'){
      const sectionType = courses?.find((item)=>item.id == parseInt(String(value)));
      text = sectionType?.code ?? ''
    }
    else if(type == "venue"){
      const sectionType = venues?.find((item)=>item.id == parseInt(String(value)));
      text = sectionType?.code ?? ''
    }
    else if(type == "slot"){
      const sectionType = slot?.find((item)=>item.id == parseInt(String(value)));
      text = sectionType?.name ?? ''
    }
    console.log(value)
    setSelectedCourses({...selectedCourses, [type]:{name:text} })
  }

  // const handleChange(e: SelectChangeEvent, index: number){
  //   const selectedCourseId= e.target.value;
  //   const selectedCourseCode = courses?.find((item)=>item.id === Number(selectedCourseId));
  //   setSelectedCourses({item: selectedCourseCode} );
  // }

  return (
    <>
      <Box>
        <Grid container spacing={2} sx={{
          mt: "0px",
          py: { xs: "1.40vw", md: "1.04vw" },
          px: "10px"
        }}>
          <Grid item md={4} py={{ xs: "1.40vw", md: "1.04vw" }}>
            <Box>
              <InputLabel
                sx={{
                  textAlign: "left",
                  color: theme.palette.secondary.main,
                }}
              >
                select Course
              </InputLabel>
              <Select
              required
                size="small"
                fullWidth
                placeholder="select Course"
                variant="outlined"
                defaultValue={display.course}
                // value={selectedCourses.course?.code}
                name="course"
                onChange={(e)=>handleChange(e, "course")}
                renderValue={(value: ReactNode) => {
                  return <Typography>{selectedCourses.course?.name}</Typography>
                }}>
                  {
                    courses?.map((item: ICourses, index: number)=>(
                <MenuItem key={item.id} value={item.id}>
                  <Stack >
                  {item.code}
                  </Stack>
                  <Box>
                    <Button onClick={(e)=>handleEdit(e, item)}>Edit</Button>
                    <Button >Delete</Button>
                  </Box>
                </MenuItem>
                    ))
                  }
                <IconButton
                  onClick={handleClickOpen}
                  sx={{ fontSize: "18px" }}>Add Course</IconButton>
              </Select>
            </Box>
          </Grid>
          <Grid item md={4} >
            <Box>
              <InputLabel
                sx={{
                  textAlign: "left",
                  color: theme.palette.secondary.main,
                }}
              >
                select Venue
              </InputLabel>
              <Select
               required
                // name="role"
                size="small"
                defaultValue="select Venue"
                fullWidth
                placeholder="select Venue"
                variant="outlined"
                value={display.venue}
                name="venue"
                onChange={(e)=>handleChange(e, "venue")}
                renderValue={(value: ReactNode) => {
                  // console.log(classe)
                  return <Typography>{selectedCourses.venue?.name}</Typography>
                }}
              >
                {
                  venues?.map((item, index)=>(
                <MenuItem key={item.id} value={item.id}>
                  <Stack >
                    {item.code}
                  </Stack>
                  <Box>
                    <Button onClick={(e)=>handleEdit(e, item)}>Edit</Button>
                    <Button onClick={(e)=>handleDelete(e, item)}>Delete</Button>
                  </Box>
                </MenuItem>
                  ))
                }
                <IconButton
                  onClick={handleVenueOpen}
                  sx={{ fontSize: "18px" }}>Add Venue</IconButton>
              </Select>
            </Box>
          </Grid>
          <Grid item md={4} >
            <Box>
              <InputLabel
                sx={{
                  textAlign: "left",
                  color: theme.palette.secondary.main,
                }}
              >
                select Time
              </InputLabel>
              <Select
               required
                size="small"
                fullWidth
                placeholder="enter slot"
                variant="outlined"
                // value={""}
                name="slot"
                onChange={(e)=>handleChange(e, "slot")}
                renderValue={(value: ReactNode) => {
                  return <Typography>{selectedCourses.slot?.name}</Typography>
                }}>
                  {
                    slot?.map((item: ISection, index: number)=>(
                <MenuItem key={item.id} value={item.id}>
                  <Stack >
                  {item.name}
                  </Stack>
                  <Box>
                    <Button onClick={(e)=>handleEdits(e, item)}>Edit</Button>
                    <Button onClick={(e)=>handleDeletes(e, item)}>Delete</Button>
                  </Box>
                </MenuItem>
                    ))
                  }
                <IconButton
                  onClick={handleClickSlot}
                  sx={{ fontSize: "18px" }}>Add slot</IconButton>
              </Select>
            </Box>
          </Grid>
        </Grid>
        <CourseModal open={course} onClose={handleClickClose} />
        <VenueModal open={venue} onClose={handleVenueClose} />
        <SlotModal open={slots} onClose={handleClose} />
      </Box>
      {/* <FormModal
      open={open}
      onClose={() => setOpen(false)}
      firstForm={firstForm}
    /> */}
    </>
  )
}

function setSecondForm(data: IFormItem) {
  throw new Error("Function not implemented.");
}
