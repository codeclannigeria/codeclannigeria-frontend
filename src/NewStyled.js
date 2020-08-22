import styled from 'styled-components';

const StyledTeam = styled.div`
  .team-div {
    background-color: #112542;
    color: #397ea3;
  }
  .team-intro {
    width: 50%;
    padding: 30px 0px 30px 65px;
    font-family: sans-serif;
  }
  .team-intro-heading {
    font-size: 55px;
    color: #397ea3;
    border-bottom: 2px solid #397ea3;
  }
  .team-intro-subheading {
    font-size: 17px;
    color: #397ea3;
  }
  .colored-link {
    color: #36b8f2;
  }
  .muted-link {
    color: #225070;
  }

  @media only screen and (max-width: 768px) {
    .team-intro {
      width: 100%;
      padding-left: 0;
      padding: 35px 20px 0 20px;
    }
    .col-md-3 {
      margin: 20px 30px 0px 30px;
    }
    img {
      border-radius: 2%;
    }
    .col-md-3:nth-child(1) {
      margin-top: 0;
    }
    .team-intro-heading {
      font-size: 50px;
      color: #397ea3;
      border-bottom: 2px solid #397ea3;
    }
    .team-intro-subheading {
      font-size: 16px;
      margin-top: 30px;
      color: #397ea3;
    }
  }
`;
export default StyledTeam;
