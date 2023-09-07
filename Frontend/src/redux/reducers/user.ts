const initialState = {
  user: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, user: action.payload};
    case 'GET_USER':
      return {user: state?.user};
    default:
      return state;
  }
};
