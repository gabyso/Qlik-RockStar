import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ArtistList from './ArtistList';
import ErrorModal from './ErrorModal';

const App = () => {
  return (
    <div>
      <Header />
      <div id="content">
        <Sidebar />
        <ArtistList />
      </div>
      <ErrorModal />
    </div>
  );
};

export default App;