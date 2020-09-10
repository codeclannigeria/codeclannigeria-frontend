import React, { useState } from 'react';
import SinglePendingTaskStyled from './SinglePendingTaskStyled';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { GradingModal } from './GradingModal';

function SinglePendingTask({ data, track, completed }) {
  const { title, deadline, id } = data;
  const [visible, setVisible] = useState();

  const onCancel = () => {
    setVisible(false);
  };
  return (
    <SinglePendingTaskStyled>
      <div className="pending-task">
        <div className="task-box">
          <div className="task-details w-50">
            <Link
              className="task-name font-weight-bold"
              to={{
                pathname: `/dashboard/pending-task/${id}`,
                query: { data },
              }}
            >
              {title}
            </Link>
            <p className="task-track">{track}</p>
          </div>
          <div className="task-deadline ">
            <p>Deadline: {new Date(deadline).toUTCString()}</p>
            {completed ? (
              <Button onClick={() => setVisible(true)}>Grading</Button>
            ) : null}
          </div>
          <GradingModal visible={visible} taskId={id} onCancel={onCancel} />
        </div>
      </div>
    </SinglePendingTaskStyled>
  );
}

export default SinglePendingTask;
