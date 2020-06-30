import styled from 'styled-components';

const CoursesListStyled = styled.div`
  .courses {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 4.7rem;
  }

  .courses > .card {
    border-radius: 6.5px;
  }

  .courses > .card .card-buttons {
    display: flex;
    justify-content: space-between;
  }

  .courses > .card .card-buttons > button {
    width: 47%;
  }

  .courses > .card .card-buttons > button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .courses > .card .card-buttons > .btn-delete {
    border: 1.4px solid #0050af;
    color: #0050af;
  }

  .courses > .card .card-buttons > .btn-delete:hover {
    background-color: #0050af;
    color: #fff;
  }

  .courses > .card .card-buttons > .btn-edit {
    background-color: #0050af;
    border: none;
  }

  .add-new-course {
    border: 2px dashed #0050af;
  }

  .add-new-course > div > button {
    border: none;
    background: none;
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
