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
import { ICode, IModal, ISecondForm, ISlot, IVenue } from "@/lib/interfaces/modal";
import {
  Box,
  Grid,
  InputAdornment,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import theme from "@/theme/Theme";
import TableAppBar from "@/component/app/appbar";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import { IoMdAdd } from 'react-icons/io'
import ClassesPage from "@/component/common/classes/classes";
import { useState, useRef, useEffect, ReactNode } from 'react'
import CourseModal from "./coursemodal";
import { IForm, IFormFirst, IFormData, IFormItem, ISection, ISingleConfigCreate, ISingleConfigGet, } from "@/lib/interfaces/form";
import CreateTimeTable from "../form/form";
import { useCreateForm } from "@/hooks/mutation/createResources";
import { useGetResources } from "@/hooks/query/getdata";
import { useCreateConfig } from "@/hooks/mutation/createconfig";
import { useRouter } from "next/router";



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});
interface Props extends IModal<IFormFirst> {
  firstForm: IFormFirst,
 

  // data: IFormItem
}
interface FormItems {
  [key: string]: IFormItem[]
}

export default function FormModal(props: Props) {
  const { open, onClose, firstForm } = props;
  console.log({firstForm})
  const { mutate: timetable } = useCreateForm({ onSuccess: () => { } })
  const { data: days } = useGetResources<ISection>("day")
  const router= useRouter()
  const {mutate: addday} = useCreateConfig<ISingleConfigCreate, ISingleConfigGet>({onSuccess: () => { }},  "day")

  // console.log(firstForm)
  const [selectedDay, setSelectedDay] = useState(0)
  const [selectDay, setSelectDay] = useState<ISection | undefined>()
  const [formItems, setFormItems] = useState<FormItems>({})
  const afterFirstRender = useRef(false);
  // const [receivedData, setReceivedData] =/ React.useState([]);
  // useEffect(() => {
  //   const keys = Object.keys(formItems)
  //   if (!keys.length && days) {
  //     setFormItems(days.reduce<FormItems>((total, item) => {
  //       total[item.id] = [{
  //         day: item.id,
  //         course: 0,
  //         venue: 0,
  //         slot: 0,
  //       }]
  //       // console.log({total})
  //       return total
  //     }, {}))
  //   }
  //   console.log({formItems})

  // }, [days])

  useEffect(()=>{
      const daysname = days?.find((item)=> item.id == selectedDay)
      if(daysname){
        setSelectDay({...daysname})
      }
  }, [selectedDay])
  const handleUpdate = (index: number, data: { name: string, value: number }) => {
    const items = formItems[selectedDay]
    console.log({items, selectedDay})
    items[index] = { ...items[index], [data.name as keyof IFormItem]: data.value }
    setFormItems({ ...formItems, [selectedDay]: items })
    console.log({formItems})
  }

  useEffect(() => {
    if(!selectedDay){
      return 
    }
    if (!formItems[selectedDay]) {
      setFormItems({
        ...formItems,
        [selectedDay]: [
          {
            day: selectedDay,
            course: 0,
            venue: 0,
            slot: 0,
          },
        ],
      });
    }
  }, [selectedDay, formItems]);
  
  
  
  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   const { name, value } = event.target;
  //   setSecondForm({ ...secondForm, [name]: value })
  //   console.log(secondForm)
  // }

  const [formData, setFormData] = useState<IFormData>({
    section: firstForm?.section,
    programme: firstForm?.programme,
    semester: firstForm?.semester,
    items: [],
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      section: firstForm?.section,
      programme: firstForm?.programme,
      semester: firstForm?.semester,
    }));
  }, [firstForm]);

  // submit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("çourse==>", e.currentTarget.course.value)
    // console.log(secondForm)
    const allItems: IFormItem[] = []
    Object.keys(formItems).forEach((key=>{
      console.log("formItem", formItems[key], {key})
      const displayItem = formItems[key].some((item) => Object.values(item).some((value)=>value == 0))
      if(displayItem){

        return 
      }
      console.log({displayItem})
      allItems.push(...formItems[key])
    }))
    const combinedFormData = {
      ...formData, 
      items:allItems
    };
    console.log("Combined Form Data:", allItems);

    timetable(combinedFormData);
    router.push("/admin")
  }
  // display of classes
  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    const items = formItems[selectedDay]
    // console.log({items, selectedDay})
    // items[index] = { ...items[index], [data.name as keyof IFormItem]: data.value }
    if (items.length < 4) {

      const newItem = {
        day: selectedDay,
        course: 0,
        venue: 0,
        slot: 0,
      };
      const newArray = [...items, newItem];
      console.log({newArray, items, formItems})
      setFormItems({ ...formItems, [selectedDay]: newArray })
    } else {
      alert("classes can only be 4")
    }
  };
  // to delete a class
  const handleDelete = (index: number) => {
    let delArray = formItems[selectedDay]
    // if (delArray.length > 1) {
      delArray.splice(index, 1);
      setFormItems({ ...formItems, [selectedDay]: delArray });
    // } else {
    //   alert("Cannot delete the last item.");
    // }

  }

  const handleEdit=(e: React.MouseEvent <Element, MouseEvent>,  item: ISection)=>{
    e.stopPropagation()
  }
  const handleDeleteDay = (e: React.MouseEvent <Element, MouseEvent>, item: ISection)=>{
    e.stopPropagation()

  }
  return (
    <Box>
      <Dialog
        sx={{
          ".MuiDialog-paper": {
            width: "700px",
            height: "471px",
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
        <Box sx={{ mx: "px" }}>
          <Stack component="form"
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2} sx={{ px: "40px", mt: "20px" }}>
              <Grid item md={12} py={{ xs: "1.40vw", md: "1.04vw" }}>
                <Typography
                  sx={{
                    textAlign: "left",
                    color: theme.palette.secondary.main,
                  }}
                >
                  Select Day
                </Typography>
                <Select
                  name="day"
                  onChange={(e)=>setSelectedDay(Number(e.target.value))}
                  size="small"
                  fullWidth
                  placeholder="select Day"
                  variant="outlined"
                  renderValue={(value: ReactNode)=>{
                    console.log(selectDay)
                  return <Typography> {selectDay?.name} </Typography>
                }}
                >
                 {
                    days?.map((item: ISection, index: any)=>(
                      <MenuItem key={item.id} value={item.id}>
                  <Stack >
                      {item.name}
                    </Stack>
                      {/* <Box>
                      <Button onClick={(e)=>handleEdit(e, item)}>Edit</Button>
                    <Button onClick={(e)=>handleDeleteDay(e, item)} >Delete</Button>
                    </Box> */}
                      </MenuItem>
                    ))
                  }
                  {/* <IconButton
                  // onClick={handleSubModal}
                  sx={{fontSize:"18px"}}>Add Day</IconButton> */}

                </Select>
              </Grid>
            </Grid>
                  {formItems[selectedDay] ?
            <Box sx={{
              mx: "40px",
              border: " 1px solid gray",
              mt: "30px",
              px: "px"
            }}>
              <Typography sx={{ mt: "-20px" }}>Set Classes</Typography>
              <Box>
                {
                 formItems[selectedDay]?.map((display, index) => {
                    return <><ClassesPage
                      key={display.course}
                      display={display}
                      index={index}
                      onChange={handleUpdate}
                    /><Box>
                        <Button onClick={() => handleDelete(index)}>delete classs</Button>
                      </Box></>
                  })
                }
                {/* <Link href="component/common/classes/classes"> */}
                <Button
                  onClick={handleAdd}
                  sx={{
                    mt: "60px",
                    color: theme.palette.secondary.main,
                    width: { md: "50%", xs: "50%" },
                    borderRadius: "10px",
                    mx: "auto",
                    ml: { md: "23%" },
                    mb: "30px"
                  }}>
                  <IoMdAdd />
                  Add classes</Button>
              </Box>
            </Box>:(<></>)
                  }
            <Box>
            </Box>
            <Box>
            </Box>
            <Box>
              <Button
                type="submit"
                sx={{
                  background: theme.palette.primary.main,
                  ":hover": {
                    background: theme.palette.primary.main,
                  },
                  mt: "60px",
                  color: theme.palette.secondary.light,
                  width: { md: "50%", xs: "50%" },
                  borderRadius: "10px",
                  mx: "auto",
                  ml: { md: "23%" },
                  mb: "30px",
                  padding: "14px 16px",
                  justifyContent: " center",
                  alignItems: " center",
                  gap: "10px",
                }}
              >
                Save
              </Button>
            </Box>
          </Stack>

        </Box>
      </Dialog>
    </Box>
  );
}
