import React from 'react';
import PendingTaskStyled from './pendingTaskStyled';
import { Link } from 'react-router-dom';
import SinglePendingTask from './singlePendingTask';

function PendingTasks() {
  const dummyData = [
    {
      id: 1,
      taskName: ' Task 1: Article preview component ',
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
      <div className="pending-tasks-wrap mt-5">
        <div className="header">
          <p className="p-2 pl-5">Tasks</p>
        </div>

        <div className="solid-bar"></div>

        <div className="pending-tasks">
          {dummyData.map((data, idx) => (
            <SinglePendingTask key={idx} data={data} />
          ))}
        </div>

        <div className="next-button">
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
