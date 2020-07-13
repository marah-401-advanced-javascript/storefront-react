
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

function Header(props) {
  return (
    <AppBar position="static" 
      style={{ textAlign:'center',backgroundColor:'#375863', fontSize: '3em',justifyContent: 'center',
        fontFamily: 'Lucida Console", Courier, monospace', letterSpacing: '0.1vw' , marginBottom: '2vh'}}>

      <Toolbar style={{ display:'flex',justifyContent:'center' }}>
        <CssBaseline />
        Store Front App
      </Toolbar>

    </AppBar>
  );
}

export default Header;
