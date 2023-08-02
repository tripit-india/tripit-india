import React, { useEffect}  from 'react'; 
import './tour-card.css'
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const TourCard2 = ({ tour }) => {
    
  useEffect(()=>{
    window.scrollTo(0,0)
  })
    const { _id, title, city, photo, price, featured, tourDuration } = tour;
    

    return (
        <div className='tour__card'>
            <Card>
                <div className='tour__img'>
                    <img src={photo} alt='tour-img' />
                    {featured && <span>Featured</span>}
                </div>

                <CardBody>
                    <div className="card__top d-flex align-items-center justify-content-between">
                        <span className='tour__location d-flex align-items-center gap-1'>
                            <i className="ri-map-2-line"></i> {title}
                        </span>
                        <span className='tour__duration d-flex align-items-center gap-1'>
                        <i class='ri-time-line'></i> {tourDuration} 
                        </span>
                    </div>

                    <h5 className='tour__title'><Link to={`/internationalTour/${_id}`}>{city}</Link></h5>

                    <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
                        <h5>₹{price}<span>per person</span></h5>
                        <button className='btn booking__btn'>
                            <Link to={`/internationalTour/${_id}`}>Explore</Link>
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default TourCard2;
