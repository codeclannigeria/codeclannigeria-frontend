import React from 'react';
import TracksEnrollCardStyled from './TracksEnrollCardStyled';
import { Radio } from 'antd';

function TrackCard({ data, logo }) {
  const { title, description, image, id } = data;
  // const handleCardClick = () => {
  //   handleSetTrackId(id);
  //   // next();
  // };
  return (
    <TracksEnrollCardStyled>
      <Radio.Button value={id}>
        <div class="card">
          <img src={image || logo} class="card-img-top" alt="..." />
          <div class="card-body">
            {/* <Link to={`track/${title}/${id}`}> */}
            <h5 class="card-title">{title}</h5>
            {/* </Link> */}
            <p class="card-text">{description}</p>
          </div>
        </div>
      </Radio.Button>
    </TracksEnrollCardStyled>
  );
}

export default TrackCard;
