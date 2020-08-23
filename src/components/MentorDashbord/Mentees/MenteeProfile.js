import React, { useCallback, useEffect } from 'react';
import UserProfileStyled from './MenteeProfileStyled';
import UserCard from '../../common/UserCard/UserCard';
import MentorDashboardLayout from '../MentorDashboardHOC';

import PendingTasksCard from '../common/PendingTasksCard';
import {
  getSingleMenteeProfile,
  getUserMenteesProfileApi,
} from '../../../state/user/userActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from '../../MenteeDashboard/userProfile/UserProfile';
import CustomLoader from '../../common/Spinner/CustomLoader';

function MenteeProfile(props) {
  const dispatch = useDispatch();
  const userId = props.match.userID;
  const user = useSelector(state => state.user);

  const fetchMentee = useCallback(() => {
    if (!user.mentees) {
      dispatch(getUserMenteesProfileApi());
    }
    dispatch(getSingleMenteeProfile(userId));
  }, []);

  useEffect(() => {
    fetchMentee();
  }, []);

  const Tracks = [
    {
      icon: <i class="far fa-check-circle"></i>,
      title: 'Develop an API for a page',
    },
    {
      icon: <i class="far fa-check-circle"></i>,
      title: 'Build a Tribute page',
    },
    {
      icon: <i class="far fa-check-circle"></i>,
      title: 'Mobile Development',
    },
    {
      icon: <i class="far fa-check-circle"></i>,
      title: 'Desktop Development',
    },
    {
      icon: <i class="far fa-check-circle"></i>,
      title: 'Ui/UX',
    },
  ];

  const data = {
    role: 'ADMIN',
    id: '5ed8391c6ee42f00178d4518',
    updatedAt: '2020-07-10T16:58:51.865Z',
    createdAt: '2020-06-03T23:05:57.055Z',
    firstName: 'Onasanya',
    lastName: 'Tunde',
    email: 'onasanyatunde67@gmail.com',
    description: null,
    phoneNumber: null,
    technologies: [],
    photoUrl:
      'https://res.cloudinary.com/codeclannigeria/image/upload/v1594255930/ccn/avatars/5ed8391c6ee42f00178d4518.jpg',
    tasks: [],
  };
  return (
    <>
      {user ? (
        <>
          {user.singleMentee ? (
            <UserProfile data={user.singleMentee} loading={user.loading} />
          ) : (
            <UserProfile data={data} loading={user.loading} />
          )}
        </>
      ) : null}
    </>

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
