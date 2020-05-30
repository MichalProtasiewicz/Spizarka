import axios from 'axios';
import * as actionTypes from 'constants/actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_REQUEST,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
  };
};

export const authFail = (err) => {
  return {
    type: actionTypes.AUTH_FAILURE,
    err,
  };
};

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => (dispatch) => {
  setTimeout(() => {
    dispatch(logout());
  }, expirationTime * 1000);
};

export const authLogin = (username, password) => (dispatch) => {
  dispatch(authStart());

  return axios
    .post('http://127.0.0.1:8000/rest-auth/login/', {
      username,
      password,
    })
    .then((payload) => {
      console.log(payload);
      const token = payload.data.key;
      const expirationDate = new Date(Date.now() + 3600 * 1000 * 24);
      localStorage.setItem('token', token);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
    })
    .catch((err) => {
      console.log(err);
      dispatch(authFail(err));
    });
};

export const authSignup = (username, email, password1, password2) => (dispatch) => {
  dispatch(authStart());

  return axios
    .post('http://127.0.0.1:8000/rest-auth/registration/', {
      username,
      email,
      password1,
      password2,
    })
    .then((payload) => {
      console.log(payload);
      const token = payload.data.key;
      const expirationDate = new Date(new Date().getDate() + 1);
      localStorage.setItem('token', token);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
    })
    .catch((err) => {
      console.log(err);
      dispatch(authFail(err));
    });
};

export const authCheckState = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (token === undefined) {
    dispatch(logout());
  } else {
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    if (expirationDate <= new Date()) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    }
  }
};

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

export const fetchCategories = () => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_CATEGORIES_REQUEST });

  return axios
    .get('http://127.0.0.1:8000/api/category')
    .then((payload) => {
      console.log(payload);
      dispatch({ type: actionTypes.FETCH_CATEGORIES_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: actionTypes.FETCH_CATEGORIES_FAILURE });
    });
};
