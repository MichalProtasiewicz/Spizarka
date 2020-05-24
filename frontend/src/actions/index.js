import axios from 'axios';
import * as actionTypes from 'actions/actionTypes';

export const removeItem = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_ITEM_REQUEST });
  axios
    .delete(`http://127.0.0.1:8000/api/products/${id}`)
    .then(() => {
      dispatch({
        type: actionTypes.REMOVE_ITEM_SUCCESS,
        payload: {
          id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: actionTypes.REMOVE_ITEM_FAILURE });
    });
};

export const addItem = (itemContent) => (dispatch, getState) => {
  dispatch({ type: actionTypes.ADD_ITEM_REQUEST });

  return axios
    .post(`http://127.0.0.1:8000/api/products/`, {
      userID: getState().userID,
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({ type: actionTypes.ADD_ITEM_SUCCESS, payload: { data } });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: actionTypes.ADD_ITEM_FAILURE });
    });
};

export const editItem = (id, itemContent) => (dispatch, getState) => {
  dispatch({ type: actionTypes.EDIT_ITEM_REQUEST });

  return axios
    .put(`http://127.0.0.1:8000/api/products/${id}`, {
      userID: getState().userID,
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({ type: actionTypes.EDIT_ITEM_SUCCESS, payload: { data } });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: actionTypes.EDIT_ITEM_FAILURE });
    });
};

export const changeItemQuantity = (id, itemQuantity) => {
  return {
    type: actionTypes.CHANGE_ITEM_QUANTITY,
    payload: {
      id,
      itemQuantity,
    },
  };
};

export const authenticate = (email, password) => (dispatch) => {
  dispatch({ type: actionTypes.AUTH_REQUEST });

  return axios
    .post('http://127.0.0.1:8000/api/user/login', {
      email,
      password,
    })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: actionTypes.AUTH_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: actionTypes.AUTH_FAILURE });
    });
};

export const fetchItems = () => (dispatch, getState) => {
  dispatch({ type: actionTypes.FETCH_REQUEST });

  return axios
    .get('http://127.0.0.1:8000/api/products', {
      params: {
        userID: getState().userID,
      },
    })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: actionTypes.FETCH_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: actionTypes.FETCH_FAILURE });
    });
};
