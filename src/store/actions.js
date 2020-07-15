//////// ACTIONS /////////
import superagent from 'superagent';

let api = 'https://api-marah.herokuapp.com';

//GET CATEGORIES
export const getCategories = () => dispatch => {
  return superagent.get(`${api}/categories`)
    .then(response => {
      dispatch(getAction(response.body));
    });
};


//GET PRODUCTS
export const getRemoteData = () => dispatch => {
  return superagent.get(`${api}/products`)
    .then(response => {
      dispatch(getAction(response.body));
    });
};


// PUT PRODUCTS
export const putRemoteData = ( data,id) => async dispatch => {
  return superagent.put(`${api}/products/${id}`)
    .send(data)
    .then(response => {
      dispatch(putAction(response));
    });
};

// DELETE PRODUCTS
export const deleteRemoteData = (id) => async dispatch => {
  let response = await (await superagent.delete(`${api}/products/${id}`));
  dispatch(deleteAction(response.body));
};

// POST PRODUCTS
export const postRemoteData = (data) => async dispatch => {
  data.quantity = 1;
  return superagent.post(`${api}/products`)
    .send(data)
    // .set('X-API-Key', 'foobar')
    // .set('Accept', 'application/json')
    .then(response => {
      dispatch(postAction(response.body));
    });

};



export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};

export const putAction = payload => {
  return {
    type: 'PUT',
    payload: payload,
  };
};

export const postAction = payload => {
  return {
    type: 'POST',
    payload: payload,
  };
};

export const deleteAction = payload => {
  return {
    type: 'DELETE',
    payload: payload,
  };
};