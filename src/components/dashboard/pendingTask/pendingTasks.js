import React from 'react';
import PendingTaskStyled from './pendingTaskStyled';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../common/DashboardLayout';
import SinglePendingTask from './singlePendingTask';

function PendingTasks() {
  const dummyData = [
    { taskName: ' Task 4: Build an API', track: 'Frontend', deadline: '19/03' },
    { taskName: ' Task 4: Build an API', track: 'Frontend', deadline: '19/03' },
    { taskName: ' Task 4: Build an API', track: 'Frontend', deadline: '19/03' },
    { taskName: ' Task 4: Build an API', track: 'Frontend', deadline: '19/03' },
    { taskName: ' Task 4: Build an API', track: 'Frontend', deadline: '19/03' },
  ];
  return (
    <PendingTaskStyled>
      <div class="pending-tasks-wrap mt-5">
        <div class="header">
          <p class="p-2 pl-5">Pending Tasks</p>
        </div>

        <div class="solid-bar"></div>

        <div class="pending-tasks">
          {dummyData.map((data, idx) => (
            <SinglePendingTask key={idx} data={data} />
          ))}
        </div>

        <div class="next-button">
          <p>
            <Link to="#">Next</Link>
            {/* <a href="#">Next</a> */}
          </p>
        </div>
      </div>
    </PendingTaskStyled>
  );
}

export default DashboardLayout(PendingTasks);
