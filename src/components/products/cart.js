import React from 'react';
import { connect } from 'react-redux';
import { deleteRemoteProduct } from '../../store/actions';


function Cart(props) {

  return (
    <>
      {props.cart.carts.map(cartItem => {
        return (
          <>
            <p >{cartItem.name}: x{cartItem.quantity}</p>
            <button onClick={() => props.removeCart(cartItem.name, cartItem._id, cartItem.stock)}>X</button>
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

const mapDispatchToProps = (dispatch) => ({
  removeCart: (name, id, stock) =>
    dispatch(deleteRemoteProduct(name, id, stock)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);