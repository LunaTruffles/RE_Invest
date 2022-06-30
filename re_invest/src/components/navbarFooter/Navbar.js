import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import  { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (

    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="absolute">
    <Box     
    display="flex" 
    alignItems="center"
    justifyContent="center"
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ height: 30 }}
        >
          <NavLink to= "/">
          <img 
          src="https://i.ibb.co/DYRdpFk/RE-ILogo.png" alt="RE-ILogo" 
          border="0" 
          height={30}
          />
          </NavLink>
        </IconButton>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <NavLink to= "/">
            <Button variant="contained" size="small">Home</Button>
          </NavLink>
          <NavLink to= "/deals">
            <Button variant="contained" size="small">Deals</Button>
          </NavLink>
          <NavLink to= "/donate">
            <Button variant="contained" size="small">Donate</Button>
          </NavLink>
        </ButtonGroup>
      </Toolbar>
      </Box>
    </AppBar>
  </Box>
  
  )
}
