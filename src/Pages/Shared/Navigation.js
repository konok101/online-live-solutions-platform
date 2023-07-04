import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {  MenuItem } from '@mui/material';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
 

const drawerWidth = 240;





function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user,admin, teacher, logOut } = useContext(AuthContext);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Education Live solutions chk
      </Typography>
      <Divider />
      <List>

        <ListItem style={{ alignItems: 'center' }} >

          <MenuItem
          // onClick={handleCloseNavMenu}
          >
            <Box style={{ textAlign: "center", paddingLeft: '25%' }}>
               <Link href="/" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'green', }}>Home </Button></Link><br />  
              <Link href="/about"><Button color="inherit" sx={{ color: 'green' }}> About <acronym title=""></acronym></Button></Link><br />
              <Link href="/contact"><Button color="inherit" sx={{ color: 'green' }}>Contact </Button></Link><br />
              <Link href="/dashboard"><Button color="inherit" sx={{ color: 'green' }}>Dashboard</Button></Link><br />
              {admin &&
              <Link to="/adminDashboard" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Admin</Button></Link>
              }

              {
                teacher && 
                <Link to="/teacherDashboard" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Teacher</Button></Link>

              }
              {
                user?.email ?

              <Button onClick={logOut} className='buttonHover' color="inherit" sx={{ color: 'black' }}> 
                   <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={user?.photoURL} />
      </StyledBadge>
                    
               </Button>  :  
                    <Link to="/login" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Login</Button></Link>
              }
            </Box>
          </MenuItem>
        </ListItem>

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  const appBarStyle = {
    background: 'linear-gradient(to right,rgb(101,96,210),rgb(96,247,227))'
  }



  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
    
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={appBarStyle}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1,  display: { xs: 'none', sm: 'block' } }}
          >
            Educational Live solution Platform
            
          </Typography>


          <Button
            onClick={handleDrawerToggle}
            sx={{ my: 2 }}
          >


            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

              <Link to="/" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Home </Button></Link>
              <Link to="/about" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>About </Button></Link>
              <Link to="/contact" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Contact</Button></Link>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Dashboard</Button></Link>

              <Link to="/course" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Course</Button></Link>

              {admin &&
              <Link to="/adminDashboard" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Admin</Button></Link>
              }

              {
                teacher && 
                <Link to="/teacherDashboard" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Teacher</Button></Link>

              }





             {
                user?.email ?

              <Button onClick={logOut} className='buttonHover' color="inherit" sx={{ color: 'black' }}> 
                   <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={user?.photoURL} />
      </StyledBadge>
                    
               </Button>  :  
                    <Link to="/login" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Login</Button></Link>
              }

            </Box>
          </Button>

        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}


          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>

      </Box>
    </Box>
  );
};

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;