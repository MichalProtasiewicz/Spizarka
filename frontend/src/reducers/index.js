import * as actionTypes from 'constants/actionTypes';

const initialState = {
  products: [],
  categories: [],
  auth: {
    token: null,
    error: null,
    loading: false,
  },
};

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false,
    userID: action.payload.data.id,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
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
            if (item.id === action.payload.item.id) {
              item = action.payload.item;
              return item;
            }
            return item;
          }),
        ],
      };
    case actionTypes.CHANGE_ITEM_QUANTITY:
      return {
        ...state,
        products: [
          ...state.products.map((item) => {
            if (item.id === action.payload.id) {
              item.quantity = action.payload.itemQuantity;
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
