import React from 'react';
import TrackDetail from './TrackDetail';
import TrackListStyled from './TrackListStyled';

const TrackList = () => {
    const track= [
        {
            id: 1,
            title: 'Web Development',
            description: 'We have created a course outline that addressed the industrial needs of web developers.',
            icon: './assets/svgs/01.svg',
            url: '/'
        },
         {
            id: 2,
            title: 'Mobile Development',
             description: 'The mobile track is geared towards mentoring young mobile developers into proficient one',
            icon: './assets/svgs/03.svg',
            url: '/'
        },
         {
            id: 3,
            title: 'User Interface Design',
             description: 'Get mentored by experienced industry professionals that will teach you how to use design tools such as Sketch, Figma & Adobe XD to create clean layouts.',
            icon: './assets/svgs/04.svg',
            url: '/'
        },
        //  {
        //     id: 4,
        //     title: 'Strategy and Branding',
        //      description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
        //     icon: './assets/svgs/05.svg',
        //     url: '/'
        // },
        //  {
        //     id: 5,
        //     title: 'Marketing',
        //      description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
        //     icon: './assets/svgs/06.svg',
        //     url: '/'
        // },
        //  {
        //     id: 6,
        //     title: 'Project Management',
        //      description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
        //     icon: './assets/svgs/07.svg',
        //     url: '/'
        // }
        

    ]
    return (
        <TrackListStyled>
            <section className="course-tracks pry-padd-form">
                <h4 className="section-title text-center">
                    Tracks
                </h4>
                <p className="text-center contained-778p">
                    We offer frontend & backend development, UX/UI Design and Mobile Development courses for our students. We have an extensive library of content on various topics like JavaScript, Python, Ruby on Rails etc. and offer mentoring from industry professionals as part of our program.
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
