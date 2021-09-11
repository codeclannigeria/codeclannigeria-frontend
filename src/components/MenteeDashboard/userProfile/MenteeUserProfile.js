import React from 'react';
import DashboardLayout from '../../common/DashboardLayout';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';

function MenteeUserProfile({ loading, data, location }) {
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

export default DashboardLayout(
  connect(mapStateToProps, mapDispatchToProps)(MenteeUserProfile)
);
