import React, { useEffect } from 'react';
import DashboardLayout from '../../common/DashboardLayout';
import PendingTasks from './pendingTasks';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasksAction } from '../../../state/tasks/tasksActionCreator';
import CustomLoader from '../../common/Spinner/CustomLoader';

function PendingTasksPage() {
  const tasksState = useSelector(state => state.tasks);
  const tracks = useSelector(state => state.user.data.tracks);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!tasksState.data) {
      if (tracks.length >= 1) {
        dispatch(getAllTasksAction(tracks[0].id));
      }
    }
    // dispatch(getAllTasksAction());
  }, []);

  if (tasksState.error) {
    return 'Errror';
  }
  return (
    <>
      {!tasksState.loading ? (
        <PendingTasks tasksData={tasksState.data} />
      ) : (
        <CustomLoader />
      )}
    </>
  );
}

export default DashboardLayout(PendingTasksPage);
