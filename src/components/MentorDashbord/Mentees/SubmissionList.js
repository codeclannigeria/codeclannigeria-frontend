import React, { useEffect, useState } from 'react';
import { Table, Space, Button } from 'antd';
import MentorDashboardLayout from '../MentorDashboardHOC';
import { connect } from 'react-redux';
import {
  getAllMentorSubmissions,
  gradeTaskAction,
} from '../../../state/tasks/tasksActionCreator';
import { getUserMenteesProfileApi } from '../../../state/user/userActionCreator';
import TaskForm from '../common/TaskForm';

function SubmissionList({
  mentorTasks,

  loading,
  getUserMenteesProfileApi,
  getAllMentorSubmissions,
  gradeTaskAction,
}) {
  const [visible, setVisible] = useState();
  const [currentRecord, setCurrentRecord] = useState();

  const onCreate = (values, initialData) => {
    delete values.taskUrl;
    delete values.menteeComment;
    values.id = initialData.id;
    console.log(values);
    gradeTaskAction(values);
  };

  const onCancel = () => {
    setVisible(false);
  };
  const handleModalVisiblity = record => {
    console.log({ record });
    setCurrentRecord(record);
    setVisible(true);
  };

  useEffect(() => {
    getAllMentorSubmissions();
  }, [getAllMentorSubmissions]);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
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
          <Button type="primary" onClick={() => handleModalVisiblity(record)}>
            Grade
          </Button>
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

  return (
    <div>
      <h2 className="ml-4">Mentees Task Submissions</h2>
      <Table
        className="mentee-table ml-4"
        columns={columns}
        dataSource={mentorTasks}
        size="small"
        pagination={{ pageSize: 50 }}
        scroll={{ y: 240 }}
      />
      <TaskForm
        initialData={currentRecord}
        visible={visible}
        onCreate={onCreate}
        onCancel={onCancel}
        loadiing={loading}
      />
    </div>
  );
}

const mapStateToProps = store => {
  const { loading, error, errResponse, mentorTasks } = store.tasks;

  return {
    loading,
    error,
    mentorTasks,
    errResponse,
  };
};

const mapDispatchToProps = {
  getUserMenteesProfileApi,
  getAllMentorSubmissions,
  gradeTaskAction,
};

export default MentorDashboardLayout(
  connect(mapStateToProps, mapDispatchToProps)(SubmissionList)
);
