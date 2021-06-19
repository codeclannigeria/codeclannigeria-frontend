import React from 'react';
import { Link } from 'react-router-dom';
import RightArrow  from '../assets/svgs/right-arrow.svg';

const TrackDetail = ({title, description, icon, url}) => {
    return (
        <div className="track-card">
            
            <img src={icon} alt={title} />
            <div>
                <h5>
                    {title}
                </h5>
                <p>
                    {description}
                </p>
            </div>
            <Link to='/'>
                Explore &nbsp;
                
                <img src={RightArrow} alt="right arrow" />
            </Link>
        </div>
        

        // <StrategyIcon/>
       
        
    )
}

export default TrackDetail




