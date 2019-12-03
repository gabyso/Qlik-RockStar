import { combineReducers } from 'redux';
import artistsList from './artistsList';
import selectedArtists from './selectedArtists';
import genresList from './genresList';
import selectedGenres from './selectedGenres';
import errorMessage from './errorMessage';

export default combineReducers({ 
  artists: artistsList,
  selected: selectedArtists,
  genresList,
  selectedGenres,
  errorMessage
});