import React from 'react';
import TrackDetail from './TrackDetail';
import TrackListStyled from './TrackListStyled';

const TrackList = () => {
    const track= [
        {
            id: 1,
            title: 'Web Development',
            description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
            icon: './assets/svgs/01.svg',
            url: '/'
        },
         {
            id: 2,
            title: 'Mobile Development',
             description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
            icon: './assets/svgs/03.svg',
            url: '/'
        },
         {
            id: 3,
            title: 'User Interface Design',
             description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
            icon: './assets/svgs/04.svg',
            url: '/'
        },
         {
            id: 4,
            title: 'Strategy and Branding',
             description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
            icon: './assets/svgs/05.svg',
            url: '/'
        },
         {
            id: 5,
            title: 'Marketing',
             description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
            icon: './assets/svgs/06.svg',
            url: '/'
        },
         {
            id: 6,
            title: 'Project Management',
             description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
            icon: './assets/svgs/07.svg',
            url: '/'
        }
        

    ]
    return (
        <TrackListStyled>
            <section className="course-tracks pry-padd-form">
                <h4 className="section-title text-center">
                    Tracks
                </h4>
                <p className="text-center contained-778p">
                    Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                    Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
                </p>
                <div className="tracks-card-group">
                    {
                        track.map(({ id, ...otherTrackProps }) => (
                            <TrackDetail key={id} {...otherTrackProps} />
                        ))
                    }
                </div>
                
            </section>
        
        </TrackListStyled>
        
    )
}

export default TrackList
