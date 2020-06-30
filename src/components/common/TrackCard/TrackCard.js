import React from 'react';
import TrackCardStyled from './TrackCardStyled';

function TrackCard({ data }) {
  const { title, description, image } = data;
  return (
    <TrackCardStyled>
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </TrackCardStyled>
  );
}

export default TrackCard;
