import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './categories';
import products from './products';
import cart from './cart';

const rootReducer = combineReducers({ categories, products, cart });

const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();
