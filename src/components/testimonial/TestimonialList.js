import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialDetail from './TestimonialDetail';
import TestimonialListStyled from './TestimonialListStyled';
import QuoteIcon from '../assets/svgs/homepage/Quote-Mark.svg';


const TestimonialList = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const testimonials = [
    {
      summary: 'Incredible Experience Humans',
      description: ` I had an incredible experience learning with CodeClan and was greatly impressed by the big
        difference in only three weeks. I am so grateful for the wonderful improvements they helped me make
        and their ability help me
        get familiar with the concept so quickly. It acted as a catalyst to take our career to the next
        level.`,
      name: 'Temitope Ajiboye',
      position: 'CEO',
      company: 'ABC Corporation',
      imgUrl: '../assets/image/homepage/course-img.png'
    },
    {
      summary: 'Incredible Experience Humans',
      description: ` I had an incredible experience learning with CodeClan and was greatly impressed by the big
        difference in only three weeks. I am so grateful for the wonderful improvements they helped me make
        and their ability help me
        get familiar with the concept so quickly. It acted as a catalyst to take our career to the next
        level.`,
      name: 'Fortune Ochi',
      position: 'CEO',
      company: 'ABC Corporation',
      imgUrl: '../assets/image/homepage/course-img.png'
    },
    {
      summary: 'Incredible Experience Humans',
      description: ` I had an incredible experience learning with CodeClan and was greatly impressed by the big
        difference in only three weeks. I am so grateful for the wonderful improvements they helped me make
        and their ability help me
        get familiar with the concept so quickly. It acted as a catalyst to take our career to the next
        level.`,
      name: 'John Odey',
      position: 'CEO',
      company: 'ABC Corporation',
      imgUrl: '../assets/image/homepage/course-img.png'
    },
    {
      summary: 'Incredible Experience Humans',
      description: ` I had an incredible experience learning with CodeClan and was greatly impressed by the big
        difference in only three weeks. I am so grateful for the wonderful improvements they helped me make
        and their ability help me
        get familiar with the concept so quickly. It acted as a catalyst to take our career to the next
        level.`,
      name: 'Femi Adebayo',
      position: 'CEO',
      company: 'ABC Corporation',
      imgUrl: '../assets/image/homepage/course-img.png'
    },
  ]
  return (
      <TestimonialListStyled>
    <section className="testimonials pry-padd-form position-relative">
        <div className="d-flex justify-content-between mb-5">
          <h4 className="section-title text-white contained-778p">Our Past Students & Community Members speak</h4>
            <div className="desktop-img-wrapper">
              {/* <QuoteIcon/> */}

              <img src={QuoteIcon} alt="" />
            </div>
          </div>
          <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={true}   
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
          >
          {
            testimonials.map(({ ...props}, index) => (

              <TestimonialDetail key={index} {...props} />
              
            ))
          }
        
        
            
          </Carousel>
          
            
        </section>
      </TestimonialListStyled>
    )
}

export default TestimonialList
