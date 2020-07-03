import styled from 'styled-components';
const active = `    background: #1d488f;

min-height: 90px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
box-shadow: inset 5px 0px #0e2855;`;
const DashboardSidebarStyled = styled.div`
  .bg-blue {
    background-color: ${props => props.theme.primaryColor};
  }

  .text-blue {
    color: ${props => props.theme.primaryColor};
  }
  nav {
    background-color: ${props => props.theme.primaryColor};
    text-align: center;
    max-width: 115px;
    /* height: 100%; */
    padding: 0;
    height: 150%;
  }

  .nav-item:hover {
    ${active}
  }
  nav div {
    text-align: center;
  }

  .sidebar {
    position: absolute;
    z-index: 1;
    top: 0;
  }

  .active-icon {
    ${active}
  }

  @media (max-width: 820px) {
    .sidebar {
      transition: transform 0.3s ease-in-out;
      transform: ${({ showSidebar }) =>
        showSidebar ? 'translateX(0)' : 'translateX(-100%)'};
    }
  }
`;

export default DashboardSidebarStyled;
