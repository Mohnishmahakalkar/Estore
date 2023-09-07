export const increment = () => {
  return {
    type: 'ADD_ITEM',
  };
};

export const decrement = () => {
  return {
    type: 'REMOVE_ITEM',
  };
};
