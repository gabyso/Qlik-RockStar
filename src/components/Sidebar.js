import React from 'react';
import { connect } from 'react-redux';
import SimpleBar from 'simplebar-react';
import { getArtistsList, toggleGenre } from '../actions';

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.getArtistsList();
  }

  onClick = genre => {
    this.props.toggleGenre(genre);
  }

  renderList = () => {
    const genres = Object.keys(this.props.genresList);

    return genres.map(genre => {
      const isChecked = this.props.selectedGenres.includes(genre) ? true : false ;
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

const mapStateToProps = ({ genresList, selectedGenres }) => {
  return { genresList, selectedGenres }
}

export default connect(mapStateToProps, { getArtistsList, toggleGenre })(Sidebar);