import styled from 'styled-components';

const SinglePendingTaskStyled = styled.div`
  .pending-task {
    height: 80px;
    border-bottom: 1px solid rgba(31, 89, 187, 0.25);
  }

  .task-box {
    padding: 1rem;
    height: 80px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
  }

  .task-name {
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
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

 

  @media (max-width: 600px) {

    .task-box{
      display:block
    }
    .pending-task {
      width: 100%;
      height: auto;
      display:block
    }

    padding: 0rem 1rem;
    height: auto;
    display: flex;
    justify-content: start;
    align-items: center;
}
    .task-deadline p {
      align-self: center;
      /* margin-top: 20px; */
      line-height: 0;
      margin: 0;
    }
  }
`;

export default SinglePendingTaskStyled;
