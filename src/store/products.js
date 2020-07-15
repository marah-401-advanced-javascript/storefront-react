let initialState = {
  products: [],
  productsList: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  let productsList;
  let products;

  switch (type) {

  case 'UPDATE PRODUCTS':
    console.log('sdjflkdsjflk', type, payload);
    productsList = state.products.filter(
      (product) => product.category === payload,
    );
    return { ...state, productsList };
    
  case 'ADD PRODUCT':
    productsList = state.productsList.map((product) => {
      if (product.name === payload.name) {
        product.inStock--;
        return product;
      }
      return product;
    });
    return { ...state, productsList, products };
    
  case 'REMOVE PRODUCT':
    productsList = state.productsList.map((product) => {
      if (product.name === payload) {
        product.inStock++;
        return product;
      }
      return product;
    });
    return { ...state, productsList, products };
    
  case 'ADD PRODUCTS':
    return { ...state, products: payload.results.results };
    
  default:
    return state;
  }
};