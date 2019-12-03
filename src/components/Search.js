import React from 'react';
import { connect } from 'react-redux';
import { updateList } from '../actions';

class Search extends React.Component {
  componentDidUpdate() {
    this.filterList();
  }

  artistIfInclude = id => {
    const input = document.getElementById('search').value;

    const artist = this.props.artists[id];
    const { name, greatest_hits } = artist;

    if(name.startsWith(input)) return artist;

    for (let i = 0; i < greatest_hits.length; i++) {
      if(greatest_hits[i].startsWith(input)) return artist;
    }

    return null;
  }

  filterList = () => {
    const { selectedGenres, genresList } = this.props;

    let selectedArtists = {};

    for(let i = 0; i < selectedGenres.length; i++) {
      const ids = genresList[selectedGenres[i]];
      for(let j = 0; j < ids.length; j++) {
        if(!selectedArtists[ids[j]]) {
          const artist = this.artistIfInclude(ids[j]);
          if(artist) selectedArtists[ids[j]] = artist;
        }
      }
    }

    this.props.updateList(selectedArtists); 
  }

  render() {
    return (
      <input id="search" type="text" onChange={() => this.filterList()}/>
    );
  }
};

const mapStateToProps = ({ selectedGenres, genresList, artists }) => {
  return {
    selectedGenres,
    genresList,
    artists
  };
};

export default connect(mapStateToProps, { updateList })(Search);