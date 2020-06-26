import React from 'react';
import pendingTaskStyled from './pendingTaskStyled';
import { Link } from 'react-router-dom';

function pendingTasks() {
  const dummyData = [
    { taskName: ' Task 4: Build an API', track: 'Frontend', deadline: '19/03' },
    { taskName: ' Task 4: Build an API', track: 'Frontend', deadline: '19/03' },
    { taskName: ' Task 4: Build an API', track: 'Frontend', deadline: '19/03' },
    { taskName: ' Task 4: Build an API', track: 'Frontend', deadline: '19/03' },
    { taskName: ' Task 4: Build an API', track: 'Frontend', deadline: '19/03' },
  ];
  return (
    <pendingTaskStyled>
      <div class="pending-tasks-wrap mt-5">
        <div class="header">
          <p class="p-2 pl-5">Pending Tasks</p>
        </div>

        <div class="solid-bar"></div>

        <div class="pending-tasks">
          {dummyData.map((idx, data) => (
            <singlePendingTask key={idx} data={data} />
          ))}
        </div>

        <div class="next-button">
          <p>
            <Link to="#">Next</Link>
            {/* <a href="#">Next</a> */}
          </p>
        </div>
      </div>
    </pendingTaskStyled>
  );
}

export default pendingTasks;
