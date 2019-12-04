import React from 'react';
import { connect } from 'react-redux';
import SimpleBar from 'simplebar-react';
import { getArtistsList, updateList } from '../actions';

class Sidebar extends React.Component {
  state = { genresList: {} };

  componentDidMount() {
    this.props.getArtistsList();
  }

  componentWillReceiveProps(nextProps) { 
    // Updates when the list of Artists is updated after API response
    const { artists } = nextProps; 
    const { genresList } = this.state;
    let newGenresList = {};
    let hasCheanged = false;
    
    Object.values(artists).forEach(artist => {
      artist.genres.forEach(genre => {
        if(!newGenresList[genre]) {
          newGenresList[genre] = genresList[genre];
          if(!genresList[genre]) hasCheanged = true;
        }
      });
    });

    // Renders only if the list has changed
    if(hasCheanged || (newGenresList.length === genresList.length)){
      this.setState({ genresList: newGenresList });
    }

    const filterdGenres = Object.keys(newGenresList).filter(key => newGenresList[key]);
    this.updateSelectedArtists(filterdGenres, nextProps.artists);
  }

  updateSelectedArtists = (genres, artists = null) => {
    // filteredIsa will hold all id's ganres contained in the filteredGanres
    let filteredIds = {};
    if(genres.length) {
      genres.forEach(selectedGenre => {
        Object.values(this.props.artists).forEach(artist => {
          if(artist.genres.find(artGenre => artGenre === selectedGenre)){
            filteredIds[artist.id] = artist;
          }
        });
      });
    }
    else {
      filteredIds = artists || this.props.artists;
    }
    
    this.props.updateList(filteredIds);
  }

  onClick = genre => {
    const { genresList } = this.state;

    const filterdGenres = Object.keys(genresList).filter(key => { 
      if(key === genre) return !genresList[key];
      return genresList[key];
    });  

    this.updateSelectedArtists(filterdGenres);

    this.setState({ genresList: { ...genresList, [genre]: !genresList[genre] } })
  }

  renderList = () => {
    const genres = Object.keys(this.state.genresList);

    return genres.map(genre => {
      const isChecked = this.state.genresList[genre] || false;
      return (
        <li key={genre} onClick={() => this.onClick(genre)}>
          <input type="checkbox" readOnly checked={isChecked}/>
          <span>{genre}</span>
        </li>
      );
    });
  }

  render() {
    return (
      <nav id="sidebar">
        <h1>Genres</h1>
        <ul>
          <SimpleBar style={{ maxHeight: 600 }}>
           {this.renderList()}
          </SimpleBar>  
        </ul>
      </nav>
    );
  }
};

const mapStateToProps = ({ artists }) => {
  return { artists }
}

export default connect(mapStateToProps, { getArtistsList, updateList })(Sidebar);