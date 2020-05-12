import * as actionTypes from 'actions/actionTypes';

const initialState = {
  products: [
    {
      id: '1',
      name: 'Masło',
      category: 'Nabiał',
      quantity: 3,
      minQuantity: 1,
    },
    {
      id: '2',
      name: 'Chleb',
      category: 'Pieczywo',
      quantity: 1,
      minQuantity: 2,
    },
    {
      id: '3',
      name: 'Mleko',
      category: 'Nabiał',
      quantity: 2,
      minQuantity: 2,
    },
    {
      id: '4',
      name: 'Wędlina',
      category: 'Mięso',
      quantity: 3,
      minQuantity: 1,
    },
    {
      id: '5',
      name: 'Ser',
      category: 'Nabiał',
      quantity: 1,
      minQuantity: 2,
    },
    {
      id: '6',
      name: 'Pasta',
      category: 'Higiena',
      quantity: 2,
      minQuantity: 2,
    },
    {
      id: '7',
      name: 'Masło',
      category: 'Nabiał',
      quantity: 3,
      minQuantity: 1,
    },
    {
      id: '8',
      name: 'Chleb',
      category: 'Pieczywo',
      quantity: 1,
      minQuantity: 2,
    },
    {
      id: '9',
      name: 'Mleko',
      category: 'Nabiał',
      quantity: 2,
      minQuantity: 2,
    },
    {
      id: '10',
      name: 'Wędlina',
      category: 'Mięso',
      quantity: 3,
      minQuantity: 1,
    },
    {
      id: '11',
      name: 'Ser',
      category: 'Nabiał',
      quantity: 1,
      minQuantity: 2,
    },
    {
      id: '12',
      name: 'Pasta',
      category: 'Higiena',
      quantity: 2,
      minQuantity: 2,
    },
  ],
};

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
        products: [...state.products, action.payload.item],
      };
    case actionTypes.EDIT_ITEM:
      return {
        ...state,
        products: [
          ...state.products.map((item) => {
            if (item.id === action.payload.id) {
              item = action.payload.itemContent;

              return item;
            }
            return item;
          }),
        ],
      };
    case actionTypes.CHANGE_ITEM_QUANTITY:
      return {
        ...state,
        products: [...state.products.map((item) => {
          if(item.id === action.payload.id){
            item.quantity = action.payload.itemQuantity;
            return item;
          }
          return item;
        })],
      };
    default:
      return state;
  }
};

export default rootReducer;
