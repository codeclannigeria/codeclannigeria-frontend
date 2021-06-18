import React from 'react';
import DashboardLayout from '../../common/DashboardLayout';
import SingleCoursePageStyled from './SingleCoursePageStyled';

function SingleCoursePage() {
  return (
    <SingleCoursePageStyled>
      <h2>HTML Fundamentals</h2>
      <p>
        Learn and master the most common data structures in this full course
        from Google engineer William Fiset. This course teaches data structures
        to beginners using high quality animations to represent the data
        structures visually.
      </p>
      <p>
        You will learn how to code various data structures together with simple
        to follow step-by-step instructions. Every data structure presented will
        be accompanied by some working source code (in Java) to solidify your
        understanding.
      </p>
      <div className="video-responsive">
        <iframe
          // width=auto
          // height="393"
          src="https://www.youtube.com/embed/0wEeoK8IWUg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Html"
        ></iframe>
      </div>
    </SingleCoursePageStyled>
  );
}

export default DashboardLayout(SingleCoursePage);
