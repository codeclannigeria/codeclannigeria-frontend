import React, { useState } from 'react';
import PendingTaskStyled from './pendingTaskStyled';
import SinglePendingTask from './singlePendingTask';
import { Pagination } from 'antd';

function PendingTasks({ tasksData, track, completed, taskTableHeader }) {
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [cardPerPage, setCardperPage] = useState(3);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const currentTasks =
    tasksData && tasksData.items
      ? tasksData.items.slice(indexOfFirstCard, indexOfLastCard)
      : null;

  return (
    <PendingTaskStyled>
      <div className="pending-tasks-wrap">
        <div className="header">
          <p className="">{taskTableHeader}</p>
        </div>

        <div className="solid-bar"></div>

        <div className="pending-tasks">
          {currentTasks ? (
            currentTasks.map((data, idx) => (
              <SinglePendingTask
                key={idx}
                data={data}
                track={track}
                completed={completed}
              />
            ))
          ) : (
            <p className="ml-2">No task yet</p>
          )}
        </div>

        <div className="pagination">
          {/* <Link className="next-button" to="#">
            Next
          </Link> */}
          {tasksData ? (
            <Pagination
              className="p-1"
              // postPerPage={postPerPage}
              total={tasksData.items.length}
              defaultCurrent={currentPage}
              // paginate={paginate}
              onChange={paginate}
              pageSize={cardPerPage}
              showSizeChanger={false}
            />
          ) : null}
          {/* <a href="#">Next</a> */}
        </div>
      </div>
    </PendingTaskStyled>
  );
}

export default PendingTasks;
