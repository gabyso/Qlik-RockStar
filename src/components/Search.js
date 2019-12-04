import React from 'react';
import { connect } from 'react-redux';
import { changeInput } from '../actions';

class Search extends React.Component {
  render() {
    return (
      <div>
        <input 
          id="search" 
          type="text" 
          value={this.props.inputSearch} 
          onChange={e => this.props.changeInput(e.target.value)}/>
      </div>
    );
  }
};

const mapStateToProps = ({ inputSearch }) => {
  return {
    inputSearch
  };
};

export default connect(mapStateToProps, { changeInput })(Search);