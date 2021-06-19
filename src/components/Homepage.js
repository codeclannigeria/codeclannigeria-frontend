import React from 'react';
import HomepageStyled from './HomepageStyled';
import SmilingFemale from './assets/image/homepage/smiling-female-sitting-with-laptop.png';
import TestedAndTrustedImage from './assets/image/homepage/testedandtrusted.png';
import RequirementImage from './assets/image/homepage/requirement-image.png';
import RequirementImage2 from './assets/image/homepage/requirement-image2.png';

import AirbnbLogo from './assets/image/homepage/Airbnb-Logo.png';
import AmazonLogo from './assets/image/homepage/Amazon-Logo.png';
import FedExLogo from './assets/image/homepage/FedEx-Logo.png';
import GoogleLogo from './assets/image/homepage/Google-Logo.png';
import OYOLogo from './assets/image/homepage/OYO-Logo.png';
import WalmartLogo from './assets/image/homepage/Walmart-Logo.png';
import OlaLogo from './assets/image/homepage/OLA-logo.png';
import MicrosoftLogo from './assets/image/homepage/Microsoft-Logo.png';


import CheckIcon  from './assets/svgs/homepage/check-circle.svg';

import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import TrackList from './tracks/TrackList';
import Footer from './Footer';
import TestimonialList from './testimonial/TestimonialList';

function Homepage() {
  

  return (
    <HomepageStyled>
      
      <div className="container-fluid page-container px-0">
        
        <div className="landing-welcome pry-padd-form">
          <Navbar />
          <section className="welcome-banner d-flex justify-content-between my-5 py-5">
            <div className="banner-text-wrapper">
              <h3>Tap into the Power of Community Learning</h3>
                <p className="ft18to16">
                  In eget quam vitae sed sagittis massa laoreet. Nascetur sem natoque imperdiet lacus, eget
                  consectetur urna. Mattis bibendum ullamcorper turpis sagittis, non quam eu pellentesque.
                </p>
            </div>
            <div className="desktop-img-wrapper text-right">
              <img src={SmilingFemale} alt="Code Clan Female" className="align-self-end" />
            </div>
          </section>
        </div>
      <section className="clan-stats pry-padd-form d-flex flex-wrap justify-content-between py-4">
        <div className="student-count mb-4 mr-5">
          <p className="ft48 extrabold-libre mb-2">1,500,000+</p>
          <p className="ft18to16 mb-0">People who have been trained and belong to our community now work with</p>
        </div>
        <div className="alumni-companies d-flex">
            <div className="client-logo">
              <img src={AirbnbLogo} alt="Aibnb company logo" />
            </div>
            <div className="client-logo"><
              img src={AmazonLogo} alt="Amazon company logo" />
            </div>
            <div className="client-logo">
              <img src={FedExLogo} alt="Fedex company logo"/>
            </div>
            <div className="client-logo">
              <img src={MicrosoftLogo} alt="Microsoft company logo" />
            </div>
            <div className="client-logo">
              <img src={GoogleLogo} alt="Google company logo" />
            </div>
            <div className="client-logo">
              <img src={OlaLogo} alt="OLA company logo" />
            </div>
            <div className="client-logo">
              <img src={WalmartLogo} alt="Walmart company logo" />
            </div>
            <div className="client-logo">
              <img src={OYOLogo} alt="OYO company logo" />
            </div>
        </div>
        </section>
        

      <section className="clan-reputation pry-padd-form d-flex">
        <div className="desktop-img-wrapper mr-5"><img src={TestedAndTrustedImage} alt="two techies collaborating" /></div>
        <div>
          <h4 className="section-title mt-4 mb-3">Tested and Trusted all over the World</h4>
          <p className="mb-4">
            Cursus sem amet, quisque consequat sagittis. Tincidunt ut posuere nulla in. Scelerisque vivamus vestibulum
            risus habitasse amet purus a turpis sed. Pellentesque urna pharetra lorem enim eu tellus rutrum fringilla.
            Facilisis in
            purus sit vel posuere fermentum.
          </p>
          <Link to="/" className="link-as-blue-btn light-bg-btn learn-more-link">Learn More</Link>
        </div>
      </section>
        

      <section className="clan-requirements pry-padd-form d-flex mb-5">
        <div className="mr-4">
          <h4 className="section-title">Requirements gathering and analysis for references.</h4>
          <p>
            Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
            Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
          </p>
          <div className="desktop-img-wrapper">
            <img src={RequirementImage} alt="code clan requirement" />
          </div>
        </div>
          
        <div>
            <div className="desktop-img-wrapper mb-2">
              <img src={RequirementImage2} alt="fingers pointing at screen code clan" /></div>
            <p>
              Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. , viverra aliquet. Nullam viverra nam auctor
              sit ipsum malesuada a, duis volutpat.
            </p>

            <Link to="#" className="link-as-blue-btn light-bg-btn learn-more-link">
              Learn More
            </Link>
        </div>
      </section>
        

      
      <TrackList/>
      

      <TestimonialList />
        
      <section className="call-to-action pry-padd-form">
        <h4 className="section-title text-center contained-778p">Join the Codeclan Nigeria Community Today</h4>
        <ul className="list-unstyled d-flex flex-wrap text-nowrap my-5">
            <li className="cta-list">
              <img src={CheckIcon} alt="check mark" />
              &nbsp;Fully organized training Sessions
            </li>
            <li className="cta-list">
              <img src={CheckIcon} alt="check mark" />
              &nbsp;Belong to an amazing Community
              </li>
            <li className="cta-list">
              <img src={CheckIcon} alt="check mark" />&nbsp;I no know again</li>
        </ul>
        <Link to="/register" className="link-as-blue-btn dark-bg-btn join-now-btn">Join Now</Link>
        </section>
        
      <Footer/>
      
  </div>
     

    </HomepageStyled>
  );
}

export default Homepage;
