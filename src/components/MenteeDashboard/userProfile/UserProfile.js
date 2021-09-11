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
  const Tracks = [
    {
      icon: <i className="far fa-check-circle"></i>,
      title: 'Frontend Development',
    },
    {
      icon: <i className="far fa-check-circle"></i>,
      title: 'Backend Development',
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
  console.log(Tracks);

  const SocialMedia = [
    {
      icon: <i className="fab fa-twitter"></i>,
      title: 'Twitter',
    },
    {
      icon: <i className="fab fa-dribbble"></i>,
      title: 'Dribble',
    },
    {
      icon: <i className="fab fa-behance"></i>,
      title: 'Behance',
    },
    {
      icon: <i className="fab fa-linkedin-in"></i>,
      title: 'LinkedIn',
    },
    {
      icon: <i className="fab fa-github"></i>,
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
