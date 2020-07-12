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

  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }

  return (
    <div className="tracks-stages-card">
      {trackData ? (
        <Radio.Group onChange={onChange} defaultValue="a">
          {trackData.map((data, idx) => (
            <TracksStagesCard key={idx} data={data} logo={tempCourseLogo} />
          ))}
        </Radio.Group>
      ) : (
        <CustomLoader />
      )}
    </div>
  );
}

export default TracksEnrollStages;
