import styled from 'styled-components';

export const FooterStyled = styled.div`
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: inherit;
}
.nanum-font {
  font-family: 'Nanum Pen Script', cursive;
}
.turquoise-clr {
  color: #2ec5ce;
}
.ft20 {
  font-size: 20px;
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
  justify-content: space-between;
}
.footer-link-groups > * {
  width: 25%;
  margin-bottom: 20px;
}

.footer-link-group h6 {
  font-family: 'Libre Franklin', serif;
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
 @media only screen and (max-width: 968px) {
   .footer-link-groups > * {
      width: 50%;
      margin-bottom: 20px;
    }
 }
`

export default FooterStyled;