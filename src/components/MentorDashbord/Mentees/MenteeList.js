import React from 'react';
import { Table } from 'antd';
import MentorDashboardLayout from '../MentorDashboardHOC';

function MenteeList() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="/">{text}</a>,
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
  return (
    <div>
      <Table
        className="mentee-table"
        columns={columns}
        dataSource={data}
        size="small"
      />
    </div>
  );
}

export default MentorDashboardLayout(MenteeList);
