import React from 'react';

import { Descriptions } from 'antd';

const TracksStagesCard = ({ trackData, stageData }) => {
  const avgTasksPerStage = stageData
    ? Math.round(
        stageData.items
          .map(stage => stage.taskCount)
          .reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
          }, 0) / stageData.length
      )
    : 0;

  const { description, title } = trackData;
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
          {stageData.length}
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
