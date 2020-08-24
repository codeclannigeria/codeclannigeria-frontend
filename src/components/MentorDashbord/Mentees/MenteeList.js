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
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
    },
    {
      title: 'Track',
      dataIndex: 'tracks',
      render: (text, record) =>
        record.tracks && record.tracks.length > 1
          ? record.tracks[0].title
          : 'Not Enrolled Yet',
    },
  ];
  const data = [
    {
      role: 'ADMIN',
      id: '5ed8391c6ee42f00178d4518',
      updatedAt: '2020-08-22T19:36:17.476Z',
      createdAt: '2020-06-03T23:05:57.055Z',
      firstName: 'string',
      lastName: 'string',
      email: 'onasanyatunde67@gmail.com',
      description: 'string',
      city: 'string',
      country: 'string',
      gender: 'MALE',
      dob: '2020-08-19T14:21:32.861Z',
      phoneNumber: '+2347063644568',
      technologies: ['string'],
      photoUrl:
        'https://res.cloudinary.com/codeclannigeria/image/upload/v1594255930/ccn/avatars/5ed8391c6ee42f00178d4518.jpg',
      tracks: [
        {
          id: '5efe684d1506ab00179f6419',
          updatedAt: '2020-07-13T14:49:21.609Z',
          createdAt: '2020-07-02T22:57:11.353Z',
          title: 'MOBILE',
          description:
            'Mobile track which includes Flutter, React native and Xamarine',
          thumbnailUrl: null,
        },
        {
          id: '5efe68cf1506ab00179f641a',
          updatedAt: '2020-07-02T22:57:11.353Z',
          createdAt: '2020-07-02T22:57:11.353Z',
          title: 'FRONTEND',
          description: 'Fronted track, including CSS, HTML and JavaScript',
          thumbnailUrl: null,
        },
        {
          id: '5efe68f51506ab00179f641b',
          updatedAt: '2020-07-02T22:57:11.353Z',
          createdAt: '2020-07-02T22:57:11.353Z',
          title: 'BACKEND',
          description: 'Backend track, including NodeJs, Deno and Python',
          thumbnailUrl: null,
        },
      ],
    },

    {
      role: 'ADMIN',
      id: '5ed8391c6ee42f00178d4518',
      updatedAt: '2020-08-22T19:36:17.476Z',
      createdAt: '2020-06-03T23:05:57.055Z',
      firstName: 'string',
      lastName: 'string',
      email: 'onasanyatunde67@gmail.com',
      description: 'string',
      city: 'string',
      country: 'string',
      gender: 'MALE',
      dob: '2020-08-19T14:21:32.861Z',
      phoneNumber: '+2347063644568',
      technologies: ['string'],
      photoUrl:
        'https://res.cloudinary.com/codeclannigeria/image/upload/v1594255930/ccn/avatars/5ed8391c6ee42f00178d4518.jpg',
      tracks: [
        {
          id: '5efe684d1506ab00179f6419',
          updatedAt: '2020-07-13T14:49:21.609Z',
          createdAt: '2020-07-02T22:57:11.353Z',
          title: 'MOBILE',
          description:
            'Mobile track which includes Flutter, React native and Xamarine',
          thumbnailUrl: null,
        },
        {
          id: '5efe68cf1506ab00179f641a',
          updatedAt: '2020-07-02T22:57:11.353Z',
          createdAt: '2020-07-02T22:57:11.353Z',
          title: 'FRONTEND',
          description: 'Fronted track, including CSS, HTML and JavaScript',
          thumbnailUrl: null,
        },
        {
          id: '5efe68f51506ab00179f641b',
          updatedAt: '2020-07-02T22:57:11.353Z',
          createdAt: '2020-07-02T22:57:11.353Z',
          title: 'BACKEND',
          description: 'Backend track, including NodeJs, Deno and Python',
          thumbnailUrl: null,
        },
      ],
    },
  ];

  useEffect(() => {
    if (userData) {
      const { city, country, phoneNumber, description } = userData;
      if (!city || !country || !phoneNumber || !description) {
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
        dataSource={data}
        size="small"
        pagination={{ pageSize: 50 }}
        scroll={{ y: 240 }}
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
