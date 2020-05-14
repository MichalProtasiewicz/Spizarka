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

export const editItem = ( itemContent) => {
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

