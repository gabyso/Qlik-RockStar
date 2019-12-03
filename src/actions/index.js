import { getArtists } from "../apis/attunityAPI";

export const getArtistsList = () => async dispatch => {
  const response = await getArtists();
  if(!response.error){
    const artists = response.reduce((obj, item) => { 
      obj[item['id']] = item; 
      return obj;
    }, {});
    
    let genres = {};

    for(let i = 0; i < response.length; i++) {
      const id = response[i].id;
      for(let j = 0; j < response[i].genres.length; j++) {
        const genre = response[i].genres[j];
        genres[genre] ? genres[genre].push(id) : genres[genre] = [id];
      }
    }

    dispatch({ type: 'ARTISTS_LIST', payload: artists});
    dispatch({ type: 'GENRES_LIST', payload: genres});
    dispatch({ type: 'ERROR', payload: null});
  }
  else dispatch({ type: 'ERROR', payload: response.error});
};

export const updateList = artists => {
  return { type: 'SELECT_ARTISTS', payload: artists };
};

export const toggleGenre = genre => {
  return { type: 'TOGGLE_GENRE', payload: genre };
};

export const closeError = () => {
  return { type: 'ERROR', payload: null};
}