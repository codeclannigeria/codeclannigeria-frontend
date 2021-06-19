import styled from 'styled-components';


const HomepageStyled = styled.div`
 
// .page-container {
//   max-width: 1600px;
// }
.landing-welcome {
  background: linear-gradient(274.41deg, #d9e3ef 3.11%, #fafafa 95.95%);
  position: relative;
  margin-bottom: 100px;
}
.landing-welcome:after {
  position: absolute;
  content: '';
  background: inherit;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: top right;
  transform: skewY(-4deg);
}

/* General styling */
a {
  color: inherit;
}
a:hover {
  color: inherit;
}
h3,
h4 {
  color: ${props => props.theme.pryBlueclr};
  font-family: 'Zilla Slab', serif;
  font-weight:700;
}

/* START: General classes */
.ft14 {
  font-size: 14px;
}
.ft18 {
  font-size: 18px;
}
.ft20 {
  font-size: 20px;
}
.ft18to16 {
  font-size: 1.125rem;
}
.ft48 {
  font-size: 48px;
}
.pry-padd-form {
  padding: 0 30px 30px;
  padding: 0 clamp(24px, 6vw, 120px) 30px;
}
.extrabold-libre {
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 700;
}
.regular-manrope {
  font-family: 'Regular Manrope', sans-serif;
}
.bold-manrope {
  font-family: 'Bold Manrope', sans-serif;
}
.nanum-font {
  font-family: 'Nanum Pen Script', cursive;
}
.turquoise-clr {
  color: #2ec5ce;
}
.section-title {
  font-size: 48px;
  font-size: clamp(36px, 2.5vw + 1rem, 48px);
}
.contained-778p {
  max-width: 778px;
}
.link-as-blue-btn {
  display: flex;
  background: #30507F;
  color: #fff;
  border-radius: 8px;
  height: 64px;
  width: 240px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-family: 'Libre Franklin', sans-serif;
}
.link-as-blue-btn:hover {
  text-decoration: none;
}
.light-bg-btn {
  color: ${props => props.theme.brightBlueclr};
  background: #e8eef4;
}
.light-bg-btn:hover {
  background: #d0d5db;
}
/* END: General classes */

.welcome-banner > * {
  flex-basis: 30%;
  flex-grow: 1;
}
.welcome-banner .banner-text-wrapper {
  flex-basis: 60%;
  margin-right: 20px;
  max-width: 611px;
}
.welcome-banner h3 {
  font-size: 72px;
  font-size: clamp(48px, 4vw + 1rem, 72px);
}
.desktop-img-wrapper img {
  max-width: 100%;
}
.clan-stats {
  margin-bottom: 200px;
  align-items: center;
}
.clan-stats .student-count {
  flex-basis: 30%;
}
.alumni-companies {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}

.client-logo{
  width: 22%;
  margin: 40px 0;
  text-align: center;
}


.clan-reputation {
  margin-bottom: 130px;
}
.clan-reputation > * {
  flex-basis: 50%;
  flex-grow: 1;
}
.learn-more-link {
  font-size: 1rem;
  width: 205px;
}
.join-now-btn {
  font-size: 1.125rem;
  width: 240px;
}

.clan-requirements{
  justify-content: space-between;
}

.clan-requirements > :first-child {
  flex-basis: 68%;
}
.clan-requirements > :last-child {
  flex-basis: 30%;
}
.course-tracks {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonials {
  background: #0050af;
  padding-top: 80px;
  padding-bottom: 80px;
}
.testimonials .testimonial-item {
  margin-bottom: 40px;
  text-align: center;
}
.testimonials .testimonial-item:not(:last-child) {
  margin-right: 20px;
}
.testimonials .testimonial-item .client-story {
  background: #c4c4c4;
  border-radius: 10px;
  position: relative;
  padding: 32px;
}
.testimonial-item .client-story::before {
  content: '';
  width: 0px;
  height: 0px;
  border: 10px solid transparent;
  position: absolute;
  left: 45%;
  bottom: -20px;
  border-top: 10px solid #c4c4c4;
}
.client-story > h6 {
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 600;
  text-align: center;
}
.testimonial-item .client-details {
  display: flex;
  justify-content: center;
  align-items: center;
}
.testimonial-item .client-details > img {
  height: 56px;
  width: 56px;
  border-radius: 50%;
  object-fit: cover;
}
#clanTesimonialCarousel {
  position: unset;
  padding-bottom: 100px;
  max-width: 1110px;
}
.custom-testimonial-indicators {
  bottom: 80px;
}
.custom-testimonial-indicators [data-target] {
  opacity: 0.5;
  background-color: ${props => props.theme.brightBlueclr};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border-top: none;
  border-bottom: none;
  border: 2px solid #ffffff;
}
.custom-testimonial-indicators .active {
  background-color: #fff;
  opacity: 1;
}
.call-to-action {
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.call-to-action .cta-list:not(:last-of-type) {
  margin-right: 30px;
}
footer.pry-padd-form {
  background: #0b0d17;
  color: #d9dbe1;
  font-size: 14px;
  padding-top: 64px;
  padding-bottom: 64px;
  overflow-x: hidden;
}
.footer-link-groups {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.footer-link-groups > * {
  flex-basis: max(160px, 22%);
  margin-bottom: 20px;
}
.footer-link-group h6 {
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
}
.footer-link-group > ul > li {
  margin-bottom: 10px;
}
.footer-logo-line {
  line-height: 0.5;
  text-align: center;
}
.footer-logo-line span {
  position: relative;
}
.footer-logo-line span:before,
.footer-logo-line span:after {
  content: '';
  position: absolute;
  border-top: 1px solid white;
  top: 0;
  width: 600px;
}
.footer-logo-line span:before {
  right: 100%;
}
.footer-logo-line span:after {
  left: 100%;
}

@media screen and (max-width: 992px) {
  
  .cta-list {
    flex-basis: 100%;
    text-align: center;
  }
  .cta-list:not(:last-of-type) {
    margin-bottom: 40px;
  }
  .clan-stats{
    margin-bottom:50px;
    
  }
}
@media screen and (max-width: 768px) {
  .desktop-img-wrapper {
    display: none;
  }
  .ft18to16 {
    font-size: 1rem;
  }
  .clan-requirements {
    flex-wrap: wrap;
  }
  .clan-requirements > :first-child,
  .clan-requirements > :last-child {
    flex-basis: 100%;
  }
   .clan-reputation{
    margin-bottom: 50px;
  }

  .client-logo{
  width: 48%;
}

}
@media screen and (max-width: 425px) {
  .clan-stats .student-count {
    flex-grow: 1;
  }
 
  .testimonials {
    margin: 0 24px;
  }
  .testimonials h4 {
    text-align: center;
  }
  .footer-logo-line {
    padding-bottom: 100px;
    padding-top: 40px;
  }
  .footer-logo-line img {
    display: none;
  }
}

`;

export default HomepageStyled;
