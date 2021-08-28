import React from 'react';
import UserProfileStyled from './userProfileStyled';
import InfoCardBig from './InfoCardBig';
import UserCard from '../../common/UserCard/UserCard';
import { message } from 'antd';

function UserProfile({ loading, data, location }) {
  let editProfile = false;
  if (location) {
    const { state } = location;
    if (state) {
      editProfile = state.editProfile;
      message.warning('Update your profile to continue');
    }
  }

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
        {/* <InfoCardBig header="Tracks Completed" data={Tracks} /> */}
        <InfoCardBig header="Social Media" data={SocialMedia} />
      </div>
    </UserProfileStyled>
  );
}

export default UserProfile;
