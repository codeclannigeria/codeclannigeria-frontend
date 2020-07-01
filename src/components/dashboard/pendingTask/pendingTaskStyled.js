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
    font-size: 18px;
  }

  .pending-tasks-wrap .solid-bar {
    background: rgba(200, 212, 233, 0.5);
    height: 30px;
  }

  .next-button {
    display: flex;
    justify-content: flex-end;
    width: 90%;
    margin: 0 auto;
    padding: 25px 0 10px 0;
  }

  .next-button p {
    width: 80px;
    background: #153d80;
    border-radius: 5px;
    text-align: center;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 30px;
  }

  .next-button p a {
    width: 80px;
    height: 30px;
    text-decoration: none;
    color: #ffffff;
  }

  button {
    float: right;
    margin-bottom: 1rem;
    border-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};
    :hover {
      color: #fff;
      background-color: ${props => props.theme.primaryColor};
      border-color: ${props => props.theme.primaryColor};
    }
  }
`;

export default PendingTaskStyled;
