import React from 'react';
import tempCourseLogo from '../../assets/image/dashboard/science_image.png';
import TrackCard from '../../common/TrackCard/TrackCard';
import DashboardLayout from '../../common/DashboardLayout';
import CoursesListStyled from './CourseListStyled';

function CoursesList() {
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

export default DashboardLayout(CoursesList);
