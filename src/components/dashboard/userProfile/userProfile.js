import React from 'react';
import UserProfileStyled from './userProfileStyled';
import DashboardLayout from '../../common/DashboardLayout';

function UserProfile() {
  return (
    <UserProfileStyled>
      <div className="personal--details--card">
        <div className="user__personal__details">
          <img
            src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
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
            <i class="far fa-envelope"></i>
            <span>Ibadan, Nigeria</span>
          </div>
          <div>
            <i class="fas fa-map-marker-alt"></i>
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
        <div className="resume__container"></div>
      </div>
    </UserProfileStyled>
  );
}

export default DashboardLayout(UserProfile);
