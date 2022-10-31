import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import {  Divider, Link } from "@mui/material"


import { Nav } from '../Nav/index';
import { DrawerStyleNav } from './style';
import { useContext } from 'react';
import { theme } from '../../styles/theme';

import { darken } from "polished"

import { LunchDining } from "@mui/icons-material/"

const drawerWidth = 200;


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [ mobileOpen, setMobileOpen ] = React.useState(false);
  // const { handleSignOut } = useContext(Context)


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List sx={{height: '100%', margin: '0px', bgcolor: '#6149DB'}}>
        
          <ListItem disablePadding>
                <Nav display='block'/>
          </ListItem>
        
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <AppBar
          position="absolute"
          component="span"
          sx={{width: '80px', marginTop:'25px', left:"0", bgcolor: "inherit", boxShadow: '0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)'}}

        >
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'block'}}}

            >
              <LunchDining color='primary' fontSize='large'/>
            </IconButton>
    
        </AppBar>
        <DrawerStyleNav>

          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, bgcolor: 'red'}}
            aria-label="mailbox folders"
            className="navbar-box"

          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}    
            >
              {drawer}
            </Drawer>
          </Box>

        </DrawerStyleNav>
        
        
      </Box>
  );
}