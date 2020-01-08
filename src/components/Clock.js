import React from 'react';
import { getTime, clockInterval } from '../services/timeFunctions';
import { connect } from 'react-redux';
import { getArtistsList } from '../actions';

class Clock extends React.Component {
  state = { time: getTime() }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: getTime() }); 
    }, clockInterval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;

    if(time) {
      return (
        <div id="current-time">
          <h6>{`${time.day}, ${time.month} ${time.date}, ${time.year}`}</h6>
          <h3>{`${time.hour}:${time.minute}`}</h3>
        </div>
      );
    }
    else return <div>Loading...</div>;
  }
}

export default connect(null, { getArtistsList })(Clock);