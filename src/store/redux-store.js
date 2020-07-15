import { createStore, combineReducers,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import categories from './categories';
import products from './products';
import cart from './cart';
import data from './reducer';

const reducers = combineReducers({ categories, products, cart , data});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
};

export default store();
