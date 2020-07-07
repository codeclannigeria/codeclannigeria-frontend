import styled from 'styled-components';

const UserProfileStyled = styled.div`
  .personal--details--card {
    background: #ffffff;
    box-shadow: 2px 8px 20px rgba(181, 181, 181, 0.2);
    border-radius: 5px;
    max-width: 325px;
  }

  .user__personal__details {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .user__image {
    width: 12rem;
  }
  .user__details {
    /* identical to box height */
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
  .user__name {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    color: #084482;
    margin-bottom: 0.1rem;
  }

  .user__track {
    font-size: 16px;
    line-height: 24px;

    color: #4c5059;
  }

  .user__contact__info {
    font-size: 16px;
    line-height: 24px;
    color: #4c5059;
    padding: 0.25rem 2rem;
  }

  .user__contact__info span {
    margin-left: 1rem;
  }
  .user__contact__info > div {
    margin: 1rem 0;
  }

  .edit__profile__btn__container {
    padding: 2rem 0;
  }
  .edit__profile__btn {
    background: #00aeff;
    border-radius: 5px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;

    /* identical to box height */
    text-align: center;

    color: #ffffff;
    border-color: none;
  }

  hr {
    margin: 0;
  }
`;

export default UserProfileStyled;
