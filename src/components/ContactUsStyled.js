import styled from 'styled-components';

const ContactUsStyled = styled.div`
.pry-padd-form{
  padding: 0 30px 30px;
 padding: 0 clamp(24px, 6vw, 120px) 30px;
}
.title{
    color: #12376d;
    text-align: center;
    font-weight: 700;
    font-size: 3.5rem;
}
.social{
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
}
.social li{
    display: inline-block;
    margin-right: 10px;
}
.social li:last-child{
    margin-right: 0;
}
.social li a{
    display: block;
    width: 36px;
    height: 36px;
    line-height: 36px;
    font-size: 24px;
    color: #999;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s ease-in-out 0s;
}
.social a:hover{ color: #fff; }
.social a.fa-twitter:hover{ background: #2baae1; }
.social a.fa-envelope:hover{ background: #000; }
`

export default ContactUsStyled;