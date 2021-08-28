import React, { useEffect } from 'react';
import TrackCard from '../../common/TrackCard/TrackCard';
import DashboardLayout from '../../common/DashboardLayout';
import StagesListStyled from './StagesListStyled';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrackStagesAction } from '../../../state/stages/stagesActionCreator';
import CustomLoader from '../../common/Spinner/CustomLoader';

function StagesList(props, rest) {
  const dispatch = useDispatch();
  const stages = useSelector(state => state.stages);

  const track = props.match.params.trackId;

  useEffect(() => {
    dispatch(getAllTrackStagesAction(track));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track]);

  return (
    <StagesListStyled>
      <Link to="/dashboard/track" className="btn btn-primary">
        <i class="fas fa-arrow-left"></i> Back to tracks
      </Link>
      <div class="stages mt-5 pb-5">
        {stages.trackStages && stages.trackStages.length > 0
          ? stages.trackStages.map((data, idx) => (
              <TrackCard data={data} key={idx} link={true} />
            ))
          : null}

        {stages.loading ? <CustomLoader /> : null}
      </div>
    </StagesListStyled>
  );
}

export default DashboardLayout(StagesList);
