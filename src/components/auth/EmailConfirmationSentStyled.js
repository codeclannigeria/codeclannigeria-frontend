import styled from 'styled-components';

const ConfirmedStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */

  .details {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr;

    .details {
      order: 1;
    }
  }
`;

export default ConfirmedStyled;
