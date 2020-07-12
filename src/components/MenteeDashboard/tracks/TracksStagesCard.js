import React from 'react';
import { Radio } from 'antd';
import TracksEnrollCardStyled from './TracksEnrollCardStyled';

function TracksStagesCard({ data, logo }) {
  const { title, description, image, taskCount } = data;

  return (
    <TracksEnrollCardStyled>
      <div className="card">
        <img src={image || logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="stages-card-text">{description}</p>
          <p className="stages-card-text">Tasks Required: {taskCount}</p>
        </div>
      </div>
    </TracksEnrollCardStyled>
  );
}

export default TracksStagesCard;
