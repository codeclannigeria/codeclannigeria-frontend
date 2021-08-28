import React, { useEffect, useCallback } from 'react';
import DashboardLayout from '../../common/DashboardLayout';
import { getUserMentorProfileApi } from '../../../state/user/userActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from '../userProfile/UserProfile';
function MentorDetails() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const fetchMentor = useCallback(() => {
    if (user) {
      if (!user.mentor) {
        dispatch(getUserMentorProfileApi());
      }
    }
  }, [user, dispatch]);
  useEffect(() => {
    fetchMentor();
  }, [fetchMentor]);


  return (
    <React.Fragment>
      {user ? (
        <React.Fragment>
          {user.mentor && user.mentor.length > 0 ? (
            <UserProfile data={user.mentor[0]} loading={user.loading} />
          ) : null}
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}

export default DashboardLayout(MentorDetails);
