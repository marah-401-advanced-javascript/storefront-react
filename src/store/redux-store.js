import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actions from './actions';

const rootReducer = combineReducers({ actions });

const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();
