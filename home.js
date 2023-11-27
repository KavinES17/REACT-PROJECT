import React from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FeatureCard from '../components/feature-card';
import GalleryCard3 from '../components/gallery-card3';
import './home.css';

const Home = (props) => {
  const a=useHistory();
  function change(){
    a.push('/login');
  }
  return (
    <div className="home-container">
      <Helmet>
        <title>Event-Management-System</title>
        <meta property="og:title" content="Project" />
      </Helmet>
      <div className="home-header"></div>
      <div className="home-hero">
        <nav className="home-hero1">
          <div className="home-container1">
            <h1 className="home-hero-heading heading1">
              <span>
                Conceit
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',


                    
                  }}
                />
              </span>
              <span>Events</span>
            </h1>
            <span className="home-hero-sub-heading">
              Efficiently manage all your events with our event management system
            </span>
            <div className="home-btn-group">
                <button onClick={change} className="home-hero-button1 button">LogIn / Register</button>
              <button  onClick= {change} className="home-hero-button2 button">Learn More →</button>
            </div>
          </div>
        </nav>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container2">
            <span className="home-text2 sectionTitle">
              <span className="home-text3">Details</span>
              <br />
            </span>
            <h2 className="home-details-heading heading2">
              All-in-One Event Management System
            </h2>
            <span className="home-details-sub-heading">
              Our event management system provides comprehensive tools for event planning, ticketing, promotion, and analytics. With seamless integration and user-friendly interface, organizing successful events has never been easier.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1548497557-5c4e6cb1cafd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDUzODEyM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container3">
              <span className="home-text5 sectionTitle">
                <span>features</span>
                <br />
              </span>
              <h2 className="home-features-heading heading2">
                Powerful Features for Event Management
              </h2>
              <span className="home-features-sub-heading">
                Discover the comprehensive features that make our event management system stand out.
              </span>
            </div>
            <div className="home-container4">
              <FeatureCard
                Heading="Event Registration"
                SubHeading="Effortlessly manage event registrations and collect attendee information."
              ></FeatureCard>
              <FeatureCard
                Heading="Ticketing and Payment"
                SubHeading="Sell tickets online and securely process payments for your events."
              ></FeatureCard>
              <FeatureCard
                Heading="Event Promotion"
                SubHeading="Promote your events through various channels and reach a wider audience."
              ></FeatureCard>
              <FeatureCard
                Heading="Attendee Management"
                SubHeading="Easily track and manage attendee details, including check-ins and badges."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing"></div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">
            Event Management System Gallery
          </h1>
          <span className="home-gallery-sub-heading">
            Explore our event management system in action
          </span>
          <div className="home-container5">
            {/* GalleryCard3 components go here */}
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDUzODExMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1519764803046-8ba615c54c0c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDUzODExMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDUzODExMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDUzODExMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1458576627435-430ad58ead3b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDUzODExMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1530491396055-5aca4203edbf?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDUzODExMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1473973916745-60839aebf06b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDUzODExMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1467810563316-b5476525c0f9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDUzODExMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDUzODExMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1624006229221-2abd931f266b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDUzODExMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1438557068880-c5f474830377?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDUzODExMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1496024840928-4c417adf211d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDUzODExMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Powerful Event Management Solution
          </h1>
          <span className="home-banner-sub-heading">
            Simplify event planning, registration, and attendee management
          </span>
          <button onClick={change} className="home-banner-button button">Learn More</button>
        </div>
      </div>
      <div className="home-faq"></div>
      <div className="home-footer"></div>
    </div>
  );
}

export default Home;