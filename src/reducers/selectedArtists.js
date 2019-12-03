export default (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_ARTISTS':
      return action.payload;
    default: 
      return state;
  }
}