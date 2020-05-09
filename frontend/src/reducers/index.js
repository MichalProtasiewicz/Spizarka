import * as actionTypes from 'actions/actionTypes';

const initialState = {
  products: [
  {
    id: 1,
    name: 'Masło',
    quantity: 3,
    minQuantity: 1,
  },
  {
    id: 2,
    name: 'Chleb',
    quantity: 1,
    minQuantity: 2,
  },
  {
    id: 3,
    name: 'Mleko',
    quantity: 2,
    minQuantity: 2,
  },
  {
    id: 4,
    name: 'Wędlina',
    quantity: 3,
    minQuantity: 1,
  },
  {
    id: 5,
    name: 'Ser',
    quantity: 1,
    minQuantity: 2,
  },
  {
    id: 6,
    name: 'Pasta',
    quantity: 2,
    minQuantity: 2,
  },
  {
    id: 7,
    name: 'Masło',
    quantity: 3,
    minQuantity: 1,
  },
  {
    id: 8,
    name: 'Chleb',
    quantity: 1,
    minQuantity: 2,
  },
  {
    id: 9,
    name: 'Mleko',
    quantity: 2,
    minQuantity: 2,
  },
  {
    id: 10,
    name: 'Wędlina',
    quantity: 3,
    minQuantity: 1,
  },
  {
    id: 11,
    name: 'Ser',
    quantity: 1,
    minQuantity: 2,
  },
  {
    id: 12,
    name: 'Pasta',
    quantity: 2,
    minQuantity: 2,
  },
]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        products: [...state.products.filter((item) => item.id !== action.payload.id)],
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        products: [...state.products, action.payload.itemContent],
      };
    default:
      return state;
  }
};

export default rootReducer;
