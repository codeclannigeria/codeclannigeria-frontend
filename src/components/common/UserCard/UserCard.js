import React from 'react';
import UserCardStyled from './UserCardStyled';
import ProfileImageUpload from '../../MenteeDashboard/userProfile/image';
import { useState } from 'react';
import EditProfileForm from '../../MenteeDashboard/userProfile/EditProfileForm';

function UserCard({ data, mode }) {
  const {
    photoUrl,
    firstName,
    lastName,
    email,
    phoneNumber,
    description,
    city,
    country,
  } = data;
  const [showImageEdit, setshowImageEdit] = useState(null);
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    setVisible(false);
    setshowImageEdit(false);
  };

  return (
    <UserCardStyled>
      <div className="personal--details--card">
        {data && mode === 'mentee' ? (
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
              src={photoUrl}
              alt="user"
              // onMouseEnter={() => setshowImageEdit(true)}
              className={`rounded-circle user__image `}
            />
            <div class="img__description">
              <i class="fas fa-camera"></i>
              {photoUrl && mode === 'mentee' ? (
                <>
                  <button
                    class="btn btn-sm"
                    onClick={() => setshowImageEdit(true)}
                  >
                    Change Picture
                  </button>
                  <ProfileImageUpload
                    visible={showImageEdit}
                    photoUrl={photoUrl}
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

          <p className="user__track">Frontend Track</p>
        </div>

        <hr />
        <div className="user__contact__info">
          <div>
            <i class="fas fa-map-marker-alt"></i>
            <span>
              {city}, {country}
            </span>
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
