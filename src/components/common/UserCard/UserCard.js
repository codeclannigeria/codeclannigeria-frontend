import React, { useEffect } from 'react';
import UserCardStyled from './UserCardStyled';
import ProfileImageUpload from '../../MenteeDashboard/userProfile/image';
import { useState } from 'react';
import EditProfileForm from '../../MenteeDashboard/userProfile/EditProfileForm';
import decode from 'jwt-decode';

function UserCard({ data, mode, editProfile }) {
  const {
    photoUrl,
    firstName,
    lastName,
    email,
    phoneNumber,
    description,
    city,
    country,
    id,
    track,
  } = data;
  const [showImageEdit, setshowImageEdit] = useState(null);
  const [visible, setVisible] = useState(false);
  const checkAuth = () => {
    const token = localStorage.getItem('codeclan_token');

    if (!token) return false;

    try {
      const { userId } = decode(token);
      return userId;
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    if (editProfile) {
      setVisible(true);
    }
    // if (!photoUrl) {
    //   photoUrl =
    //     'https://cdn.imgbin.com/3/1/2/imgbin-united-states-computer-icons-desktop-free-high-quality-person-icon-default-profile-2aZui7ZnCtjpD6FkTi5Cz55r4.jpg';
    // }
  }, []);
  const onCreate = values => {
    setVisible(false);
    setshowImageEdit(false);
  };

  return (
    <UserCardStyled>
      <div className="personal--details--card">
        {data && mode === 'mentee' && checkAuth() === id ? (
          <>
            <div className="edit-button">
              <i
                onClick={() => {
                  setVisible(true);
                }}
                class="fas fa-user-edit float-right "
              ></i>
            </div>

            <EditProfileForm
              visible={visible}
              onCreate={onCreate}
              initialData={data}
              onCancel={() => {
                setVisible(false);
              }}
            />
          </>
        ) : null}
        <div className="user__personal__details">
          <div className="img__wrap">
            <img
              src={
                photoUrl ||
                'https://cdn.imgbin.com/3/1/2/imgbin-united-states-computer-icons-desktop-free-high-quality-person-icon-default-profile-2aZui7ZnCtjpD6FkTi5Cz55r4.jpg'
              }
              alt="user"
              // onMouseEnter={() => setshowImageEdit(true)}
              className={`rounded-circle user__image `}
            />
            <div class="img__description">
              <i class="fas fa-camera"></i>
              {mode === 'mentee' && checkAuth() === id ? (
                <>
                  <button
                    class="btn btn-sm"
                    onClick={() => setshowImageEdit(true)}
                  >
                    Change Picture
                  </button>
                  <ProfileImageUpload
                    visible={showImageEdit}
                    photoUrl={
                      photoUrl
                        ? photoUrl
                        : 'https://cdn.imgbin.com/3/1/2/imgbin-united-states-computer-icons-desktop-free-high-quality-person-icon-default-profile-2aZui7ZnCtjpD6FkTi5Cz55r4.jpg'
                    }
                    name={lastName}
                    onCreate={onCreate}
                  />{' '}
                </>
              ) : null}
            </div>
          </div>
          <div className="user__details">
            <p className="user__name">
              {firstName} {lastName}
            </p>
          </div>

          <p className="user__track">{track ? track[0].name : null}</p>
        </div>

        <hr />
        <div className="user__contact__info">
          <div>
            <i class="fas fa-map-marker-alt"></i>
            <span>{city || country ? `${city}, ${country}` : null}</span>
          </div>
          <div>
            <i class="far fa-envelope"></i>
            <span>{email}</span>
          </div>
          <div>
            <i class="fas fa-phone-alt"></i>
            <span>{phoneNumber}</span>
          </div>
        </div>
        <hr />
        <div className="text-center edit__profile__btn__container">
          {description}
        </div>
      </div>
    </UserCardStyled>
  );
}

export default UserCard;
