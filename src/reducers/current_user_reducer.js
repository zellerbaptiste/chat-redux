const currentUserReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.payload;
    default:
      return state;
  }
};

export default currentUserReducer;
