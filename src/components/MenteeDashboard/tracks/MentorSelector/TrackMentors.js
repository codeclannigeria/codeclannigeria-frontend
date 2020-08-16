import React from 'react';
import { connect } from 'react-redux';
import SingleMentorCard from './SingleMentorCard';
import SingleMentorCardStyled from './SingleMentorCardStyled';

export const TrackMentors = () => {
  const number = [1, 3, 4, 5, 6, 6];

  return (
    <SingleMentorCardStyled>
      {number.map(item => (
        <SingleMentorCard key={item} />
      ))}
    </SingleMentorCardStyled>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TrackMentors);
