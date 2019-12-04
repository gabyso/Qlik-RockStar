import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
  return (
    <div>
      <h1>
        <span className="text-heading">
          <FontAwesomeIcon icon={faHeadphonesAlt} /> Qlik
          </span> RockStar
      </h1>
    </div> 
  );
};

export default Logo;

