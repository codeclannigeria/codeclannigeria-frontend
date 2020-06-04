import styled from "styled-components"

export const LandingStyled = styled.div`
  .btn-primary {
    background-color: ${(props) => props.theme.primaryColor};
  }
  .btn-outline-primary {
    border-color: ${(props) => props.theme.primaryColor};
  }

  .wrapper {
    background: #fff;
  }

  nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem 4rem;
    align-items: center;
    background: #fff;
  }
  nav ul {
    display: flex;
    align-items: center;
  }
  nav ul li {
    list-style: none;
    margin: 0 10px;
  }
  .header-about {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    justify-content: center;
    align-items: center;
  }
  .header__section {
    margin-bottom: 2rem;
  }
  .description__section {
    background: rgba(53, 151, 245, 0.1);
    width: 100%;
  }
  .clan_cards {
    width: 100%;
  }
  .description__cards {
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    width: 100%;
    height: 200px;
    margin-bottom: -8rem;
    margin-top: 7rem;
  }
  .description__card {
    background: rgba(31, 89, 187, 0.25);
    box-shadow: 0 4px 10px rgba(31, 89, 187, 0.15);
    border-radius: 10px;
    text-align: center;
    padding: 1rem;
    max-width: 230px;
    opacity: 0.8;
    height: 240px;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* position: relative; */
  }

  .description__goals {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 15rem;
  }
  .goals__texts {
    padding: 1rem;
  }
  .goals__texts a {
    color: #000;
  }

  .section-three > div {
    display: flex;
    justify-content: space-around;
    text-align: center;
    flex-wrap: wrap;
  }
  .section-three > div > div {
    flex-basis: 350px;
  }
  .section-three h2,
  .section-three p {
    padding: 2rem;
  }
  .bg-blue {
    background: #1f59bb !important;
  }
  ul {
    list-style-type: none;
  }
  header {
    display: flex;
    padding-top: 2.6rem;
  }
  a {
    text-decoration: none;
  }
  .section-three > div {
    display: flex;
    justify-content: space-around;
    text-align: center;
    flex-wrap: wrap;
  }
  .section-three > div > div {
    flex-basis: 350px;
  }
  .section-three h2,
  .section-three p {
    padding: 2rem;
  }
  .section-four {
    padding-bottom: 3rem;
  }
  .section-four .section-four-title {
    display: flex;
    justify-content: space-between;
    padding: 1.7rem 0;
    margin-top: 3rem;
  }
  .section-four .section-four-title a:hover {
    color: #1e1666;
  }
  .section-four .course-wrap {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .section-four .course-wrap .course div {
    width: 20rem;
    height: 20rem;
    background-color: #c4c4c4;
    border-radius: 0.4rem;
    margin: 1rem;
  }
  .section-four .course-wrap .course .para-1,
  .section-four .course-wrap .course .para-2,
  .section-four .course-wrap .course .para-3 {
    margin-left: 1rem;
    border-radius: 0.2rem;
    margin-top: 0.6rem;
  }
  .section-four .course-wrap .course .para-1 {
    width: 13rem;
    height: 1rem;
    background: #7d7d7d;
  }
  .section-four .course-wrap .course .para-2,
  .section-four .course-wrap .course .para-3 {
    width: 20rem;
    height: 0.5rem;
    background: #c4c4c4;
  }
  .section-four .course-wrap .course {
    margin-bottom: 2rem;
  }
  .section-four .tools-used {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .section-five {
    background: rgba(53, 151, 245, 0.1);
    padding: 7rem 0;
  }
  .section-five > div:first-child:nth-child(1) {
    color: #1e1666;
    margin-bottom: 3rem;
  }
  .section-five .testimonies {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
  .section-five div .testimony {
    background: #fff;
    width: 310px;
    min-height: 16rem;
    padding: 3rem;
    border-radius: 10px;
  }
  .section-five .testimonies .testimony .student-image {
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    box-shadow: 2px 3px 3px rgba(196, 196, 196, 0.25);
  }
  .section-five .testimonies .testimony-1 .student-image {
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    background: url("http://127.0.0.1:5500/img/svgs/Ellipse.svg");
  }
  .section-five .testimonies .testimony-2 .student-image {
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    background: url("http://127.0.0.1:5500/img/svgs/Ellipse-1.svg");
  }
  .section-five .testimonies .testimony-3 .student-image {
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    background: url("http://127.0.0.1:5500/img/svgs/Ellipse-2.svg");
  }
  .section-five .testimonies .testimony > div {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  .section-five > div:last-child {
    width: 70vw;
    padding-top: 4rem;
    margin: auto;
  }
  .section-five > div:last-child p {
    margin-bottom: 2rem;
  }
  .section-six {
    background: #051442;
    padding: 2rem 0rem;
  }
  .section-six h2 {
    padding-bottom: 2rem;
  }
  .section-six .footer-links-wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  .section-six li {
    line-height: 2;
  }
  .section-six a:hover {
    opacity: 0.7;
  }
  .section-six li,
  .section-six a {
    color: #fff;
    font-size: 0.9rem;
  }
  footer {
    background: #041139;
    padding: 2rem 0;
  }
  .bg-blue {
    background: #1f59bb !important;
  }
  .btn-md {
    padding: 0.75rem 2rem;
    width: 278px;
    border-radius: 10px;
    width: 278px;
    height: 50px;
    text-align: center;
  }
  .btn-md:hover {
    opacity: 0.92;
  }
  .text-sm {
    font-size: 0.9rem;
  }
  .text-md {
    font-size: 1.2rem;
  }
  .text-white {
    color: #fff;
  }
  .text-black {
    color: #000;
  }
  .text-center {
    text-align: center;
  }
  .footer-text-bold {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
  }
  @media (max-width: 960px) {
    .btn-md {
      padding: 0.5rem 0.5rem;
    }
    .section-five .testimonies {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      justify-items: center;
    }
    .section-five .testimonies > .testimony-3 {
      grid-column: 1/3;
    }
  }
  @media (max-width: 787px) {
    header {
      display: flex;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 700px) {
    .header-about {
      grid-template-columns: 1fr;
    }
    .header__about__text {
      order: 1;
    }
    .description__cards {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      margin-bottom: -8rem;
      margin-top: 6rem;
    }
    .description__card {
      max-height: 11rem;
    }
    .description__goals {
      flex-direction: column;
      padding-top: 20rem;
    }
  }
  @media (max-width: 600px) {
    .section-five .testimonies .testimony {
      grid-column: 1/3;
    }
  }
  @media (max-width: 490px) {
    .section-four .course-wrap .course div {
      width: 16rem;
      height: 16rem;
    }
    .section-four .course-wrap .course .para-2,
    .section-four .course-wrap .course .para-3 {
      width: 16rem;
    }
    .section-four .course-wrap .course .para-1 {
      width: 10rem;
    }
  }
`
