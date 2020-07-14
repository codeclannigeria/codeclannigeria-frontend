import React, { useEffect, useCallback, useState } from 'react';
import codeClanApi from '../../../api/apiUtils';
import CustomLoader from '../../common/Spinner/CustomLoader';
import TracksStagesCard from './TracksStagesCard';
import { useStore } from 'react-redux';

function TracksEnrollStages({ id }) {
  const [trackData, settrackData] = useState(null);
  const [stageData, setStageData] = useState(null);
  const store = useStore().getState().tracks;
  const getTrackStages = useCallback(
    async id => {
      try {
        let res = await codeClanApi.get(`tracks/${id}/stages`);
        setStageData(res.data);
        let resData = store.data.items.filter(data => data.id === id);
        settrackData(resData[0]);
      } catch (e) {
        console.log(e);
      }
    },
    [store.data.items]
  );
  useEffect(() => {
    getTrackStages(id);
  }, [getTrackStages, id]);

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
