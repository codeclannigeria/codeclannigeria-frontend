import styled from 'styled-components';

export const DashboardStyled = styled.div`
  .bg-blue {
    background-color: ${props => props.theme.primaryColor};
  }

  .text-blue {
    color: ${props => props.theme.primaryColor};
  }

  .nav-link {
    padding: 0;
  }

  .main-top {
    margin-bottom: 2rem;
    padding: 0.75rem;
    background: #5e81f4;
    color: #ffffff;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    position: relative;
    background-image: url('../img/card_back.png');
    background-size: 100%;
    background-repeat: no-repeat;
    max-height: 17rem;
    max-width: 1198px;
  }

  .ellipse_top {
    position: absolute;
    top: -2rem;
    left: -32px;
  }

  .user__name {
    font-size: 20px;
    line-height: 23px;
    font-weight: 600;
  }
  .user__welcome {
    padding-left: 2rem;
  }
  .get__started > button {
    /* background: rgba(255, 255, 255, 0.25); */
    border-radius: 8px;
    border: none;
    padding: 0.5rem 2rem;
  }

  .slack__btn {
    background: rgba(255, 255, 255, 0.25);
    border-radius: 8px;
    border: none;
    padding: 0.5rem 2rem;
  }

  #close__user__info {
    color: #fff;
    position: absolute;
    top: 1rem;
    right: 3rem;
    cursor: pointer;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
  }

  .cards .card {
    background: #fbfcff;
    box-shadow: 0px 4px 15px rgba(31, 89, 187, 0.1);
    border: none;
    height: 148px;
    border-radius: 10px;
  }

  .cards .card .card-body {
    display: flex;
    justify-content: space-evenly;
    /* justify-content: space-evenly; */
    align-items: center;
  }

  .card-body h6 > span {
    font-weight: 900;
    font-size: 25px;
  }

  .card-image {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-image-1 {
    background: rgba(31, 89, 187, 0.2);
  }

  .card-image-2 {
    background: rgba(172, 87, 184, 0.2);
  }

  .card-image-3 {
    background: rgba(246, 96, 154, 0.2);
  }

  .cards .card .mentor-card h6 > span {
    color: rgb(31, 89, 187);
  }

  .cards .card .mentor-card > img {
    background-color: rgba(31, 89, 187, 0.2);
  }

  .cards .card .resource-card h6 > span {
    color: rgb(172, 87, 184);
  }

  .cards .card .resource-card > img {
    background-color: rgba(172, 87, 184, 0.2);
  }

  .cards .card .task-card h6 > span {
    color: rgb(246, 96, 154);
  }

  .cards .card .task-card > img {
    background-color: rgba(246, 96, 154, 0.2);
  }

  .cards .card .progress-card > img {
    height: 80px;
    width: 80px;
  }

  .pending-tasks-wrap {
    background: #fbfcff;
    box-shadow: 0px 0px 4px rgba(31, 89, 187, 0.15);
    border-radius: 10px;
    margin-bottom: 90px;
  }

  .alert-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .alert-exit {
    opacity: 1;
  }
  .alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

  .alert-exit {
    opacity: 1;
  }
  .alert-exit-active {
    opacity: 0;
    transform: scale(0.4);
    transition: opacity 300ms, transform 300ms;
  }

  @media (max-width: 820px) {
    .dashboard-wrap {
      margin: 0;
    }
    .cards {
      grid-template-columns: 1fr 1fr;
    }

    .cards .card .card-body {
      flex-direction: column;
      text-align: center;
    }

    .card-image {
      width: 45px;
      height: 45px;
      border-radius: 30px;
      margin-bottom: 3px;
    }

    .top-nav {
      justify-content: flex-end;
    }

    .hamburger-menu {
      display: block;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    .display-profile {
      margin-left: 1rem;
    }

    .display-profile p {
      display: none;
    }
  }
`;
