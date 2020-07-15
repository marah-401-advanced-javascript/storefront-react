//////// ACTIONS /////////
import superagent from 'superagent';

// let api = 'https://api-marah.herokuapp.com';
const api = 'https://rowaid-server.herokuapp.com/api/v1';

export const handelCategory = (name) => ({
  type: 'UPDATE ACTIVE CATEGORY',
  payload: name,
});

export const handelProduct = (name) => ({
  type: 'UPDATE PRODUCTS',
  payload: name,
});

export const removeCart = (name) => ({
  type: 'REMOVE PRODUCT',
  payload: name,
});

export const getRemoteData = function () {
  return (dispatch) => {
    return superagent
      .get(api + '/categories')
      .set('Content-Type', 'application/json')
      .then((response) => {
        dispatch(getCategory({ results: response.body }));
      });
  };
};
export const getRemoteProduct = function () {
  return (dispatch) => {
    return superagent
      .get(api + '/products')
      .set('Content-Type', 'application/json')
      .then((response) => {
        dispatch(getProducts({ results: response.body }));
      });
  };
};
export const putRemoteProduct = function (name, _id, stock) {
  return (dispatch) => {
    return superagent
      .put(api + '/products/' + _id)
      .send({ inStock: stock - 1 })
      .set('Content-Type', 'application/json')
      .then((response) => {
        console.log(_id, stock, name);
        dispatch(addToCart(name, _id, stock));
      })
      .catch(console.log);
  };
};
export const deleteRemoteProduct = function (name, _id, stock) {
  return (dispatch) => {
    console.log(_id, stock, name);
    return superagent
      .put(api + '/products/' + _id)
      .send({ inStock: stock + 1 })
      .set('Content-Type', 'application/json')
      .then((response) => {
        dispatch(removeCart(name, _id, stock));
      })
      .catch(console.log);
  };
};

export const getCategory = (response) => ({
  type: 'ADD GETOGRY',
  payload: response,
});
export const getProducts = (response) => ({
  type: 'ADD PRODUCTS',
  payload: response,
});

export const addToCart = (name, _id, stock) => ({
  type: 'ADD PRODUCT',
  payload: { name, _id, stock },
});