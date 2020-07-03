import React from 'react';
import SinglePendingTaskStyled from './SinglePendingTaskStyled';
import { Link } from 'react-router-dom';

function SinglePendingTask({ data }) {
  const { taskName, track, deadline, id } = data;
  return (
    <SinglePendingTaskStyled>
      <div className="pending-task">
        <div className="task-box">
          <div className="task-details">
            <Link className="task-name" to={`/dashboard/pending-task/${id}`}>
              {taskName}
            </Link>
            <p className="task-track">{track}</p>
          </div>
          <div className="task-deadline">
            <p>Deadline {deadline}</p>
          </div>
        </div>
      </div>
    </SinglePendingTaskStyled>
  );
}

export default SinglePendingTask;
