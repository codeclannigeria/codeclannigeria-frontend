import styled from 'styled-components';

const SubmitTaskStyled = styled.div`
  .tasks {
    background: #fbfcff;
    border: 0.25px solid #1f59bb;
    box-shadow: 0px 4px 15px rgba(31, 89, 187, 0.1);
  }

  .submitTask .card {
    background: #fbfcff;
  }
  .submitTask .card .form-control {
    background: rgba(225, 230, 237, 0.2);
    border: 1px solid rgba(21, 61, 128, 0.2);
    border-radius: 5px;
  }

  .submitTask .card form p.text-center .btn {
    background: #1f59bb;
  }
`;

export default SubmitTaskStyled;
