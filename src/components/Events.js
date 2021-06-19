import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import EventsStyled from './EventsStyled';
import code from './assets/image/homepage/code.jpg';

function Events() {
  return (
    <React.Fragment>
      <EventsStyled>
        <Navbar />
        <div className="norm-events">
          <div
            style={{
              paddingBottom: '1em',
              height: '30em',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div className="">
              <img src={code} style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div
              className=""
              style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignContent: 'center',
                color: 'white',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'rgba(0,0,0, 0.75)',
              }}
            >
              <div className="title">Events</div>
              <div style={{ fontSize: '2.4em' }}>
                Hackatons, competitions and all
              </div>
            </div>
          </div>
        </div>

        <div className="teams half-grey grey">
          <div className="head">Upcoming Events</div>
          <div className="details">
            Here are some events you can be a part of.
          </div>

          <div className="team-shell">
            <div className="half-grey grey team">
              <div className="pic-space"></div>
              <div className="name">React Bootcamp</div>
              <div className="description">Lagos Nigeria</div>
              <div className="date">January 2032</div>
            </div>
            <div className="half-grey grey team">
              <div className="pic-space"></div>
              <div className="name">Javascript Hackathon</div>
              <div className="description">Owerri, Imo</div>
              <div className="date">January 2019</div>
            </div>
            <div className="half-grey grey team">
              <div className="pic-space"></div>
              <div className="name">HTML Fest</div>
              <div className="description">Lagos Nigeria</div>
              <div className="date">January 2018</div>
            </div>
          </div>
        </div>

        <div className="teams grey">
          <div className="head">Past Events</div>
          <div className="details">
            Here are a few of our past events for you.
          </div>

          <div className="team-shell">
            <div className="grey team">
              <div className="pic-space"></div>
              <div className="name">React Bootcamp</div>
              <div className="description">Lagos Nigeria</div>
              <div className="date">January 2019</div>
            </div>
            <div className="grey team">
              <div className="pic-space"></div>
              <div className="name">Javascript Hackathon</div>
              <div className="description">Owerri, Imo</div>
              <div className="date">January 2019</div>
            </div>
            <div className="grey team">
              <div className="pic-space"></div>
              <div className="name">HTML Fest</div>
              <div className="description">Lagos Nigeria</div>
              <div className="date">January 2018</div>
            </div>
          </div>
        </div>

        <Footer />
      </EventsStyled>
    </React.Fragment>
  );
}

export default Events;
