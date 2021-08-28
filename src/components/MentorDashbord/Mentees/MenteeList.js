import React, { useEffect, useCallback } from 'react';
import { Table } from 'antd';
import MentorDashboardLayout from '../MentorDashboardHOC';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserMenteesProfileApi } from '../../../state/user/userActionCreator';

function MenteeList({ mentees, userData, history, getUserMenteesProfileApi }) {
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      render: text => (
        <Link to={`/dashboard/mentor/mentee/${text}`}>{text}</Link>
      ),
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      sorter: (a, b) => a.firstName.length - b.firstName.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
    },
    // {
    //   title: 'Track',
    //   dataIndex: 'tracks',
    //   render: (text, record) =>
    //     record.tracks && record.tracks.length > 0
    //       ? record.tracks[0].title
    //       : 'Not Enrolled Yet',
    // },
  ];


  useEffect(() => {
    if (userData) {
      const {
        city,
        country,
        phoneNumber,
        description,
        technologies,
      } = userData;
      if (
        !city ||
        !country ||
        !phoneNumber ||
        !description ||
        technologies.length <= 0
      ) {
        // return
        history.push({
          pathname: '/dashboard/mentor/profile',
          state: { editProfile: true },
        });
      }
    }
  }, [userData, history]);

  const fetchMentees = useCallback(() => {
    getUserMenteesProfileApi();
  }, [getUserMenteesProfileApi]);

  useEffect(() => {
    fetchMentees();
  }, [fetchMentees]);

  return (
    <div>
      <h2 className="ml-4">Your Mentees</h2>
      <Table
        className="mentee-table ml-4"
        columns={columns}
        dataSource={mentees}
        size="small"
        pagination={{ pageSize: 10 }}
        // scroll={{ y: 240 }}
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
    mentees,
  } = store.user;

  return {
    userLoading,
    userData,
    error,
    mentees,
    errResponse,
  };
};

const mapDispatchToProps = { getUserMenteesProfileApi };

export default MentorDashboardLayout(
  connect(mapStateToProps, mapDispatchToProps)(MenteeList)
);
