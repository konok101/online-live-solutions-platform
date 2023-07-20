import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddHomeIcon from '@mui/icons-material/AddHome';
import HouseIcon from '@mui/icons-material/House';
import LayersIcon from '@mui/icons-material/Layers';
import Footer from '../Shared/Footer';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import BallotIcon from '@mui/icons-material/Ballot';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';

import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Container } from '@mui/system';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Button } from '@mui/material';
import HomeAdminDashboard from './HomeAdminDashboard';

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

function AdminDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { user } = React.useContext(AuthContext);

  // const { user } = useAuth();
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
        height: '120vh', paddingLeft: '0%', overflowX: 'hidden', overflowY: 'hidden'
      }}
      // style={{ textAlign: 'center' }}
      >
        <Toolbar />
        <Container
          style={{
            width: '50vw',
            marginLeft: 'auto'
          }}
        >


          <Link to='/' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
            <ListItem >
              <HouseIcon style={{ color: '#08558b', fontSize: '1rem' }} />
              <Button style={{ color: '#08558b' }}>Home</Button>
            </ListItem>
          </Link>
          <Link to='/regStudent' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
            <ListItem >
              <ManageAccountsIcon style={{ color: '#08558b', fontSize: '1rem' }} />
              <Button style={{ color: '#08558b' }}>Registered</Button>
            </ListItem>
          </Link>


          
          <Link to='/addCourse' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
            <ListItem >
              <PlaylistAddCircleIcon style={{ color: '#08558b', fontSize: '1rem' }} />
              <Button style={{ color: '#08558b' }}>Add Course</Button>
            </ListItem>
          </Link>


          <Link to='/allUsers' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>

            <ListItem >
              <SupervisedUserCircleIcon style={{ color: '#08558b', fontSize: '1rem' }} />
              <Button style={{ color: '#08558b' }}>All Users</Button>
            </ListItem>
          </Link>
          <Link to='/addTeacher' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
            <ListItem >
              <LibraryAddIcon style={{ color: '#08558b', fontSize: '1rem' }} />
              <Button style={{ color: '#08558b' }}>Add Teacher</Button>
            </ListItem>
          </Link>

          <Link to='/contactQuaries' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
            <ListItem >
              <BallotIcon style={{ color: '#08558b', fontSize: '1rem' }} />
              <Button style={{ color: '#08558b' }}>Quaries  </Button>
            </ListItem>
          </Link>
          <Link to='/applyTeacherList' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
            <ListItem >
              <ReceiptLongIcon style={{ color: '#08558b', fontSize: '1rem' }} />
              <Button style={{ color: '#08558b' }}> Apply List </Button>
            </ListItem>
          </Link>
          

          {/*
          <TreeView
            style={{ textAlign: 'left', marginLeft: '0%' }}
            aria-label="file system navigator"
            defaultExpanded={['1']}


            defaultCollapseIcon={
              <div style={{ padding: '.3rem 0', }}>
                <ArrowDropUpIcon style={{ color: '#08558b', fontSize: '1.5rem' }} />
              </div>}
            defaultExpandIcon={<div style={{ padding: '.3rem 0', }}>
              <ArrowDropDownIcon style={{ color: '#08558b', fontSize: '1.5rem' }} />
            </div>}

            sx={{ flexGrow: 1, overflowY: 'hidden', overflowX: 'hidden' }}
          >

            <TreeItem nodeId="1" label="Department"
              style={{ color: '#08558b' }}>

              <Link to='/math' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                <ListItem >
                  <AppRegistrationIcon style={{ color: '#08558b', fontSize: '1.1rem' }} />
                  <Button style={{ color: '#08558b' }}>Math</Button>
                </ListItem>
              </Link>

              <Link to='/english' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                <ListItem >
                  <AppRegistrationIcon style={{ color: '#08558b', fontSize: '1.1rem' }} />
                  <Button style={{ color: '#08558b' }}>English</Button>
                </ListItem>
              </Link>

              <Link to='/science' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                <ListItem >
                  <AppRegistrationIcon style={{ color: '#08558b', fontSize: '1.1rem' }} />
                  <Button style={{ color: '#08558b' }}>Science</Button>
                </ListItem>
              </Link>

            </TreeItem>


          </TreeView>
            

          <Link to='/gallery' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
            <ListItem >
              <OtherHousesIcon style={{ color: '#08558b', fontSize: '1rem' }} />
              <Button style={{ color: '#08558b' }}>Gallery</Button>
            </ListItem>
          </Link>
          */}

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
              Admin
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

          <HomeAdminDashboard />

        </Box>

        <Main open={open}>
          <DrawerHeader />

        </Main>

      </Box>
      <Footer></Footer>
    </>
  );
}
export default AdminDashboard;
