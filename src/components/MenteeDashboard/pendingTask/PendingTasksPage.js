import React, { useEffect } from 'react';
import DashboardLayout from '../../common/DashboardLayout';
import PendingTasks from './pendingTasks';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasksAction } from '../../../state/tasks/tasksActionCreator';
import CustomLoader from '../../common/Spinner/CustomLoader';

function PendingTasksPage() {
  const tasksState = useSelector(state => state.tasks);
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!tasksState.data) {
      console.log(user);
      if (user.data.tracks && user.data.tracks.length > 0) {
        dispatch(getAllTasksAction(user.data.tracks[0].id));
      }
    }
    // dispatch(getAllTasksAction());
  }, [user]);

  // if (tasksState.error) {
  //   return 'Error';
  // }
  return (
    <React.Fragment>
      {tasksState.data && !tasksState.loading ? (
        <React.Fragment>
          <PendingTasks
            tasksData={tasksState.data}
            taskTableHeader={'Pending Tasks'}
          />
        </React.Fragment>
      ) : (
        <p>No tasks yet!!</p>
      )}

      {tasksState.menteeSubmittedTasks &&
      tasksState.menteeSubmittedTasks.items ? (
        <PendingTasks
          tasksData={tasksState.menteeSubmittedTasks}
          completed={true}
          taskTableHeader={'Completed Tasks'}
        />
      ) : null}

      {tasksState.loading ? <CustomLoader /> : null}
    </React.Fragment>
  );
}

export default DashboardLayout(PendingTasksPage);
