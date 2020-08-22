import React, { useState, useEffect } from 'react';
import { TrackMentors } from './TrackMentors';

import { Radio } from 'antd';
import codeClanApi from '../../../../api/apiUtils';
import CustomLoader from '../../../common/Spinner/CustomLoader';

function SelectMentorStep({ trackId, handleSetMentorId }) {
  const [trackMentors, setTrackMentors] = useState(null);
  const [loading, setLoading] = useState(false);
  const getTrackMentors = async () => {
    setLoading(true);
    try {
      const res = await codeClanApi.get(`/tracks/${trackId}/mentors`);

      setTrackMentors(res.data);
    } catch (err) {
      throw Error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTrackMentors();
  }, []);
  // const handleSetMentor = () => {};
  return (
    <>
      <Radio.Group onChange={handleSetMentorId} defaultValue={null}>
        <div className="">
          {trackMentors && !loading ? (
            <TrackMentors mentors={trackMentors} />
          ) : (
            <CustomLoader />
          )}
        </div>
      </Radio.Group>
    </>
  );
}

export default SelectMentorStep;
