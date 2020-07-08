import styled from 'styled-components';

const UserProfileStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 2rem;
  .personal--details--card {
    background: #ffffff;
    box-shadow: 2px 8px 20px rgba(181, 181, 181, 0.2);
    border-radius: 5px;
    /* max-width: 325px; */

    height: 60%;
  }

  .user__personal__details {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .img__wrap {
    position: relative;
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
  }
  .user__image {
    width: 12rem;
    :hover {
      /* width: 1rem; */
      /* background-color: rgba(181, 181, 181, 0.2); */
    }
  }

  .img__description {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(29, 106, 154, 0.72);
    color: #fff;
    visibility: hidden;
    opacity: 0;

    border-radius: 50% !important;
    height: 12rem;
    width: 12rem;
    display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

    border-radius: 50%;
    /* display: inline-block; */

    /* transition effect. not necessary */
    transition: opacity 0.2s, visibility 0.2s;

    button, i{  
    display: flex;
    align-items: center;
    justify-content: center;
}
button{
padding:2rem;
}
    }
  }

  .img__wrap:hover .img__description {
    visibility: visible;
    opacity: 1;
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
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;

    .personal--details--card {
      /* max-width: 325px; */
      height: 100%;
    }
  }

  @media (min-width: 800px) {
    .personal--details--card {
      /* max-width: 325px; */
    }
  }
`;

export default UserProfileStyled;
