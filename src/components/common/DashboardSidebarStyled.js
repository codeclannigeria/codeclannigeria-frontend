import styled from 'styled-components';

const DashboardSidebarStyled = styled.div`
  nav {
    background-color: ${props => props.theme.primaryColor};
    text-align: center;
    max-width: 115px;
    height: 100%;
    padding: 0;
  }
  nav div {
    text-align: center;
  }

  .active-icon {
    background: #1d488f;

    min-height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    box-shadow: inset 5px 0px #0e2855;
  }

  @media (max-width: 820px) {
    .sidebar {
      position: absolute;
      z-index: 1;
      transition: transform 0.3s ease-in-out;
      transform: ${({ showSidebar }) =>
        showSidebar ? 'translateX(0)' : 'translateX(-100%)'};
    }
  }
`;

export default DashboardSidebarStyled;
