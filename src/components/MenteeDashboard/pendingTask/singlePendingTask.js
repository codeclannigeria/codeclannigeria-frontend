import React from 'react';
import SinglePendingTaskStyled from './SinglePendingTaskStyled';
import { Link } from 'react-router-dom';
import { formatTime } from '../../../utils';

function SinglePendingTask({ data, track }) {
  const { title, deadline, id } = data;
  return (
    <SinglePendingTaskStyled>
      <div className="pending-task">
        <div className="task-box">
          <div className="task-details">
            <Link
              className="task-name"
              to={{
                pathname: `/dashboard/pending-task/${id}`,
                query: { data },
              }}
            >
              {title}
            </Link>
            <p className="task-track">{track}</p>
          </div>
          <div className="task-deadline">
            <p>Deadline: {new Date(deadline).toUTCString()}</p>
          </div>
        </div>
      </div>
    </SinglePendingTaskStyled>
  );
}

export default SinglePendingTask;
