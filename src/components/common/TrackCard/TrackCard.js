import React from 'react';
import TrackCardStyled from './TrackCardStyled';
import { Link } from 'react-router-dom';

function TrackCard({ data }) {
  const { title, description, image, link } = data;
  return (
    <TrackCardStyled>
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <Link to={link}>
            <h5 class="card-title">{title}</h5>
          </Link>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </TrackCardStyled>
  );
}

export default TrackCard;
