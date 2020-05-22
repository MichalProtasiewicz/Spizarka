import axios from 'axios';
import * as actionTypes from 'actions/actionTypes';

export const removeItem = (id) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: {
      id,
    },
  };
};

export const addItem = (itemContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: actionTypes.ADD_ITEM,
    payload: {
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const editItem = (itemContent) => {
  return {
    type: actionTypes.EDIT_ITEM,
    payload: {
      item: {
        ...itemContent,
      },
    },
  };
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
    .then((payload) => dispatch({ type: actionTypes.AUTH_SUCCESS, payload }))
    .catch((err) => {
      console.log(err);
      dispatch({ type: actionTypes.AUTH_FAILURE });
    });
};
