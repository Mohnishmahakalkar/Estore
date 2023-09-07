const initialState = {
  count: 0,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
