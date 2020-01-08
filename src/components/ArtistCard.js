import React from 'react';
import { getTime } from '../services/timeFunctions';

const ArtistCard = props => {
  const artistKeys = ['name', 'date_of_birth', 'genres', 'greatest_hits'];
  const artist = props.artist;
  
  return (
    <div className="artist">
      <div>
        <img src={props.artist.image_url} alt="artist"/>
      </div>
      <div className="artist-info">
        {artistKeys.map(key =>{
          let value = artist[key];
          if(typeof value === 'object') value = value.join(', ');
          else if(key === 'date_of_birth'){
            const time = getTime(new Date(value));
            value = `${time.month} ${time.date}, ${time.year}`;
          }
          return (
            <div key={key}>
              <label>{`${key.replace(/_/g,' ')}:`}</label>
              <h5>{typeof value === 'object' ? value.join(', ') : value}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistCard;