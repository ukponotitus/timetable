import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
import Autocomplete from "@mui/material/Autocomplete";
import {IoMdAdd} from 'react-icons/io'

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

export default function ClassesPage(){

    return(
        <>
        <Box>
        <Grid container spacing={2} sx={{
             mt: "0px",
            //  border:" 1px solid gray",
            
              }}>
            <Grid item md={3} xs={12}>
                <Typography
                  sx={{
                    textAlign: "left",
                    color: theme.palette.secondary.main,
                  }}
                >
                  select CourseDesc
                </Typography>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  size="small"
                  options={CourseCode}
                  getOptionLabel={(option: ICode) => option.Code}
                //   defaultValue={[CourseCode[4]]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      // label="filterSelectedOptions"
                      placeholder="CourseDesc"
                    />
                  )}
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <Typography
                  sx={{
                    textAlign: "left",
                    color: theme.palette.secondary.main,
                  }}
                >
                  select CourseCode
                </Typography>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  size="small"
                  options={CourseCode}
                  getOptionLabel={(option: ICode) => option.Code}
                //   defaultValue={[CourseCode[4]]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      // label="filterSelectedOptions"
                      placeholder="CourseCode"
                    />
                  )}
                />
              </Grid>
              <Grid item md={3} py={{ xs: "1.40vw", md: "1.04vw" }}>
                <Typography
                  sx={{
                    textAlign: "left",
                    color: theme.palette.secondary.main,
                  }}
                >
                  select Time
                </Typography>
                <Box>
                  <Autocomplete
                    multiple
                    id="tags-outlined"
                    size="small"
                    options={Slot}
                    getOptionLabel={(option: ISlot) => option.Slot}
                    // defaultValue={[Slot[3]]}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        // label="filterSelectedOptions"
                        placeholder="Time"
                      />
                    )}
                  />
                </Box>
              </Grid>

              <Grid item md={3} xs={12}>
                <Typography
                  sx={{
                    textAlign: "left",
                    color: theme.palette.secondary.main,
                  }}
                >
                  select VenueCode
                </Typography>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  size="small"
                  options={VenueCode}
                  getOptionLabel={(option: IVenue) => option.Venue}
                //   defaultValue={[VenueCode[4]]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      // label="filterSelectedOptions"
                      placeholder="VenueCode"
                    />
                  )}
                />
              </Grid>
            </Grid>
        </Box>
        </>
    )
}