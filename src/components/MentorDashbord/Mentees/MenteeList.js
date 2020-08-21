import React, { useEffect } from 'react';
import { Table } from 'antd';
import MentorDashboardLayout from '../MentorDashboardHOC';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function MenteeList({
  userLoading,
  userData,
  error,
  errResponse,
  getAllTasksAction,
  tasksData,
  history,
}) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <Link to="/dashboard/mentor/mentee/1">{text}</Link>,
    },
    {
      title: 'Track',
      dataIndex: 'track',
    },
    {
      title: 'Stage',
      dataIndex: 'stage',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      track: 'Frontend Development',
      stage: '1',
    },
    {
      key: '2',
      name: 'Jim Green',
      track: 'Frontend Development',
      stage: '2',
    },
    {
      key: '3',
      name: 'Joe Black',
      track: 'Frontend Development',
      stage: '1 ',
    },
  ];

  useEffect(() => {
    if (userData) {
      const { city, country, phoneNumber } = userData;
      if (!city || !country || !phoneNumber) {
        // return
        history.push({
          pathname: '/dashboard/mentor/profile',
          state: { editProfile: true },
        });
      }
    }
  }, [userData]);

  return (
    <div>
      <Table
        className="mentee-table ml-4"
        columns={columns}
        dataSource={data}
        size="small"
      />
    </div>
  );
}

const mapStateToProps = store => {
  const {
    loading: userLoading,
    data: userData,
    error,
    errResponse,
  } = store.user;

  return {
    userLoading,
    userData,
    error,
    errResponse,
  };
};

const mapDispatchToProps = {};

export default MentorDashboardLayout(
  connect(mapStateToProps, mapDispatchToProps)(MenteeList)
);
