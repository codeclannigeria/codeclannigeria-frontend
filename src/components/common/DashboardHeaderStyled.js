import styled from 'styled-components';

const DashboardHeaderStyled = styled.div`
  .top-bar {
    margin: 0 auto;
    width: 100%;
  }

  .top-nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .user__details {
    display: flex;
    align-items: center;
    margin-right: 2rem;
  }

  .top-bar nav .input-group .input-group-append > button:hover {
    background: #1f59bb;
    opacity: 0.9;
  }

  .input-group {
    margin: 0 auto;
    width: 50%;
  }

  .top-bar .display-profile {
    display: flex;
  }

  .top-bar .display-picture {
    border-radius: 200px;
    width: 50px;
    height: 50px;
    background: #fff;
  }

  .profile-summary {
    background-image: url('img/svgs/profile-summary-bg.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    min-height: 20%;
    background-position: 50% 50%;
    margin-top: 20px;
    position: relative;
  }

  .profile-summary > p {
    color: #fff;
    position: absolute;
    top: 36px;
    left: 60px;
    width: 90%;
    min-height: 100%;
  }

  .hamburger-menu {
    display: none;
  }

  @media (max-width: 820px) {
    .top-nav {
      justify-content: flex-end;
    }

    .user__details {
      margin-right: 3rem;
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

export default DashboardHeaderStyled;
