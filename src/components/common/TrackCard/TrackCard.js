import React from 'react';
import TrackCardStyled from './TrackCardStyled';
import { Link } from 'react-router-dom';

function TrackCard({ data, logo }) {
  const { title, description, image, id } = data;
  return (
    <TrackCardStyled>
      <div class="card">
        <img src={image || logo} class="card-img-top" alt="..." />
        <div class="card-body">
          <Link to={`track/${title}/${id}`}>
            <h5 class="card-title">{title}</h5>
          </Link>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </TrackCardStyled>
  );
}

export default TrackCard;
