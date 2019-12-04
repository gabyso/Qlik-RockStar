import { combineReducers } from 'redux';
import artistsList from './artistsList';
import selectedArtists from './selectedArtists';
import errorMessage from './errorMessage';
import inputSearch from './inputSearch';

export default combineReducers({ 
  artists: artistsList,
  selected: selectedArtists,
  errorMessage,
  inputSearch
});