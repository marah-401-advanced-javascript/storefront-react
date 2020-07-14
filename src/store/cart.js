//STATE
const initialState ={
  cartItems: [],
  totalCartItems: 0,
};


//REDUCERS
export default (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {

  case 'ADD':
    let existedItem= state.cartItems.find(item=> item.name === payload.name);
    if(existedItem){
      existedItem.quantity += 1; 
      return{...state, totalCartItems: ++state.totalCartItems};
    }else{
      payload.quantity = 1;
      return{...state, cartItems: [...state.cartItems, payload], totalCartItems: ++state.totalCartItems};
    }

  case 'REMOVE':
    let removed =state.cartItems.find(item=> item.name === payload.name);
    if(removed.quantity > 1){
      removed.quantity =  removed.quantity-1 ; 
      return{...state, cartItems: [...state.cartItems], totalCartItems: state.totalCartItems-1};
    }else{
      let cartItems = state.cartItems.splice(removed,1);
      return{...state, cartItems: state.cartItems, totalCartItems: --state.totalCartItems};
    }

  default:
    return state;
  }
};


//ACTIONS
export const addToCart = (product) => {
  return {
    type: 'ADD',
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE',
    payload: product,
  };
};
      
