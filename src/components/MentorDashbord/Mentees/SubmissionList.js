import React, { useEffect, useState } from 'react';
import { Table, Space, Button } from 'antd';
import MentorDashboardLayout from '../MentorDashboardHOC';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserMenteesProfileApi } from '../../../state/user/userActionCreator';
import TaskForm from '../common/TaskForm';

function SubmissionList({
  userLoading,
  userData,
  error,
  errResponse,
  getAllTasksAction,
  tasksData,
  history,
  getUserMenteesProfileApi,
}) {
  const [visible, setVisible] = useState();
  const [currentRecord, setCurrentRecord] = useState();

  const onCreate = () => {
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  };
  const handleModalVisiblity = record => {
    console.log(record);
    setCurrentRecord(record);
    setVisible(true);
  };
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      //   render: text => <Link to="/dashboard/mentor/mentee/">{text}</Link>,
    },
    {
      title: 'Grade %',
      dataIndex: 'gradePercentage',
    },
    {
      title: 'Grade',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleModalVisiblity(record)}>Grade</Button>
        </Space>
      ),
    },
  ];
  const data = [
    {
      items: [
        {
          updatedAt: '2020-08-22T18:13:24.151Z',
          createdAt: '2020-08-22T18:13:24.151Z',
          menteeComment: 'string',
          mentorComment: 'string',
          taskUrl: 'string',
          gradePercentage: 0,
          id: '1',
        },
        {
          updatedAt: '2020-08-22T18:13:24.151Z',
          createdAt: '2020-08-22T18:13:24.151Z',
          menteeComment: 'string',
          mentorComment: 'string',
          taskUrl: 'string',
          gradePercentage: 0,
          id: '2',
        },
        {
          updatedAt: '2020-08-22T18:13:24.151Z',
          createdAt: '2020-08-22T18:13:24.151Z',
          menteeComment: 'string',
          mentorComment: 'string',
          taskUrl: 'string',
          gradePercentage: 0,
          id: '3',
        },
      ],
      totalCount: 0,
    },
  ];

  //   useEffect(() => {
  //     if (userData) {
  //       const { city, country, phoneNumber } = userData;
  //       if (!city || !country || !phoneNumber) {
  //         // return
  //         history.push({
  //           pathname: '/dashboard/mentor/profile',
  //           state: { editProfile: true },
  //         });
  //       }
  //     }
  //   }, [userData]);

  return (
    <div>
      <Table
        className="mentee-table ml-4"
        columns={columns}
        dataSource={data[0].items}
        size="small"
      />
      <TaskForm
        initialData={currentRecord}
        visible={visible}
        onCreate={onCreate}
        onCancel={onCancel}
      />
    </div>
  );
}

const mapStateToProps = store => {
  const { loading: userLoading, error, errResponse, submissions } = store.tasks;

  return {
    userLoading,

    error,
    submissions,
    errResponse,
  };
};

const mapDispatchToProps = { getUserMenteesProfileApi };

export default MentorDashboardLayout(
  connect(mapStateToProps, mapDispatchToProps)(SubmissionList)
);
