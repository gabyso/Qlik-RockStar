import React from 'react';
import ArtistCard from './ArtistCard';
import SimpleBarReact from 'simplebar-react';
import { connect } from 'react-redux';
import { getIds } from '../services/filter';

class ArtistList extends React.Component {

  renderList = () => {
    const { selected, artists, inputSearch } = this.props;
    let ids = getIds(selected, artists, inputSearch);
    
    return ids.map(id => {
      return <ArtistCard 
        key={id}
        artist={artists[id]}
      />;
    });    
  }
  
  render(){
    return (
      <div id="artists">
        <h1>Artist List</h1>
        <SimpleBarReact style={{ maxHeight: 550 }}>
          <div className="artists-list">
            {this.renderList()}
          </div>
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