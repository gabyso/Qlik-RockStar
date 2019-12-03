import React from 'react';
import ArtistCard from './ArtistCard';
import SimpleBarReact from 'simplebar-react';
import { connect } from 'react-redux';

class ArtistList extends React.Component {

  renderList = () => {
    
    const { selected, artists } = this.props;
    const ids = Object.keys(selected);
    
    return ids.map(id => {
      return <ArtistCard 
        key={id}
        photo={artists[id].image_url}
        name={artists[id].name}
        birth={artists[id].date_of_birth}
        genres={artists[id].genres.join(', ')}
        gratestHits={artists[id].greatest_hits}
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

const mapStateToProps = ({ selected, artists }) => {
  return {
    selected,
    artists
  };
};

export default connect(mapStateToProps)(ArtistList);