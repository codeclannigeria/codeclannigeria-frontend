import styled from 'styled-components';

const PendingTaskStyled = styled.div`
  .pending-tasks-wrap {
    background: #fbfcff;
    box-shadow: 0px 0px 4px rgba(31, 89, 187, 0.15);
    border-radius: 10px;
    margin-bottom: 90px;
    clear: both;
  }

  .pending-tasks-wrap .header p {
    font-weight: 600;
    padding: 1rem;
    margin: 0;
    font-size: 1.2rem;
  }

  .pending-tasks-wrap .solid-bar {
    background: rgba(200, 212, 233, 0.5);
    height: 30px;
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 1rem;
  }

  .next-button {
    padding: 0.1rem 2rem;
    margin: 1rem 0;
    border-color: ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.primaryColor};
    border-radius: 5px;
    text-align: center;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 30px;
    cursor: pointer;

    color: #fff;
    :hover {
      color: #fff;
      background-color: ${props => props.theme.primaryColor};
      border-color: ${props => props.theme.primaryColor};
    }
  }
  @media (max-width: 600px) {
    .pending-tasks-wrap .header p {
      padding: 1rem 2rem;
    }
  }
`;

export default PendingTaskStyled;
