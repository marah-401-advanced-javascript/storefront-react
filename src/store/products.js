// STATE
const initialState = [
  { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, description: '', inventory_count: 0,
    image:'https://lh3.googleusercontent.com/proxy/sVQhAsf0CQTG2DqgMg_ao_1a30cQJ_JcYWkPCcbXFm7eo5cwWn7OIN9w3LKbeqZ4GJ3Ibdhg-Vbkr4K-UQS7nbMC92DJ0G4a7rlkU_RV91WfWL29sJdU' },
  { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, description: '', inventory_count: 0,
    image:'https://pluspng.com/img-png/radio-hd-png-radio-picture-png-image-500.png' },
  { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, description: '', inventory_count: 0,
    image: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png' },
  { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, description: '', inventory_count: 0,
    image:'https://www.pngfind.com/pngs/m/14-143267_socks-png-background-image-sock-transparent-png.png' },
  { name: 'Apples', category: 'food', price: .99, inStock: 500, description: '', inventory_count: 0,
    image:'https://e1.pngegg.com/pngimages/23/306/png-clipart-new-s-two-red-apples-thumbnail.png' },
  { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, description: '', inventory_count: 0,
    image:'https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png' },
  { name: 'Bread', category: 'food', price: 2.39, inStock: 90, description: '', inventory_count: 0,
    image:'https://toppng.com/uploads/preview/bread-png-image-loaf-of-bread-11563103187ssm8yazedr.png' },
];



// REDUCERS
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  
  case 'SHOW':
    state = initialState;// to set the state to the initial each time the user change the category
    const products = state.filter(product => product.category === payload);
    return  products  ; 

  case 'ADD':
    return state.map(product => {
      return product.name === payload.name ? {...product, inStock: product.inStock - 1} : product;
    });
    
  case 'GET':
    return { results: payload };
    
  case 'PUT':
    return state;
    
  case 'POST':
    let addToCart = [...state.results,payload];
    return { results: addToCart };
    
  case 'DELETE':
    return state;   
  
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

export const addToCart = (product) => {
  return {
    type: 'ADD',
    payload: product,
  };
};
    
