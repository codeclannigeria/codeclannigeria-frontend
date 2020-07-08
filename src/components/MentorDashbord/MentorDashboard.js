import React from 'react';
import MentorDashboardSidebar from './common/MentorDashboardSidebar';
import DashboardHeader from '../common/DashboardHeader';
import { Table } from 'antd';
import MentorDashboardStyled from './MentorDashboardStyled';

function MentorDashboard() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
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
      <MentorDashboardStyled>
        <MentorDashboardSidebar />
        <DashboardHeader />
        <div className="dashboard-wrap row">
          <div className="dashboard-content col-md-10 container ">
            <Table
              className="mentee-table"
              columns={columns}
              dataSource={data}
              size="small"
            />
          </div>
        </div>
      </MentorDashboardStyled>
    </div>
  );
}

export default MentorDashboard;
