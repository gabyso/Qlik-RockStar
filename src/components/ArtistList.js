import React from 'react';
import ArtistCard from './ArtistCard';
import SimpleBarReact from 'simplebar-react';
import { connect } from 'react-redux';

class ArtistList extends React.Component {

  renderList = () => {
    const { selected, artists, inputSearch } = this.props;
    let ids = [];

    Object.keys(selected).forEach(id => {
      const artist = artists[id];
      const isIncluded = [artist.name, ...artist.greatest_hits].find(str => str.startsWith(inputSearch));

      isIncluded && ids.push(id);
    });
    
    return ids.map(id => {
      return <ArtistCard 
        key={id}
        artist={artists[id]}
      />;
    });    
  }
  
  render(){
    return (
      <div id="artist-list">
        <h1>Artist List</h1>
        <SimpleBarReact style={{ maxHeight: 550 }}>
          {this.renderList()}
        </SimpleBarReact>
      </div>
    );
  }
}

const mapStateToProps = ({ selected, inputSearch, artists }) => {
  return {
    selected,
    inputSearch,
    artists
  };
};

export default connect(mapStateToProps)(ArtistList);