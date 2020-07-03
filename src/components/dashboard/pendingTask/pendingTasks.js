import React from 'react';
import PendingTaskStyled from './pendingTaskStyled';
import { Link } from 'react-router-dom';
import SinglePendingTask from './singlePendingTask';

function PendingTasks() {
  const dummyData = [
    {
      id: 1,
      taskName:
        ' Task 1: Responsive Web Design Projects - Build a Tribute Page',
      track: 'Frontend',
      deadline: '19/03',
    },
    {
      id: 2,
      taskName: ' Task 4: Build an API',
      track: 'Frontend',
      deadline: '19/03',
    },
    {
      id: 3,
      taskName: ' Task 4: Build an API',
      track: 'Frontend',
      deadline: '19/03',
    },
    {
      id: 4,
      taskName: ' Task 4: Build an API',
      track: 'Frontend',
      deadline: '19/03',
    },
    {
      id: 5,
      taskName: ' Task 4: Build an API',
      track: 'Frontend',
      deadline: '19/03',
    },
  ];
  return (
    <PendingTaskStyled>
      <div class="pending-tasks-wrap mt-5">
        <div class="header">
          <p class="p-2 pl-5">Tasks</p>
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

export default PendingTasks;
