import React, { useEffect } from 'react';
import tempCourseLogo from '../../assets/image/dashboard/science_image.png';
import TrackCard from '../../common/TrackCard/TrackCard';
import DashboardLayout from '../../common/DashboardLayout';
import CoursesListStyled from '../courses/CourseListStyled';
import { connect } from 'react-redux';
import { getTracksAction } from '../../../state/tracks/tracksActionCreator';
import CustomLoader from '../../common/Spinner/CustomLoader';

function TracksList({ getTracksAction, loading, error, errResponse, data }) {
  const courses = [
    {
      title: 'Backend Development',
      description:
        'Our introductory course serves as an easy way in for people just starting out in their developer journey.',
      image: tempCourseLogo,
      link: '/dashboard/track/backend',
    },
    {
      title: 'Frontend Developmentt',
      description:
        'Our introductory course serves as an easy way in for people just starting out in their developer journey.',
      image: tempCourseLogo,
      link: '/dashboard/track/frontend',
    },
    {
      title: 'Mobile Development',
      description:
        'Our introductory course serves as an easy way in for people just starting out in their developer journey.',
      image: tempCourseLogo,
      link: '/dashboard/track/mobile',
    },
    {
      title: 'Dev Ops',
      description:
        'Our introductory course serves as an easy way in for people just starting out in their developer journey.',
      image: tempCourseLogo,
      link: '/dashboard/track/devops',
    },
  ];
  const { items } = data;

  useEffect(() => {
    getTracksAction();
  }, []);
  return (
    <CoursesListStyled>
      <div class="courses mt-5 pb-5">
        {!loading && items ? (
          items.map((item, idx) => (
            <TrackCard data={item} key={idx} logo={tempCourseLogo} />
          ))
        ) : (
          <CustomLoader />
        )}
      </div>
    </CoursesListStyled>
  );
}

const mapStateToProps = store => {
  const { loading, data, error, errResponse } = store.tracks;
  return {
    loading,
    data,
    error,
    errResponse,
  };
};

const mapDispatchToProps = { getTracksAction };

export default DashboardLayout(
  connect(mapStateToProps, mapDispatchToProps)(TracksList)
);
