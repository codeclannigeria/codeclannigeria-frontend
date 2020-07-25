import React from 'react';
import PendingTaskStyled from './pendingTaskStyled';
import { Link } from 'react-router-dom';
import SinglePendingTask from './singlePendingTask';

function PendingTasks({ tasksData, track }) {
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
      <div className="pending-tasks-wrap">
        <div className="header">
          <p className="">Tasks</p>
        </div>

        <div className="solid-bar"></div>

        <div className="pending-tasks">
          {tasksData
            ? tasksData.items.map((data, idx) => (
                <SinglePendingTask key={idx} data={data} track={track} />
              ))
            : null}
        </div>

        <div className="pagination">
          <Link className="next-button" to="#">
            Next
          </Link>
          {/* <a href="#">Next</a> */}
        </div>
      </div>
    </PendingTaskStyled>
  );
}

export default PendingTasks;
