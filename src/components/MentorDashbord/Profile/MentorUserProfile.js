import React from 'react';
import { connect } from 'react-redux';
import MentorDashboardLayout from '../MentorDashboardHOC';
import UserProfile from '../../MenteeDashboard/userProfile/UserProfile';

function MentorUserProfile({ loading, data, location }) {
  return <UserProfile data={data} location={location} loading={loading} />;
}

const mapStateToProps = store => {
  const { loading, data, error, errResponse } = store.user;
  return {
    loading,
    data,
    error,
    errResponse,
  };
};

const mapDispatchToProps = {};

export default MentorDashboardLayout(
  connect(mapStateToProps, mapDispatchToProps)(MentorUserProfile)
);
