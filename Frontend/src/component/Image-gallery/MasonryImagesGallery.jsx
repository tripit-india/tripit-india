import React from 'react';
import galleryImages from './galleryImages';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MasonryImagesGallery.css'; // Create a new CSS file for custom styles

const MasonryImagesGallery = () => {
  const sliderSettings = {
    dots: true,
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

  return (
    <div style={{ margin: '16px' }}>
      <Slider {...sliderSettings}>
        {galleryImages.map((item, index) => (
          <div key={index} className="slider-item">
            <img
              className='masonry__img'
              src={item}
              alt=''
              style={{ width: '100%', height: '400px', display: 'block', objectFit: 'cover', borderRadius: '10px' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MasonryImagesGallery;
