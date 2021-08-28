import React, { useCallback, useEffect } from 'react';
import MentorDashboardLayout from '../MentorDashboardHOC';

import {
  getSingleMenteeProfile,
  getUserMenteesProfileApi,
} from '../../../state/user/userActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from '../../MenteeDashboard/userProfile/UserProfile';


function MenteeProfile(props) {
  const dispatch = useDispatch();
  const userId = props.match.params.userID;
  const user = useSelector(state => state.user);

  const fetchMentee = useCallback(() => {
    if (!user.mentees) {
      dispatch(getUserMenteesProfileApi());
    }
    dispatch(getSingleMenteeProfile(userId));
    // Because we used user.mentee and I don't want it to run into an error on initial load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchMentee();
  }, [fetchMentee]);


  return (
    <React.Fragment>
      {user ? (
        <React.Fragment>
          {
            user.singleMentee ? (
              <UserProfile data={user.singleMentee[0]} loading={user.loading} />
            ) : null
            // <UserProfile data={data} loading={user.loading} />
          }
        </React.Fragment>
      ) : null}
    </React.Fragment>

    // <UserProfileStyled>
    //   <UserCard data={data} mode="mentor" />
    //   <div>
    //     <PendingTasksCard header="Tasks Assigned" data={Tracks} />
    //     <PendingTasksCard header="Tasks Completed" data={Tracks} />
    //   </div>
    // </UserProfileStyled>
  );
}

export default MentorDashboardLayout(MenteeProfile);
