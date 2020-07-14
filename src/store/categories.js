// STATE
const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics' , description:'phones, computers, cars' },
    { name: 'food', displayName: 'Food' , description:'fruits, veggies, meat' },
    { name: 'clothing', displayName: 'Clothing', description:'tops, pants, dresses' },
  ],
  activeCategory: 'none',
};


// REDUCER
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  case 'SHOW':
    return { categories:state.categories , activeCategory:payload } ;
  
  default:
    return state;
  }
};
   
  
// ACTIONS
export const showProducts = (category) => {
  return {
    type: 'SHOW',
    payload: category,
  };
};
    
  