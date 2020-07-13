import React, { useEffect, useCallback, useState } from 'react';
import codeClanApi from '../../../api/apiUtils';
import CustomLoader from '../../common/Spinner/CustomLoader';
import { Radio } from 'antd';
import tempCourseLogo from '../../assets/image/dashboard/science_image.png';
import TracksStagesCard from './TracksStagesCard';
import { useStore, useDispatch } from 'react-redux';

function TracksEnrollStages({ id }) {
  const [trackData, settrackData] = useState(null);
  const [stageData, setStageData] = useState(null);

  const store = useStore().getState().tracks;
  // disuseDispatch

  console.log();

  const getTrackStages = useCallback(async id => {
    try {
      let res = await codeClanApi.get(`tracks/${id}/stages`);
      setStageData(res.data);
      let resData = store.data.items.filter(data => data.id === id);
      settrackData(resData[0]);
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
        <TracksStagesCard trackData={trackData} stageData={stageData} />
      ) : (
        <CustomLoader />
      )}
    </div>
  );
}

export default TracksEnrollStages;
