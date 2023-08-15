import theme from "@/theme/Theme";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TableAppBar from "../../app/appbar";
import RoundButton from "../button/roundbutton";
import React from "react";
import FormModal from "../modal/formmodal";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import { ICodeName } from "@/lib/interfaces/form";

const arrays = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];
const Slots = [
  { title: "8-10AM", year: 1994 },
  { title: "10-12PM", year: 1972 },
  { title: "12-2PM", year: 1974 },
  { title: "2-4PM", year: 2008 },
];
const Days = [
  { title: "MON", year: 1994 },
  { title: "TUE", year: 1972 },
  { title: "WED", year: 1974 },
  { title: "THUR", year: 2008 },
  { title: "FRI", year: 2008 },
];

let courseName: ICodeName,{}={
  courseDesc:"INTRO TO COMPUTER",
  courseCode:"  Com104",
}

export default function CreateTimeTable() {
  let background = false;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ background: theme.palette.primary.main, pb: "30px" }}>
        <Box sx={{ border: "solid black" }}>
          <TableAppBar />
        </Box>
        <Stack
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 0.5, width: "30ch" },
            mt: "80px",
            background: "white",
            width: { md: "50vw", xs: "100%" },
            mx: "auto",
            pb: "20px",
            borderRadius: "10px",
          }}
        >
          <Grid container spacing={2} sx={{ px: "6%", mt: "3%" }}>
            <Grid item md={6} xs={12}>
              <Box>
                <InputLabel sx={{ color: theme.palette.secondary.main }}>
                  Enter Section
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  label="Enter Section"
                  variant="outlined"
                  size="small"
                  color="success"
                />
              </Box>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box>
                <InputLabel sx={{ color: theme.palette.secondary.main }}>
                  Enter Programme
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  label="Enter Section"
                  variant="outlined"
                  size="small"
                  color="success"
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{
              px: "6%",
              mt: "5%",
            }}
          >
            <Grid item md={6} xs={12}>
              <Box>
                <InputLabel sx={{ color: theme.palette.secondary.main }}>
                  Enter all Day
                </InputLabel>
                <Autocomplete
                  multiple
                  id="tags-filled"
                  options={Days.map((option) => option.title)}
                  // defaultValue={[top100Films[5].title]}
                  freeSolo
                  size="small"
                  renderTags={(value: readonly string[], getTagProps) =>
                    value.map((option: string, index: number) => (
                      <Chip
                        variant="outlined"
                        label={option}
                        size="small"
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Day"
                      // placeholder="Favorites"
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>

          <Stack
            direction="row"
            justifyContent="space-around"
            // component="form"
            sx={{
              mt: "20px",
            }}
          >
            <Box>
              <InputLabel sx={{ color: theme.palette.secondary.main }}>
                Enter all CourseDescription
              </InputLabel>
              <Autocomplete
                multiple
                id="tags-filled"
                // options={courseName}
                //   getOptionLabel={(option: ICodeName) => option.title}
                //   defaultValue={[courseName[4]]}
                //   filterSelectedOptions
                options={arrays.map((option) => option.title)}
                defaultValue={[arrays[5].title]}
                freeSolo
                size="small"
                renderTags={(value: readonly string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      size="small"
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    // label="filterSelectedOptions"
                    placeholder="CourseDescription"
                  />
                )}
              />
            </Box>

            <Box>
              <InputLabel sx={{ color: theme.palette.secondary.main }}>
                Enter all CourseCode
              </InputLabel>
              <Autocomplete
                multiple
                id="tags-filled"
                options={arrays.map((option) => option.title)}
                // defaultValue={[top100Films[5].title]}
                freeSolo
                size="small"
                renderTags={(value: readonly string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      size="small"
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="CourseCode"
                    // placeholder="Favorites"
                  />
                )}
              />
            </Box>
          </Stack>

          <Stack>
            <Grid
              container
              spacing={2}
              sx={{
                px: "6%",
                mt: "5%",
              }}
            >
              <Grid item md={6} xs={12}>
                <Box>
                  <InputLabel sx={{ color: theme.palette.secondary.main }}>
                    Enter all Slot
                  </InputLabel>
                  <Autocomplete
                    multiple
                    id="tags-filled"
                    options={Slots.map((option) => option.title)}
                    // defaultValue={[top100Films[5].title]}
                    freeSolo
                    size="small"
                    renderTags={(value: readonly string[], getTagProps) =>
                      value.map((option: string, index: number) => (
                        <Chip
                          variant="outlined"
                          label={option}
                          size="small"
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Slot"
                        // placeholder="Favorites"
                      />
                    )}
                  />
                </Box>
              </Grid>
            </Grid>
            {/* </Grid> */}
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-around"
            sx={{
              mt: "20px",
            }}
          >
            <Box>
              <InputLabel sx={{ color: theme.palette.secondary.main }}>
                Enter all VenueName
              </InputLabel>
              <Autocomplete
                multiple
                id="tags-filled"
                options={arrays.map((option) => option.title)}
                // defaultValue={[top100Films[5].title]}
                freeSolo
                size="small"
                renderTags={(value: readonly string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      size="small"
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="VenueName"
                    // placeholder="Favorites"
                  />
                )}
              />
            </Box>

            <Box>
              <InputLabel sx={{ color: theme.palette.secondary.main }}>
                Enter all VenueCode
              </InputLabel>
              <Autocomplete
                multiple
                id="tags-filled"
                options={arrays.map((option) => option.title)}
                // defaultValue={[top100Films[5].title]}
                freeSolo
                size="small"
                renderTags={(value: readonly string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      size="small"
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="VenueCode"
                    // placeholder="Favorites"
                  />
                )}
              />
            </Box>
          </Stack>

          <Box>
            <Button
            onClick={handleClickOpen}
              // type="submit"
              sx={{
                background: theme.palette.primary.main,
                ":hover": {
                  background: theme.palette.primary.main,
                },
                mt: "30px",
                color: theme.palette.secondary.main,
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
              Save
            </Button>
          </Box>
        </Stack>
        <FormModal open={open} onClose={handleClose} />
      </Box>
    </>
  );
}
