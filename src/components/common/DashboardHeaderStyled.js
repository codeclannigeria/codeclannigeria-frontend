import styled from 'styled-components';

const DashboardHeaderStyled = styled.div`
  .bg-blue {
    background-color: ${props => props.theme.primaryColor};
  }

  .text-blue {
    color: ${props => props.theme.primaryColor};
  }

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

  .display-profile {
    display: flex;
  }

  .display-picture {
    background: #fff;
    padding: 0 1rem;
  }

  .display-picture img {
    border-radius: 16px;
    width: 32px;
    height: 32px;
    border: 1px solid ${props => props.theme.primaryColor};
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
      top: 1.5rem;
      right: 1.2rem;
    }

    .display-profile {
      margin-left: 1rem;
    }
  }
`;

export default DashboardHeaderStyled;
