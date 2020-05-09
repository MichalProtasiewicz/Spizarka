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
