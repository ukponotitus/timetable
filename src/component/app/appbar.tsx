import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import theme from '@/theme/Theme';
import Link from 'next/link';
import DropDownButton from '../common/dropdown/dropdown';
import { Button, Stack } from '@mui/material';
import { contextProvider } from '@/context/auth';
import { ITimetableFilter } from '@/lib/interfaces/filter';
// import SearchIcon from '@mui/icons-material/Search';

interface AppBarprops {
  home:string,
  logout:string,
  login:string,
  setFilter: React.Dispatch<React.SetStateAction<ITimetableFilter>>
}

export default function TableAppBar(props: AppBarprops) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const {islLoggedIn, logout} = contextProvider();
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleLogut=(event: React.MouseEvent)=>{
    event.preventDefault();
    logout()
  }
  const handleDropDownChange = (index: number) => {
    setSelectedIndex(index);
    props.setFilter((filter)=> ({...filter, programme:index}))
    
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
       elevation={0}
      position="fixed" 
      sx={{ 
        borderTop:"10px solid #0A6EBD",
        // boxShadow:" 10px 10px 0px 10px #064415",
        background:theme.palette.secondary.light,
        borderBottom:"10px solid #0A6EBD"
      }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, 
            ml:{md:"10%", xs:"0px"},
             color:theme.palette.secondary.main,
             mr: { md: "", xs: 10, sm: 20 },
             flexGrow: 1,}}
          >
           Computer Science Departments TimeTable
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{ml:{md:"0", xs:"35%"}}}>
            <Box>
              <Link href="/admin">
              <Typography sx={{color:theme.palette.secondary.main, mt:"5px",
            ml:{md:"0", xs:"0px"}}}>{props.home}</Typography>
              </Link>
            </Box>
          <Box>
            {islLoggedIn ?(
              <Button
              onClick={handleLogut}
               sx={{mx:"10px",
            color:theme.palette.secondary.main}}>{props.logout}</Button>

            ):(
              <Link href="/login">
              <Button
              sx={{
                color:theme.palette.secondary.main
              }}>
                {props.login}
              </Button>
              </Link>
              // <Typography sx={{color:"black", mr:"10px"}}>Not Logged in</Typography>
            )}
          </Box>
          <Box>
          <DropDownButton onDropDownChange={handleDropDownChange}  />  
          
          </Box>

          </Stack>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Box>
  );
}