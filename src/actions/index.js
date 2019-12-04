import { getArtists } from "../apis/attunityAPI";

export const getArtistsList = () => async dispatch => {
  const response = await getArtists();
  if(!response.error){
    const artists = response.reduce((obj, item) => { 
      obj[item['id']] = item; 
      return obj;
    }, {});

    dispatch({ type: 'ARTISTS_LIST', payload: artists});
    dispatch({ type: 'ERROR', payload: null});
  }
  else dispatch({ type: 'ERROR', payload: response.error});
};

export const changeInput = input => {
  return { type: 'INPUT_SEARCH', payload: input };
};

export const updateList = (selected) => {
  return { type: 'UPDATE_SELECTED', payload: selected };
};