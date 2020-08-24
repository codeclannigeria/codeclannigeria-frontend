import React, { useEffect, useCallback } from 'react';
import { MentorDetailsStyled } from './mentorDetailsStyled';
import DashboardLayout from '../../common/DashboardLayout';
import UserProfileStyled from '../userProfile/userProfileStyled';
import UserCard from '../../common/UserCard/UserCard';
import InfoCardBig from '../userProfile/InfoCardBig';
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
  }, []);
  useEffect(() => {
    fetchMentor();
  }, [fetchMentor]);

  const Tracks = [
    {
      icon: <i class="far fa-check-circle"></i>,
      title: 'Frontend Development',
    },
    {
      icon: <i class="far fa-check-circle"></i>,
      title: 'Backend Development',
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

  const SocialMedia = [
    {
      icon: <i class="fab fa-twitter"></i>,
      title: 'Twitter',
    },
    {
      icon: <i class="fab fa-dribbble"></i>,
      title: 'Dribble',
    },
    {
      icon: <i class="fab fa-behance"></i>,
      title: 'Behance',
    },
    {
      icon: <i class="fab fa-linkedin-in"></i>,
      title: 'LinkedIn',
    },
    {
      icon: <i class="fab fa-github"></i>,
      title: 'Github',
    },
  ];

  // const data = {
  //   role: 'ADMIN',
  //   id: '5ed8391c6ee42f00178d4518',
  //   updatedAt: '2020-07-10T16:58:51.865Z',
  //   createdAt: '2020-06-03T23:05:57.055Z',
  //   firstName: 'Onasanya',
  //   lastName: 'Tunde',
  //   email: 'onasanyatunde67@gmail.com',
  //   description: null,
  //   phoneNumber: null,
  //   technologies: [],
  //   photoUrl:
  //     'https://res.cloudinary.com/codeclannigeria/image/upload/v1594255930/ccn/avatars/5ed8391c6ee42f00178d4518.jpg',
  //   tasks: [],
  // };

  return (
    <>
      {user ? (
        <>
          {user.mentor && user.mentor.length > 1 ? (
            <UserProfile data={user.mentor[0]} loading={user.loading} />
          ) : null}
        </>
      ) : null}
    </>
  );
}

export default DashboardLayout(MentorDetails);
