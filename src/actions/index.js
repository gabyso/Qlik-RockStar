import { getArtists } from "../apis/attunityAPI";

export const getArtistsList = () => async dispatch => {
  const response = await getArtists();
  if(!response.error){
    const artists = response.reduce((obj, item) => { 
      obj[item['id']] = item; 
      return obj;
    }, {});
    
    // let genres = {};

    // response.forEach(artist => {
    //   artist.genres.forEach(genre => {
    //     genres[genre] ? genres[genre].ids.push(artist.id) : genres[genre] = { ids: [artist.id], checked: false };
    //   });
    // });

    dispatch({ type: 'ARTISTS_LIST', payload: artists});
    // dispatch({ type: 'GENRES_LIST', payload: genres});
    dispatch({ type: 'ERROR', payload: null});
  }
  else dispatch({ type: 'ERROR', payload: response.error});
};

// export const updateList = artists => {
//   return { type: 'SELECT_ARTISTS', payload: artists };
// };

// export const toggleGenre = genre => {
//   return { type: 'TOGGLE_GENRE', payload: genre };
// };

export const changeInput = input => {
  return { type: 'INPUT_SEARCH', payload: input };
};

export const updateList = (selected) => {
  return { type: 'UPDATE_SELECTED', payload: selected };
};