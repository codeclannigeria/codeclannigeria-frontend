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
      if (user.data.tracks && user.data.tracks.length > 1) {
        dispatch(getAllTasksAction(user.data.tracks[0].id));
      }
    }
    // dispatch(getAllTasksAction());
  }, [user]);

  // if (tasksState.error) {
  //   return 'Error';
  // }
  return (
    <>
      {tasksState.data ? (
        <PendingTasks tasksData={tasksState.data} />
      ) : (
        <p>No tasks yet!!</p>
      )}

      {tasksState.loading ? <CustomLoader /> : null}
    </>
  );
}

export default DashboardLayout(PendingTasksPage);
