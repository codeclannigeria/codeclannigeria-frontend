import React, { useEffect } from 'react';
import tempCourseLogo from '../../assets/image/dashboard/science_image.png';
import TrackCard from '../../common/TrackCard/TrackCard';
import DashboardLayout from '../../common/DashboardLayout';
import StagesListStyled from './StagesListStyled';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrackStagesAction } from '../../../state/stages/stagesActionCreator';
import CustomLoader from '../../common/Spinner/CustomLoader';

function StagesList(props, rest) {
  const courses = [
    {
      title: 'JavaScript Fundamentals',
      description:
        'Our introductory course serves as an easy way in for people just starting out in their developer journey.',
      image: tempCourseLogo,
    },
    {
      title: 'Advanced JavaScript',
      description:
        'Our introductory course serves as an easy way in for people just starting out in their developer journey.',
      image: tempCourseLogo,
    },
    {
      title: 'Python Fundamentals',
      description:
        'Our introductory course serves as an easy way in for people just starting out in their developer journey.',
      image: tempCourseLogo,
    },
    {
      title: 'Flutter Fundamentals',
      description:
        'Our introductory course serves as an easy way in for people just starting out in their developer journey.',
      image: tempCourseLogo,
    },
    {
      title: 'Java Fundamentals',
      description:
        'Our introductory course serves as an easy way in for people just starting out in their developer journey.',
      image: tempCourseLogo,
    },
    {
      title: 'JavaScript Fundamentals',
      description:
        'Our introductory course serves as an easy way in for people just starting out in their developer journey.',
      image: tempCourseLogo,
    },
  ];
  const dispatch = useDispatch();
  const stages = useSelector(state => state.stages);

  const track = props.match.params.trackId;

  useEffect(() => {
    dispatch(getAllTrackStagesAction(track));
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
