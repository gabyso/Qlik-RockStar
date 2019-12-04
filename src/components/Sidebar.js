import React from 'react';
import { connect } from 'react-redux';
import SimpleBar from 'simplebar-react';
import { getArtistsList, updateLists } from '../actions';

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.getArtistsList();
  }

  onClick = genre => {
    const { genresList } = this.props;
    let filteredIds = {};
    const filterdGenres = Object.keys(genresList).filter(key => { 
      if(key === genre) return !genresList[key].checked;
      return genresList[key].checked;
    });  

    filterdGenres.forEach(checkedGenre => {
      this.props.genresList[checkedGenre].ids.forEach(id => {
        filteredIds[id] = id;
      });
    });
    
    this.props.updateLists(filteredIds, genre);
  }

  renderList = () => {
    const genres = Object.keys(this.props.genresList);

    return genres.map(genre => {
      const isChecked = this.props.genresList[genre].checked;
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

const mapStateToProps = ({ genresList }) => {
  return { genresList }
}

export default connect(mapStateToProps, { getArtistsList, updateLists })(Sidebar);