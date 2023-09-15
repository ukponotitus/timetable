import theme from "@/theme/Theme";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TableAppBar from "../../app/appbar";
import RoundButton from "../button/roundbutton";
import React, { ReactNode, useEffect } from "react";
import FormModal from "../modal/formmodal";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import { ICodeName, IFormFirst, ISection } from "@/lib/interfaces/form";
import SectionModal from "../modal/sectionmodal";
import { IForm } from "@/lib/interfaces/form"; 
import   { SelectChangeEvent } from '@mui/material/Select';
import { useGetResources } from "@/hooks/query/getdata";
import { type } from "os";
import { SentimentVerySatisfiedRounded } from "@mui/icons-material";
import ProgrammeModal from "../modal/programmemodal";
import SemesterModal from "../modal/semestermodal";
import Link from "next/link";
import { IModal } from "@/lib/interfaces/modal";
import { ITimetableFilter } from "@/lib/interfaces/filter";
// import SectionModal from "../modal/sectionmodal";
// interface sect{
//   sec:string,
//   id:number,
// }
// const options: sect[]=[
//   {sec:"2022/2023", id:1},
//   {sec:"2022/2023", id:2}
// ]

interface Props extends IModal<ISection>{
  modalsIsOpen: boolean;
    isOnClose: () => void,
}

export default function CreateTimeTable(props: Props){
  let background = false;
  const [semesterModal, setSemesterModal] = React.useState(false)
  const [programmeModal, setProgrammeModal] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const [section, setSection] = React.useState(false)
  const [test,setTest] = React.useState<any>([])
  const {data}= useGetResources<ISection>("section")
  const {data: programme}= useGetResources<ISection>("programme")
  const {data: semester}= useGetResources<ISection>("semester")
  console.log(" output this", {data, programme, semester})
  const [modalIsOpen, setModalIsOpen] = React.useState(false );
  const { modalsIsOpen, isOnClose,  item } = props;
  const [selectedItemId, setSelectedItemId] = React.useState<ISection | undefined>(undefined);
  const [selectedSection, setSelectedSection] = React.useState({
    section: {name: '' },
    programme:{name: ""},
    semester:{name:""}
  }); 
  console.log(selectedSection);
  const [firstForm, setFirstForm]=React.useState<IFormFirst>({
    section: 0,
    programme: 0,
    semester: 0,
})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value}= event.target
    setFirstForm({...firstForm, [name]:value})
    console.log(firstForm)
}

// const handleValue = (event: SelectChangeEvent) => {
//   const selectedValue = event.target.value; // Get the selected value
//  // Update the test state
// //  console.log(selectedSection)
//   setFirstForm((prevForm) => ({
//     ...prevForm,
//     value: {selectedValue }, // Update firstForm's value property
//   }));
//   // onDataReceived(firstForm)
// };

const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
    console.log('prog',e.currentTarget.section.value)
    // console.log(" output this", {data, programme, semester})
    console.log({firstForm})
    const data:IFormFirst = {
      section: Number(e.currentTarget.section.value),
      programme:Number(e.currentTarget.programme.value),
      semester:Number(e.currentTarget.semester.value),
    }
    setFirstForm({...data})
    console.log({data})
    // const objectLength = Object.entries(data).length;
    // console.log(objectLength);
    // if(objectLength > 0){
    //     // router.push("/admin/form")
    // }else{
    //   alert("fill complete this stage")
    // }
    // console.log(firstForm)
  handleClickOpen();
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubModal=()=>{
    setSection(true)
  }
  const handleSubModalClose=()=>{
    setSection(false)
  }
  const handleProgrammeModal = () =>{
    setProgrammeModal(true)
    const isAddingSection = true;
  }
  const handleProgrammeClose = () =>{
    setProgrammeModal(false)
  }
  const handleSemesterModal = () =>{
    setSemesterModal(true)
  }
  const handleSemesterClose = () =>{
    setSemesterModal(false)
  }

  const handleEdit=(e: React.MouseEvent <Element, MouseEvent>,  item: ISection)=>{
    e.stopPropagation()
  }
  const handleDelete = (e: React.MouseEvent <Element, MouseEvent>, item: ISection)=>{
    e.stopPropagation()

  }
  const openModal = (e: React.MouseEvent <Element, MouseEvent>, item: ISection) => {
    e.stopPropagation()
    setSelectedItemId(item);
    // setModalIsOpen(true);
    setSection(true)
    const isEditingSection = false;
  };

  const closeModal = () => {
    setSelectedItemId(undefined);
    setModalIsOpen(false);
  };
   
  const handleSectionChange =(e: SelectChangeEvent<ReactNode>, type:string)=>{
    const selectedValue: string = e.target.value as string;
    let text= ''
    if(type == 'section'){
      const sectionType = data?.find((item)=>item.id === parseInt(selectedValue));
      text = sectionType?.name ?? ''
    }
    else if(type == "programme"){
      const sectionType = programme?.find((item)=>item.id === parseInt(selectedValue));
      text = sectionType?.name ?? ''
    }
    else if(type == "semester"){
      const sectionType = semester?.find((item)=>item.id === parseInt(selectedValue));
      text = sectionType?.name ?? ''
    }
    console.log("hello", {text, type})
    setSelectedSection({...selectedSection,[type]:{name:text}})
  }

   
  // const isEditingSection = false;
  

  return (
    <>
      <Box sx={{ background: theme.palette.primary.main, pb: "30px",
    height:"100vh" }}>
        <Box sx={{ border: "solid black" }}>
          <TableAppBar home={"Home"} logout={"Logout"} login={"Login"} setFilter={function (value: React.SetStateAction<ITimetableFilter>): void {
            throw new Error("Function not implemented.");
          } }          />
        </Box>
        <Stack
          component="form"
          name="form"
          onSubmit={handleSubmit}
          sx={{
            "& .MuiTextField-root": { m: 0.5, width: "30ch" },
            mt: "10%",
            background: "white",
            width: { md: "50vw", xs: "100%" },
            mx: "auto",
            pb: "20px",
            borderRadius: "10px",
            height :"70vh"
          }}
        >
          <Box sx={{ px: "6%", mt: "3%", mx:"auto", }}>
            <Typography sx={{fontSize:"20px", fontWeight:600, }}>Enter the following details</Typography>
          </Box>
          <Grid container spacing={2} sx={{ px: "6%", mt: "2%", mx:"auto", }}>
            <Grid item md={12} xs={12} >
              <Box>
                <InputLabel sx={{ color: theme.palette.secondary.main }}>
                  Enter Section
                </InputLabel>
                <Select
                required
                // select
                fullWidth
                sx={{width:{md:"100%", xs:"80%"}}}
                // value={selectedSection.section?.name}
                name="section"
                onChange={(e)=>handleSectionChange(e, 'section')}
                renderValue={(value: ReactNode)=>{
                  console.log(selectedSection)
                return <Typography> {selectedSection.section?.name} </Typography>
              }}
                  id="outlined-basic"
                  label="Enter Section"
                  variant="outlined"
                  size="small"
                  color="success"
                >
                  {
                    data?.map((item: ISection, index: any)=>(
                      <MenuItem key={item.id} value={item.id}>
                  <Stack >
                      {item.name}
                    </Stack>
                      <Box>
                      <Button onClick={(e) => openModal(e, item)}>Edit</Button>
                    <Button onClick={(e)=>handleDelete(e, item)} >Delete</Button>
                    </Box>
                      </MenuItem>
                    ))
                  }

                  <IconButton
                  onClick={handleSubModal}
                  sx={{fontSize:"18px"}}>Add Section</IconButton>
                </Select>
              </Box>
            </Grid>

            <Grid item md={12} xs={12} sx={{mt:"10px"}} >
              <Box>
                <InputLabel sx={{ color: theme.palette.secondary.main }}>
                  Enter Programme
                </InputLabel>
                <Select
                required
                // select
                fullWidth
                sx={{width:{md:"100%", xs:"80%"}}}
                // value={selectedSection.programme?.name}
                name="programme"
                onChange={(e)=>handleSectionChange(e, "programme")}
                renderValue={(value: ReactNode)=>{
                  // console.log(value)
                return <Typography> {selectedSection.programme?.name} </Typography>
              }}
                  id="outlined-basic"
                  label="Enter programme"
                  variant="outlined"
                  size="small"
                  color="success"
                >
                  {
                    programme?.map((item: ISection, index: any)=>(
                      <MenuItem key={item.id} value={item.id}>
                  <Stack >
                      {item.name}
                    </Stack>
                      <Box>
                      <Button onClick={(e)=>handleEdit(e, item)}>Edit</Button>
                    <Button onClick={(e)=>handleDelete(e, item)} >Delete</Button>
                    </Box>
                      </MenuItem>
                    ))
                  }

                  <IconButton
                  onClick={handleProgrammeModal}
                  sx={{fontSize:"18px"}}>Add programme</IconButton>
                </Select>
              </Box>
            </Grid>
            <Grid item md={12} xs={12} sx={{mt:"10px"}}>
              <Box>
                <InputLabel sx={{ color: theme.palette.secondary.main }}>
                  Select Semester
                </InputLabel>
                <Select
                required
                // select
                fullWidth
                sx={{width:{md:"100%", xs:"80%"}}}
                // value={firstForm.section}
                name="semester"
                onChange={(e)=>handleSectionChange(e, "semester")}
                renderValue={(value: ReactNode)=>{
                  // console.log(value)
                return <Typography> {selectedSection.semester?.name} </Typography>
              }}
                  id="outlined-basic"
                  label="Enter semester"
                  variant="outlined"
                  size="small"
                  color="success"
                >
                  {
                    semester?.map((item: ISection, index: any)=>(
                      <MenuItem key={item.id} value={item.id}>
                  <Stack >
                      {item.name}
                    </Stack>
                      <Box>
                      <Button onClick={(e)=>handleEdit(e, item)}>Edit</Button>
                    <Button onClick={(e)=>handleDelete(e, item)} >Delete</Button>
                    </Box>
                      </MenuItem>
                    ))
                  }

                  <IconButton
                  onClick={handleSemesterModal}
                  sx={{fontSize:"18px"}}>Add Semester</IconButton>
                </Select>
              </Box>
            </Grid>
          </Grid>

          <Box>
            <Button
            // onClick={handleClickOpen}
              type="submit"
              sx={{
                background: theme.palette.primary.main,
                ":hover": {
                  background: theme.palette.primary.main,
                },
                mt: "20px",
                color: theme.palette.secondary.light,
                width: { md: "50%", xs: "50%" },
                borderRadius: "10px",
                mx: "auto",
                ml: { md: "23%" },
                padding: "14px 16px",
                  justifyContent:" center",
                  alignItems:" center",
                  gap: "10px",
              }}
            >
              Continue
            </Button>
          </Box>
          {/*  */}
        </Stack>
        <FormModal 
          open={open}
          onClose={handleClose}
          firstForm={firstForm} 
          // modalsIsOpen={false} 
          />
        <SectionModal 
          open={section}
          onClose={handleSubModalClose}
          key={selectedItemId?.id}
          // modalsIsOpen={modalIsOpen} 
          // isOnClose={closeModal} 
          item={selectedItemId} 
          isEditingSection={false}    
              />
        <ProgrammeModal open={programmeModal} onClose={handleProgrammeClose} />
        <SemesterModal open={semesterModal} onClose={handleSemesterClose} />
      </Box>
    </>
  );
}
