import styled from 'styled-components';

const active = `    background: #004699;
`;
const MentorDashboardSidebarStyled = styled.div`
  width: 10rem;
  position: absolute;
  top: 0;
  background: #0050af;
  display: flex;
  color: #fff;
  flex-direction: column;
  /* padding: 1rem; */
  transition: transform 0.3s ease-in-out;

  padding-bottom: 33.5rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;

  display: flex;
  /* align-items: center; */
  letter-spacing: 0.01em;

  color: #ffffff;
  z-index: 999;

  ul {
    list-style-type: none;
    padding: 2rem 0;
    margin: 0;
  }

  a {
    color: #fff;
    font-weight: 700;

    :hover {
      text-decoration: none;
    }
  }

  img {
    margin: 0 auto;
    padding: 1rem;
  }

  .main-menu-link {
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    :hover {
      ${active};
    }
  }

  .sub-menu {
    padding: 1.5rem 0 1rem 2.5rem;

    :hover {
      padding-top: 1rem;
      padding-bottom: 1rem;
      ${active};
    }
  }

  .logout__link {
    position: absolute;
    bottom: 6rem;
    left: 1rem;
  }

  .btn-primary {
    background: #004699;
    border-radius: 5px;
    border: none;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 820px) {
    transition: transform 0.3s ease-in-out;
    transform: ${({ showSidebar }) =>
      showSidebar ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

export default MentorDashboardSidebarStyled;
