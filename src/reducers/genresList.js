export default (state = {}, action) => {
  switch (action.type) {
    case 'GENRES_LIST':
      return { ...action.payload, ...state };
    case 'UPDATE_SELECTED':
      const { genre } = action.payload;
      const item = state[genre];
      item.checked = !item.checked;
      return { ...state, [genre]: item }
    default: 
      return state;
  }
}