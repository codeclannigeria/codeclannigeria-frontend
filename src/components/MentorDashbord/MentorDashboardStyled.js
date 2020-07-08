import styled from 'styled-components';
const MentorDashboardStyled = styled.div`
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

  th {
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 19px !important;
    padding: 1rem 1rem !important;
    /* identical to box height, or 160% */

    color: #032041 !important;
  }
  td {
    font-size: 14px;
    line-height: 15px;
    padding: 1rem 1rem !important;
    color: #5f6881;
    background: #ffffff;
    box-shadow: 0px 2px 1px rgba(225, 230, 235, 0.3);
  }

  .ant-table-thead > tr > th {
    background: #ffffff;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }

  .mentee-table {
    background: #ffffff;
    opacity: 0.5;

    /* grey-500 */
    border: 1px solid #e1e6eb;
    box-sizing: border-box;
    border-radius: 5px;
    color: #5f6881;
  }
  @media (max-width: 820px) {
    .dashboard-wrap {
      margin: 0;
    }
  }
`;

export default MentorDashboardStyled;
