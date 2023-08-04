import React, { useRef } from 'react'; 
import galleryImages from './galleryImages';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MasonryImagesGallery.css'; // Create a new CSS file for custom styles

const MasonryImagesGallery = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of images to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false
        },
      },
    ],
  };

  const sliderContainerStyle = {
    position: 'relative',
    margin: '16px',
  };

  const sliderArrowContainerStyle = {
    position: 'absolute',
    top: '100%', // Position the buttons just below the slider
    left: '50%', // Center the buttons horizontally
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'fit-content',
    padding: '10px', // Optional padding for the button container
    color: '#0d5c75',
  };

  const arrowStyle = {
    fontSize: '40px',
    color: '#0d5c75',
    cursor: 'pointer',
    borderRadius: '50%', 
    width: '50px', 
    height: '50px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 9px 4px rgba(0, 0, 0, 0.1)', 
    transition: 'background-color 0.3s ease-in-out', // Optional transition effect
  };

  const arrowStyleHover = {
    ...arrowStyle,
    backgroundColor: '#0d5c75', // Optional hover background color for the arrows
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const gapStyle = {
    padding: '0 16px', // Adjust the gap size as needed
  };

  const sliderRef = useRef(null);

  return (
    <div style={sliderContainerStyle}>
      <Slider ref={sliderRef} {...sliderSettings}>
        {galleryImages.map((item, index) => (
          <div style={gapStyle} key={index} className="slider-item">
            <img
              className='masonry__img'
              src={item}
              alt=''
              style={{ width: '100%', height: '400px', display: 'block', objectFit: 'cover', borderRadius: '10px' }}
            />
          </div>
        ))}
      </Slider>
      <div style={sliderArrowContainerStyle}>
        <div
          style={arrowStyle}
          onClick={goToPrevSlide}
          onMouseEnter={() => {
            // Optional: Add hover effect for the arrows
            Object.assign(arrowStyle, arrowStyleHover);
          }}
          onMouseLeave={() => {
            // Optional: Remove hover effect for the arrows
            Object.assign(arrowStyle, { ...arrowStyle, backgroundColor: '' });
          }}
        >
          &#8249;
        </div>
        <div
          style={arrowStyle}
          onClick={goToNextSlide}
          onMouseEnter={() => {
            // Optional: Add hover effect for the arrows
            Object.assign(arrowStyle, arrowStyleHover);
          }}
          onMouseLeave={() => {
            // Optional: Remove hover effect for the arrows
            Object.assign(arrowStyle, { ...arrowStyle, backgroundColor: '' });
          }}
        >
          &#8250;
        </div>
      </div>
    </div>
  );
};

export default MasonryImagesGallery;
