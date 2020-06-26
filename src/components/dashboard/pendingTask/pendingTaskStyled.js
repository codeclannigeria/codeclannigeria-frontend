import styled from 'styled-components';

const pendingTaskStyled = styled.div`
  .pending-task {
    height: 80px;
  }

  .task-box {
    padding: 5px 0;
    height: 80px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
  }

  .task-name {
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    color: #000000;
  }

  .task-track {
    text-align: center;
    max-width: 80px;
    background: #ffa8a7;
    border-radius: 5px;
    padding: 0 2px;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #ffffff;
  }

  .task-deadline p {
    line-height: 80px;
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

  @media (max-width: 600px) {
    .pending-task {
      height: 120px;
    }

    .task-box {
      padding: 5px 0;
      height: 120px;
      display: block;
    }
    .task-deadline p {
      align-self: center;
      margin-top: 20px;
      line-height: 0;
    }
  }
`;

export default pendingTaskStyled;
