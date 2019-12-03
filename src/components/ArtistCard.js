import React from 'react';
import { getTime } from '../timeFunctions';

const ArtistCard = props => {
  const time = getTime(new Date(props.birth));
  
  return (
    <div id="artist">
      <div>
        <img src={props.photo} alt="artist"/>
      </div>
      <div className="artist-info">
        <div>
          <label>Name: </label>
          <h4>{props.name}</h4>
        </div>
        <div>
          <label>Date Of Birth: </label>
          <h4>{`${time.month} ${time.date}, ${time.year}`}</h4>
        </div>
        <div>
          <label>Geners List:</label>
            <h4>{props.genres}, sssssss, sssssssssssssssssss, sssssss</h4>
        </div>
      </div>
      <div>
        <label>Gratest Hits: </label>
          {props.gratestHits.map(hit => <h4>{hit}</h4>)}
        </div>
    </div>
  );
};

export default ArtistCard;