import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { getArtistsList } from '../actions';
import ArtistList from './ArtistList';
import ErrorModal from './ErrorModal';
import { apiInterval } from '../services/timeFunctions';

class App extends React.Component {
  componentDidMount() {
    this.props.getArtistsList();
    this.timer = setInterval(() => {console.log('ok');this.props.getArtistsList()}, apiInterval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { errorMessage } = this.props;
    return (
      <div>
        <Header />
        <div id="content">
          <Sidebar />
          <ArtistList />
        </div>
        {errorMessage && <ErrorModal errorMessage={errorMessage}/>}
      </div>
    );
  } 
}

const mapStateToProps = ({ errorMessage }) => {
  return {
    errorMessage
  };
};

export default connect(mapStateToProps, { getArtistsList })(App);