import React from 'react';
import TracksEnrollCardStyled from './TracksEnrollCardStyled';
import { Link } from 'react-router-dom';

function TrackCard({ data, logo, next }) {
  const { title, description, image, id } = data;
  return (
    <TracksEnrollCardStyled>
      <div class="card" onClick={next}>
        <img src={image || logo} class="card-img-top" alt="..." />
        <div class="card-body">
          {/* <Link to={`track/${title}/${id}`}> */}
          <h5 class="card-title">{title}</h5>
          {/* </Link> */}
          <p class="card-text">{description}</p>
        </div>
      </div>
    </TracksEnrollCardStyled>
  );
}

export default TrackCard;
