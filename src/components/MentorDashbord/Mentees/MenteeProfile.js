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
  }, []);

  useEffect(() => {
    fetchMentee();
  }, []);

  const Tracks = [
    {
      icon: <i className="far fa-check-circle"></i>,
      title: 'Develop an API for a page',
    },
    {
      icon: <i className="far fa-check-circle"></i>,
      title: 'Build a Tribute page',
    },
    {
      icon: <i className="far fa-check-circle"></i>,
      title: 'Mobile Development',
    },
    {
      icon: <i className="far fa-check-circle"></i>,
      title: 'Desktop Development',
    },
    {
      icon: <i className="far fa-check-circle"></i>,
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
