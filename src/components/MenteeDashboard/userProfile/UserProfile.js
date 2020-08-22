import React from 'react';
import UserProfileStyled from './userProfileStyled';
import DashboardLayout from '../../common/DashboardLayout';
import InfoCardBig from './InfoCardBig';
import { connect } from 'react-redux';

import UserCard from '../../common/UserCard/UserCard';
import { message } from 'antd';

function UserProfile({ loading, data, location }) {
  const { state } = location;
  let editProfile = false;
  if (state) {
    editProfile = state.editProfile;
    message.warning('Update your profile to continue');
  }
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

  return (
    <UserProfileStyled>
      <UserCard data={data} mode="mentee" editProfile={editProfile} />
      <div className="public__info__grid">
        <InfoCardBig header="Tracks Completed" data={Tracks} />
        <InfoCardBig header="Social Media" data={SocialMedia} />
      </div>
    </UserProfileStyled>
  );
}

export default UserProfile;
