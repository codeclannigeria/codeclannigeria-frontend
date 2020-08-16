import React from 'react';
import { TrackMentors } from './TrackMentors';

import { Button, Radio, Pagination } from 'antd';

function SelectMentorStep() {
  const handleSetMentor = () => {};
  return (
    <>
      <Radio.Group onChange={handleSetMentor} defaultValue={null}>
        <div className="">
          <TrackMentors />
        </div>
      </Radio.Group>
    </>
  );
}

export default SelectMentorStep;
