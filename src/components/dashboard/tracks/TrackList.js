import React from 'react';
import tempCourseLogo from '../../assets/image/dashboard/science_image.png';
import TrackCard from '../../common/TrackCard/TrackCard';
import DashboardLayout from '../../common/DashboardLayout';
import CoursesListStyled from '../courses/CourseListStyled';

function TracksList() {
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
  return (
    <CoursesListStyled>
      <div class="courses mt-5 pb-5">
        {courses.map((data, idx) => (
          <TrackCard data={data} key={idx} />
        ))}
      </div>
    </CoursesListStyled>
  );
}

export default DashboardLayout(TracksList);
