import React from 'react';

function singlePendingTask({ taskName, track, deadline }) {
  return (
    <>
      <div class="pending-task">
        <div class="task-box">
          <div class="task-details">
            <p class="task-name">Task 4 : Build an API</p>
            <p class="task-track">Frontend</p>
          </div>
          <div class="task-deadline">
            <p>Deadline 19/03</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default singlePendingTask;
