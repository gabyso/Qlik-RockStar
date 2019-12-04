export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED':
      return action.payload.selected;
    default: 
      return state;
  }
}