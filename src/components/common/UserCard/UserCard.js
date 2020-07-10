import React from 'react';
import UserCardStyled from './UserCardStyled';
import ProfileImageUpload from '../../dashboard/userProfile/image';
import { useState } from 'react';
import EditProfileForm from '../../dashboard/userProfile/EditProfileForm';

function UserCard({ data, mode }) {
  const { photoUrl, firstName, lastName, email } = data;
  const [showImageEdit, setshowImageEdit] = useState(null);
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    setVisible(false);
    setshowImageEdit(false);
  };

  return (
    <UserCardStyled>
      <div className="personal--details--card">
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
            <span>Ibadan, Nigeria</span>
          </div>
          <div>
            <i class="far fa-envelope"></i>
            <span>{email}</span>
          </div>
        </div>
        <hr />
        <div className="text-center edit__profile__btn__container">
          {mode === 'mentor' ? (
            <button
              className="btn btn-lg edit__profile__btn"
              onClick={() => {
                setVisible(true);
              }}
            >
              Promote to Next Stage
            </button>
          ) : null}
          {data && mode === 'mentee' ? (
            <>
              <button
                className="btn btn-lg edit__profile__btn"
                onClick={() => {
                  setVisible(true);
                }}
              >
                Edit profile
              </button>
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
        </div>
      </div>
    </UserCardStyled>
  );
}

export default UserCard;
