import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
 import ListItem from '@mui/material/ListItem';
 
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
 
  Link,
  
} from "react-router-dom";

// import useAuth from '../../hooks/useAuth';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import Footer from '../Shared/Footer';
import { Container } from '@mui/system';


import HomeTeacherDashboard from './HomeTeacherDashboard';
import Home from '../Home/Home';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AddCourseByTeacher from './AddCoursebyTeacher';

import Gallery from '../UserDashboard/Gallery';
import { Button } from '@mui/material';


const drawerWidth = 270;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function TeacherDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { user } = React.useContext(AuthContext);

   const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

 
  const drawer = (
    <div >

      <Box sx={{
        background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))',
        height: '120vh', overflowX: 'hidden', overflowY: 'hidden'
      }} style={{ textAlign: 'center' }}>
        <Toolbar />
        <Container style={{ marginLeft: '5%' }}>

          <Link to='/' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
            <ListItem >
              <OtherHousesIcon style={{ color: '#08558b', fontSize: '1rem' }} />
              <Button style={{ color: '#08558b' }}>Home</Button>
            </ListItem>
          </Link>

          <Link to='/regStudentTeacher' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
            <ListItem >
              <OtherHousesIcon style={{ color: '#08558b', fontSize: '1rem' }} />
              <Button style={{ color: '#08558b' }}>my classes</Button>
            </ListItem>
          </Link>


          <Link to='/addCourseByTeacher' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
            <ListItem >
              <OtherHousesIcon style={{ color: '#08558b', fontSize: '1rem' }} />
              <Button style={{ color: '#08558b' }}>Add Course</Button>
            </ListItem>
          </Link>

     

        </Container>
      </Box>
    </div >
  );

  return (
    <>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
          <Toolbar>
            <IconButton
              backgroundColor="black"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              style={{ color: 'black' }}
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon style={{ color: '#08558b' }} className='buttonHover' />
            </IconButton>
            <Typography style={{ color: '#08558b' }} variant="h6" noWrap component="div">
              Teacher Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            mx: 5,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },

          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader sx={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
            <Box >
              <IconButton onClick={handleDrawerClose} style={{ color: 'black', fontSize: '2.5em' }}>
                {theme.direction === 'ltr' ?
                  <ArrowCircleLeftIcon style={{ color: '#08558b' }} /> : <ChevronRightIcon />}
              </IconButton>
            </Box>
          </DrawerHeader>
          <Divider style={{ backgroundColor: ' white ' }}></Divider>
          {drawer}


        </Drawer>
        <Box>
          <Toolbar />

          {/* <Switch> 
            {user.emailVerified ?
*/}

         <AddCourseByTeacher/>
          {/*
              : <p style={{ color: 'red' }}>Your email is not verified</p>}*/}

          {/*  </Switch> */}
        </Box>

        <Main open={open}>
          <DrawerHeader />

        </Main>

      </Box>
      <Footer></Footer>
    </>
  );
}
export default TeacherDashboard;
