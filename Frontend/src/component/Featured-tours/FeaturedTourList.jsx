import React from 'react';
import TourCard from '../../shared/TourCard';
import { Col } from 'reactstrap';
import useFetch from './../../hooks/useFetch.js';
import { BASE_URL } from './../../utils/config.js';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedTourList = () => {
  const { data: featuredTours, loading, error } = useFetch(
    `${BASE_URL}/tours/search/getFeaturedTour`
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderContainerStyle = {
    position: 'relative',
  };

  const sliderArrowContainerStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };

  const arrowStyle = {
    fontSize: '40px',
    color: '#0D5C75',
    backgroundColor: '', // Change the arrow background color
    padding: '17px',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  const sliderContentStyle = {
    paddingLeft: '40px', // Create a gap between the left arrow and tour cards
    paddingRight: '20px', // Create a gap between tour cards
  };

  const gapStyle = {
    padding: '0 200px', // Adjust the gap size as needed
  };
  
  return (
    <div style={sliderContainerStyle}>
      {loading && <h4>Loading.............</h4>}
      {error && <h4>{error}</h4>}
      {!loading && !error && featuredTours?.length > 0 && (
        <div style={sliderContentStyle}>
          <Slider {...sliderSettings}>
            {featuredTours.map((tour, index) => (
              <div style={gapStyle} key={tour._id}>
                <Col>
                <TourCard tour={tour} addMargin={true} />
                </Col>
              </div>
            ))}
          </Slider>
        </div>
      )}
      <div style={sliderArrowContainerStyle}>
        <div
          style={arrowStyle}
          onClick={() => {
            // Function to slide to the previous slide
            document.querySelector('.slick-prev').click();
          }}
        >
          &#8249;
        </div>
        <div
          style={arrowStyle}
          onClick={() => {
            // Function to slide to the next slide
            document.querySelector('.slick-next').click();
          }}
        >
          &#8250;
        </div>
      </div>
    </div>
  );

};

export default FeaturedTourList;