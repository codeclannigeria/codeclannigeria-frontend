import React from 'react';
import DashboardLayout from '../../common/DashboardLayout';
import PendingTasks from './pendingTasks';

function PendingTasksPage() {
  return (
    <>
      <PendingTasks />
    </>
  );
}

export default DashboardLayout(PendingTasksPage);
