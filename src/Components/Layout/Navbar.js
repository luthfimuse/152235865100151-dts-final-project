import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import FastfoodIcon from '@mui/icons-material/Fastfood';

const drawerWidth = 240;
const navItems = [];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ fontFamily: 'monospace', fontWeight: 700, my: 2 }}>
        ResepMasakanKu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <FastfoodIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
      
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
            sx = {
              {
                fontFamily: 'monospace', fontWeight: 700,
                flexGrow: 1,
                display: {
                  xs: 'none',
                  sm: 'block'
                }
              }
            }
          >
            ResepMasakanKu
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
            <Button href={`/`} sx={{ color: '#fff', pr:2 }}>
              Beranda
            </Button>
            <Button href={`/pencarian`} sx={{ color: '#fff' }}>
              Pencarian
            </Button>
            <Button href={`/request-resep`} sx={{ color: '#fff' }}>
              Request Resep
            </Button>
            <Button href={`/artikel`} sx={{ color: '#fff' }}>
              Artikel
            </Button>
            <Button href={`/login`} variant="contained" size="medium" sx={{ ml:3, mr:1 }}>
              <b>Login</b>
            </Button>
            <Button href={`/register`} variant="contained" size="medium" sx={{ mr:1 }}>
              <b>Register</b>
            </Button>

          </Box>
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
        <Toolbar />
        
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
