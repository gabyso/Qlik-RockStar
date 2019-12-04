import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import ArtistList from './ArtistList';
import ErrorModal from './ErrorModal';

class App extends React.Component {

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

export default connect(mapStateToProps)(App);