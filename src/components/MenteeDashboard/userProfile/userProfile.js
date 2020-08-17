import React from 'react';
import UserProfileStyled from './userProfileStyled';
import DashboardLayout from '../../common/DashboardLayout';
import InfoCardBig from './InfoCardBig';
import { connect } from 'react-redux';

import UserCard from '../../common/UserCard/UserCard';

function UserProfile({ loading, data }) {
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
      <UserCard data={data} mode="mentee" />
      <div className="public__info__grid">
        <InfoCardBig header="Tracks Completed" data={Tracks} />
        <InfoCardBig header="Social Media" data={SocialMedia} />
      </div>
    </UserProfileStyled>
  );
}

const mapStateToProps = store => {
  const { loading, data, error, errResponse } = store.user;
  return {
    loading,
    data,
    error,
    errResponse,
  };
};

const mapDispatchToProps = {};

export default DashboardLayout(
  connect(mapStateToProps, mapDispatchToProps)(UserProfile)
);
