import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

class Navbar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Low Code Form Generator
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
