import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/cart';


function Cart(props) {

  return (
    <>
      {props.cart.cartItems.map(cartItem => {
        return (
          <>
            <p >{cartItem.name}: x{cartItem.quantity}</p>
            <button onClick={() => props.removeFromCart(cartItem)}>X</button>
          </>
        );
      })
      }
    </>
  );
}


const mapStateToProps = (state) => {
  return {cart: state.cart};
};

const mapDispatchToProps = { removeFromCart };


export default connect(mapStateToProps, mapDispatchToProps)(Cart);