import * as actionTypes from 'actions/actionTypes';

const initialState = {
  products: [],
  categories: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data.id,
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
