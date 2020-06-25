import * as actionTypes from 'constants/actionTypes';

const initialState = {
  products: [],
  categories: [],
  auth: {
    userID: null,
    token: null,
    error: null,
    loading: false,
  },
  register: {
    succesfull: false,
    error: null,
  }
};

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

const authStart = (state) => {
  return updateObject(state, {
    auth: { error: null, loading: true, userID: null, token: null },
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    auth: { error: null, loading: false, userID: action.userID, token: action.token },
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    auth: { error: action.error, loading: false, userID: null, token: null },
  });
};

const authLogout = (state) => {
  return updateObject(state, {
    auth: { error: null, loading: false, userID: null, token: null },
  });
};

const registerSuccess = (state) => {
  return updateObject(state, {
    register: { error: null, succesfull: true}
  })
}
const registerError = (state, action) => {
  return updateObject(state, {
    register: { error: action.error, succesfull: true },
  });
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_REQUEST:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAILURE:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.REGISTER_SUCCESS:
      return registerSuccess(state);
    case actionTypes.REGISTER_FAILURE:
      return registerError(state, action);
    case actionTypes.FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: [...action.payload.data],
      };
    case actionTypes.FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: [...action.payload.data],
      };
    case actionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload.data],
      };
    case actionTypes.REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        products: [...state.products.filter((item) => item.id !== action.payload.id)],
      };
    case actionTypes.EDIT_ITEM_SUCCESS:
      return {
        ...state,
        products: [
          ...state.products.map((item) => {
            if (item.id === action.payload.data.id) {
              item = action.payload.data;

              return item;
            }
            return item;
          }),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
