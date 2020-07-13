import React from 'react';
import TracksEnrollCardStyled from './TracksEnrollCardStyled';

// function ({ data, logo }) {
//   const { title, description, image, taskCount } = data;

//   return (
//     <TracksEnrollCardStyled>
//       <div className="card">
//         <img src={image || logo} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//           <p className="stages-card-text">{description}</p>
//           <p className="stages-card-text">Tasks Required: {taskCount}</p>
//         </div>
//       </div>
//     </TracksEnrollCardStyled>
//   );
// }

import { Descriptions } from 'antd';

const TracksStagesCard = ({ trackData }) => {
  const avgTasksPerStage = Math.round(
    trackData
      .map(track => track.taskCount)
      .reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0) / trackData.length
  );
  const { description, title } = trackData[0].track;
  return (
    <div>
      <Descriptions
        title="Track Descripton"
        bordered
        size="small"
        // column={{ xxl: 4, xl: 2, lg: 3, md: 3, sm: 1, xs: 1 }}
      >
        <Descriptions.Item label="Track Name">{title}</Descriptions.Item>
        <Descriptions.Item label="No of Stages">
          {trackData.length}
        </Descriptions.Item>
        <Descriptions.Item label="Certificate upon Completion">
          Yes
        </Descriptions.Item>
        <Descriptions.Item label="Amount">Free</Descriptions.Item>
        <Descriptions.Item label="Average Tasks per Stage">
          {avgTasksPerStage}
        </Descriptions.Item>
        <Descriptions.Item label="Description">{description}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default TracksStagesCard;
