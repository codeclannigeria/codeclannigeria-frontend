import styled from 'styled-components';

const CoursesListStyled = styled.div`
  .courses {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 4.7rem;
  }

  @media (max-width: 1164px) {
    .courses {
      grid-row-gap: 4.5rem;
    }
  }
  @media (max-width: 820px) {
    .courses {
      grid-row-gap: 1rem;
    }
  }

  @media (max-width: 767px) {
    .courses {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 1rem;
    }
  }
`;

export default CoursesListStyled;
