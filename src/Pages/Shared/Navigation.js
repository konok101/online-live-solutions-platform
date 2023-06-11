import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, MenuItem } from '@mui/material';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const drawerWidth = 240;





function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user,admin, teacher, logOut } = useContext(AuthContext);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Education Live solutions
      </Typography>
      <Divider />
      <List>

        <ListItem style={{ alignItems: 'center' }} >

          <MenuItem
          // onClick={handleCloseNavMenu}
          >
            <Box style={{ textAlign: "center", paddingLeft: '25%' }}>
              <Link href="/" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'green', }}>Home</Button></Link><br />
              <Link href="/about"><Button color="inherit" sx={{ color: 'green' }}>About</Button></Link><br />
              <Link href="/contact"><Button color="inherit" sx={{ color: 'green' }}>Contact</Button></Link><br />
              <Link href="/dashboard"><Button color="inherit" sx={{ color: 'green' }}>Dashboard</Button></Link><br />
              <Link href="/adminDashboard" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Admin</Button></Link>
              <Link href="/teacherDashboard" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Teacher</Button></Link>
              {user?.email ?
                <Button onClick={logOut} className='buttonHover' color="inherit" sx={{ color: 'green' }}>Logout</Button>
                :
                <Link href="/login" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'green' }}>Login</Button></Link>
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
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Educational Live solution
            
          </Typography>


          <Button
            onClick={handleDrawerToggle}
            sx={{ my: 2 }}
          >


            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

              <Link href="/" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Home</Button></Link>
              <Link href="/about" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>About</Button></Link>
              <Link href="/contact" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Contact</Button></Link>
              <Link href="/dashboard" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Dashboard</Button></Link>

              <Link href="/course" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Course</Button></Link>

              {admin &&
              <Link href="/adminDashboard" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Admin</Button></Link>
              }

              {
                teacher && 
                <Link href="/teacherDashboard" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Teacher</Button></Link>

              }




              
            

             {
                user?.email ?
                    <Button onClick={logOut} className='buttonHover' color="inherit" sx={{ color: 'black' }}>Logout</Button>
                  :  
                    <Link href="/login" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Login</Button></Link>
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