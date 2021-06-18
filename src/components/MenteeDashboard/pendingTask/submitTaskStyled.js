import styled from 'styled-components';

const SubmitTaskStyled = styled.div`
  .card {
    background: #fbfcff;
    border: 0.25px solid rgba(31, 89, 187, 0.3);
    box-shadow: 0px 4px 15px rgba(31, 89, 187, 0.1);
  }
  .card-body {
    min-height: auto !important;
    background: #fbfcff;
  }

  .card-header {
    background: #fbfcff;
    border-bottom: 1px solid #2f2e41;
  }
  .submit-card-header {
    background: rgba(178, 200, 237, 0.5);
    box-shadow: 0px 4px 15px rgba(31, 89, 187, 0.1);
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    padding: 1rem;
    margin: 0;
  }
  /* .tasks {
    background: #fbfcff;
    border: 0.25px solid #1f59bb;
    box-shadow: 0px 4px 15px rgba(31, 89, 187, 0.1);
  } */

  .submitTask .card {
    background: #fbfcff;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;

    /* identical to box height */

    color: #263238;
  }
  .submitTask .card .form-control {
    background: rgba(225, 230, 237, 0.2);
    border: 1px solid rgba(21, 61, 128, 0.2);
    border-radius: 5px;
  }

  .urlInput {
    height: 4rem;
  }

  .submitTask .card form p.text-center .btn {
    background: #1f59bb;
  }

  textarea {
    resize: none;
  }

  form a:nth-child(2) {
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;

    /* identical to box height */
    text-decoration-line: underline;

    color: #1f59bb;
  }

  .border-green {
    border: 1px solid #52c41a;
  }
`;

export default SubmitTaskStyled;
