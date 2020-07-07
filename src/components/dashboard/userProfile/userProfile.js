import React from 'react';
import UserProfileStyled from './userProfileStyled';
import DashboardLayout from '../../common/DashboardLayout';
import { useState } from 'react';
import InfoCardBig from './InfoCardBig';

function UserProfile() {
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
      <div className="personal--details--card">
        <div className="user__personal__details">
          <img
            src="https://onasanyatunde.codes/onasanya_tunde.jpg"
            alt="user"
            className="rounded-circle user__image"
          />
          <div className="user__details">
            <p className="user__name">Onasanya Tunde</p>

            <p className="user__track">Frontend Track</p>
          </div>
        </div>

        <hr />
        <div className="user__contact__info">
          <div>
            <i class="fas fa-map-marker-alt"></i>
            <span>Ibadan, Nigeria</span>
          </div>
          <div>
            <i class="far fa-envelope"></i>
            <span>codeclan@gmail.com</span>
          </div>
        </div>
        <hr />
        <div className="text-center edit__profile__btn__container">
          <button className="btn btn-lg edit__profile__btn">
            Edit profile
          </button>
        </div>
      </div>

      <div className="public__info__grid">
        <InfoCardBig header="Tracks Completed" data={Tracks} />
        <InfoCardBig header="Skillsets" data={SocialMedia} />

        {/* <div className="list__container">
          <div className="list_header">
            <p>Tracks Completed</p>
            <i class="fas fa-plus"></i>
          </div>
          <div
            className="list-item"
            onMouseEnter={() => setshowEdit(true)}
            onMouseLeave={() => setshowEdit(false)}
          >
            <div className="list-item-name">
              <i class="far fa-check-circle"></i>
              <span>Frontend Development</span>
            </div>
            <div className={`edit__item ${showEdit ? 'd-block' : 'd-none'}`}>
              <i class="fas fa-pencil-alt"></i>
            </div>
          </div>
        </div> */}
      </div>
    </UserProfileStyled>
  );
}

export default DashboardLayout(UserProfile);
