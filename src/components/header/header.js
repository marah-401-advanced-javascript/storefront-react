
import React from 'react';
import { connect } from 'react-redux';
import {CssBaseline,Button,AppBar,Toolbar} from '@material-ui/core'


function Header(props) {

  return (
    <>
      <AppBar position="sticky" 
        style={{ textAlign:'center',backgroundColor:'#375863', fontSize: '3em',justifyContent: 'center',
          fontFamily: 'Lucida Console", Courier, monospace', letterSpacing: '0.1vw' , marginBottom: '2vh'}}>

        <Toolbar style={{ display:'flex',justifyContent:'center' }}>
          <CssBaseline />
        Store Front App
          <Button color="inherit" >Cart ({props.cart.totalCartItems})</Button>

        </Toolbar>

      </AppBar>
     
    </>
  );
}


const mapStateToProps = (state) => {
  return { products: state.products, categories: state.categories, cart: state.cart };
};
export default connect(mapStateToProps)(Header);

// export default Header;
