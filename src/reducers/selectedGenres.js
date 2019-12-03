export default (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_GENRE':
      const newState = state.includes(action.payload) ? state.filter(genre => genre !== action.payload) : [...state, action.payload];
      return newState;
    default: 
      return state;
  }
}