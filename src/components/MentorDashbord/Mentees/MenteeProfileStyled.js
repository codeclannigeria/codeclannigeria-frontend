import styled from 'styled-components';

const UserProfileStyled = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 2rem;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
  }
`;

export default UserProfileStyled;
