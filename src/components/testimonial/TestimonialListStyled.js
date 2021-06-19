import styled from "styled-components";

export const TestimonialListStyled = styled.div`
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
  background: #fff;
  border-radius: 10px;
  position: relative;
  padding: 32px;
  margin: 0 20px;
}
.testimonial-item .client-story::before {
  content: '';
  width: 0px;
  height: 0px;
  border: 10px solid transparent;
  position: absolute;
  left: 45%;
  bottom: -20px;
  border-top: 10px solid #fff;
}
.client-story > h6 {
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 700;
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
.react-multi-carousel-dot button{
  background: transparent;
  border: 1px solid #fff;
}

.react-multi-carousel-dot--active button {
    background: #fff;
}


`

export default TestimonialListStyled