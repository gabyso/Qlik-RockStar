import React from 'react';
import { getTime, timeInterval } from '../timeFunctions';
import { connect } from 'react-redux';
import { getArtistsList } from '../actions';

class CurrentTime extends React.Component {
  state = { time: null }

  componentDidMount() {
    this.setState({ time: getTime() })
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.props.getArtistsList();
      this.setState({ time: getTime() }); 
    }, timeInterval);
  }

  render() {
    const { time } = this.state;

    if(time) {
      return (
        <div id="current-time">
          <h6>{`${time.day}, ${time.month} ${time.date}, ${time.year}`}</h6>
          <h1>{`${time.hour}:${time.minute}`}</h1>
        </div>
      );
    }
    else return <div>Loading...</div>;
  }
}

export default connect(null, { getArtistsList })(CurrentTime);