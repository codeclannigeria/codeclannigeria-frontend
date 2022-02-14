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
      summary: 'Improved my UI/UX skills',
      description: `I worked with my mentor at CodeClan to improve my UI development skills 
      and was able to hone my bootstrap skills while holding down a high demand job`,
      name: 'Opeyemi Oni',
      position: 'Integration Engineer',
      company: 'Ericsson',
      imgUrl:'./assets/person-icon.png'
    },
    {
      summary: 'Got my first job as a software dev!',
      description: `Joined the community at the beginning of the year and after five months of tutorials and 
        intense interview preparations with my mentor, I landed a job as a frontend software developer. 
        I am so grateful for all the help I got and the tutor's patience with the difficult concepts.`,
      name: 'Fortune Ochi',
      position: 'Software Developer',
      company: 'Magogo Software',
      imgUrl: './assets/person-icon.png'
    },
    {
      summary: 'Incredible learning experience',
      description: ` I had an incredible experience learning react with codeclan and was impressed by the new skills
        I learnt during the Bootcamp. The exercises helped me get familiar with new concepts quickly. 
        The skills I gained at the Bootcamp served as a catalyst to help take my career to the next level.`,
      name: 'John Odey',
      position: 'Fullstack developer',
      company: 'Openwit Tech',
      imgUrl: './assets/person-icon.png'
    },
    {
      summary: 'Switched to a tech role from sales',
      description: ` After years of wanting to leave sales, I was finally able to get a job as a 
      software developer after joining codeclan. The tutorials were really easy to follow and my mentor 
      was always available to help whenever I had challenges. I appreciate the continued support I've been 
      getting on the job, it has made the job easier.`,
      name: 'Femi Adebayo',
      position: 'Software Developer',
      company: 'Achmed Corporation',
      imgUrl: './assets/person-icon.png'
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
              autoPlaySpeed={100}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={50}
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
