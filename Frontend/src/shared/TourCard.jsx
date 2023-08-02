import React, { useEffect} from 'react';
import './tour-card.css';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const TourCard = ({ tour, addMargin }) => {
  
  useEffect(()=>{
    window.scrollTo(0,0)
  })

  const { _id, title, city, photo, price, featured, tourDuration } = tour;
  
  const tourCardStyle = {
    
    margin: addMargin ? '0 8px' : '0', 
  };

  return (
    <div className='tour__card' style={tourCardStyle}>
      <Link to={`/tour/${_id}`}>
      <Card>
        <div className='tour__img'>
          <img src={photo} alt='tour-img' />
          {featured && <span>Upcoming</span>}
        </div>

        <CardBody>
          <div className='card__top d-flex align-items-center justify-content-between'>
            <span className='tour__location d-flex align-items-center gap-1'>
              <i class='ri-map-2-line'></i> {title}
            </span>
            <span className='tour__duration d-flex align-items-center gap-1'>
              <i class='ri-time-line'></i> {tourDuration} 
            </span>
          </div>

          <h5 className='tour__title'>
            <Link to={`/tour/${_id}`}>{city}</Link>
          </h5>

          <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
            <h5>₹{price}<span>per person</span></h5>
            <button className='btn booking__btn'>
              <Link to={`/tour/${_id}`}>Explore</Link>
            </button>
          </div>
        </CardBody>
      </Card>
      </Link>
    </div>
  );
};

export default TourCard;