import React, { useRef } from 'react';
import TourCard from '../../shared/TourCard';
import useFetch from './../../hooks/useFetch.js';
import { BASE_URL } from './../../utils/config.js';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedTourLists = () => {
  const { data: featuredTours, loading, error } = useFetch(
    `${BASE_URL}/tours/search/bagpack`
  );

  const sliderRef = useRef(null);

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

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };
  
  return (
    <div style={sliderContainerStyle}>
      {loading && <h4>Loading.............</h4>}
      {error && <h4>{error}</h4>}
      {!loading && !error && featuredTours?.length > 0 && (
        <div style={sliderContentStyle}>
          <Slider ref={sliderRef} {...sliderSettings}>
            {featuredTours.map((tour, index) => (
              <div style={gapStyle} key={tour._id}>
                <TourCard tour={tour} addMargin={true} />
              </div>
            ))}
          </Slider>
        </div>
      )}
      <div style={sliderArrowContainerStyle}>
        <div style={arrowStyle} onClick={goToPrevSlide}>
          &#8249;
        </div>
        <div style={arrowStyle} onClick={goToNextSlide}>
          &#8250;
        </div>
      </div>
    </div>
  );
};

export default FeaturedTourLists;
