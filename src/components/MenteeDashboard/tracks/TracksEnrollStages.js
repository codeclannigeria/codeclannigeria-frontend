import React, { useEffect, useCallback, useState } from 'react';
import codeClanApi from '../../../api/apiUtils';
import CustomLoader from '../../common/Spinner/CustomLoader';
import { Radio } from 'antd';
import tempCourseLogo from '../../assets/image/dashboard/science_image.png';
import TracksStagesCard from './TracksStagesCard';

function TracksEnrollStages({ id }) {
  const [trackData, settrackData] = useState(null);
  const getTrackStages = useCallback(async id => {
    try {
      let res = await codeClanApi.get(`tracks/${id}/stages`);
      settrackData(res.data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  useEffect(() => {
    getTrackStages(id);
  }, []);

  return (
    <div className="tracks-stages-card">
      {trackData ? (
        <TracksStagesCard trackData={trackData} />
      ) : (
        <CustomLoader />
      )}
    </div>
  );
}

export default TracksEnrollStages;
