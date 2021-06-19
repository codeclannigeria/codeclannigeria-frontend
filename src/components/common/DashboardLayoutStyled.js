import styled from 'styled-components';

const DashboardLayoutStyled = styled.div`
  .dashboard-wrap {
    display: flex;
    justify-content: space-between;
    margin-left: 3rem;
    margin-right: 0;
  }

  .dashboard-content {
    margin: 0 auto;
  }
  .active-page {
    font-weight: 600;
    background: #fff;
    color: #1f59bb;
    border: 1px solid #1f59bb;
  }
  @media (max-width: 820px) {
    .dashboard-wrap {
      margin: 0;
    }
  }
`;

export default DashboardLayoutStyled;
