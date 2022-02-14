import React from 'react';
import testimonialImage from '../assets/image/homepage/course-img.png'; 
const TestimonialDetail = ({name, company, description, summary, position, imgUrl}) => {
    return (
        <div className="testimonial-item">
                    <div className="client-story">
                        <h6 className="ft18">
                            {summary}
                            
                        </h6>
                    <p className="ft14">
                       {description}
                    </p>
                    </div>
                    <div className="client-details text-white mt-3">
                    <img src={imgUrl} alt={name} />
                    <div className="ml-3">
                        <p className="bold-manrope mb-0">
                            {name}
                        </p>
                        <p className="regular-manrope mb-0">
                        {position}, {company}
                        </p>
                    </div>
                    </div>
            </div>
        
    )
}


export default TestimonialDetail
