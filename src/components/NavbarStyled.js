import styled from 'styled-components';

const StyledNav = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    padding: 0rem 4rem;
    align-items: center;
    background: blue;
    max-height: 5rem;
  }
  header {
    display: flex;
    padding-top: 1rem;
  }
  ul {
    list-style-type: none;
  }
  nav ul {
    display: flex;
    align-items: center;
  }
  nav ul li {
    list-style: none;
    margin: 0 10px;
  }

  @media (max-width: 787px) {
    header {
      display: flex;
      flex-direction: column;
    }

 

    @media (max-width: 600px) {
    nav {
      padding: 0rem 1rem;
    }

 

`;
export default StyledNav;
