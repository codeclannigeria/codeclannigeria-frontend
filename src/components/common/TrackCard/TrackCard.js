import React from 'react';
import TrackCardStyled from './TrackCardStyled';
import { Link } from 'react-router-dom';
import tempCourseLogo from '../../assets/image/dashboard/science_image.png';

function TrackCard({ data, logo, link }) {
  const { title, description, image, id } = data;
  return (
    <TrackCardStyled>
      <div class="card">
        <img src={image || tempCourseLogo} class="card-img-top" alt={title} />
        <div class="card-body">
          {!link ? (
            <Link to={`track/${title}/${id}`}>
              <h5 class="card-title">{title}</h5>
            </Link>
          ) : (
            <h5 class="card-title">{title}</h5>
          )}
          <p class="card-text">{description}</p>
        </div>
      </div>
    </TrackCardStyled>
  );
}

export default TrackCard;
