export default (state = {}, action) => {
  switch (action.type) {
    case 'GENRES_LIST':
      return action.payload;
    default: 
      return state;
  }
}