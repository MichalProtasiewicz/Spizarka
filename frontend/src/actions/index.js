import axios from 'axios';
import * as actionTypes from 'constants/actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_REQUEST,
  };
};

export const authSuccess = (token, userID) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userID,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAILURE,
    error,
  };
};

export const registerSuccess = (succesfull) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    succesfull,
  };
};

export const registerFail = (error) => {
  return {
    type: actionTypes.REGISTER_FAILURE,
    error,
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
    .post('http://127.0.0.1:8000/authenticate/', {
      username,
      password,
    })
    .then((payload) => {
      const userID = payload.data.id;
      const userToken = payload.data.token;
      const expirationDate = new Date(Date.now() + 3600 * 1000 * 24);
      localStorage.setItem('userID', userID);
      localStorage.setItem('token', userToken);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(authSuccess(userToken, userID));
      dispatch(checkAuthTimeout(3600));
    })
    .catch((error) => {
      console.log(error);
      dispatch(authFail(error));
    });
};

export const authSignup = (username, email, password1, password2) => (dispatch) => {
  return axios
    .post('http://127.0.0.1:8000/rest-auth/registration/', {
      username,
      email,
      password1,
      password2,
    })
    .then((payload) => {
      dispatch(registerSuccess(payload.data.succesfull));
    })
    .catch((error) => {
      console.log(error);
      dispatch(registerFail(error));
    });
};

export const authCheckState = () => (dispatch) => {
  const token = localStorage.getItem('token');
  const userID = localStorage.getItem('userID');
  if (token === undefined) {
    dispatch(logout());
  } else {
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    if (expirationDate <= new Date()) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token, userID));
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
    .catch((error) => {
      console.log(error);
      dispatch({ type: actionTypes.REMOVE_ITEM_FAILURE });
    });
};

export const addItem = (itemContent) => (dispatch, getState) => {
  dispatch({ type: actionTypes.ADD_ITEM_REQUEST });
  return axios
    .post(`http://127.0.0.1:8000/api/products/`, {
      owner: getState().auth.userID,
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({ type: actionTypes.ADD_ITEM_SUCCESS, payload: { data } });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: actionTypes.ADD_ITEM_FAILURE });
    });
};

export const editItem = (id, itemContent) => (dispatch, getState) => {
  dispatch({ type: actionTypes.EDIT_ITEM_REQUEST });
  return axios
    .put(`http://127.0.0.1:8000/api/products/${id}/`, {
      owner: getState().auth.userID,
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({ type: actionTypes.EDIT_ITEM_SUCCESS, payload: { data } });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: actionTypes.EDIT_ITEM_FAILURE });
    });
};

export const fetchItems = () => (dispatch, getState) => {
  dispatch({ type: actionTypes.FETCH_REQUEST });
  return axios
    .get('http://127.0.0.1:8000/api/products?owner=' + getState().auth.userID, {})
    .then((payload) => {
      dispatch({ type: actionTypes.FETCH_SUCCESS, payload });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: actionTypes.FETCH_FAILURE });
    });
};

export const fetchCategories = () => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_CATEGORIES_REQUEST });

  return axios
    .get('http://127.0.0.1:8000/api/category')
    .then((payload) => {
      dispatch({ type: actionTypes.FETCH_CATEGORIES_SUCCESS, payload });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: actionTypes.FETCH_CATEGORIES_FAILURE });
    });
};
