import styled from 'styled-components';

const StagesListStyled = styled.div`
  .stages {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 4.7rem;
  }

  @media (max-width: 1164px) {
    .stages {
      grid-row-gap: 4.5rem;
    }
  }
  @media (max-width: 820px) {
    .stages {
      grid-row-gap: 1rem;
    }
  }

  @media (max-width: 767px) {
    .stages {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 1rem;
    }
  }
`;

export default StagesListStyled;
