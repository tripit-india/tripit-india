import React, { useEffect} from 'react';

import "../styles/tour.css";

import TourCard from './../shared/TourCard';
import SearchBar from './../shared/SearchBar';
import Newsletter from './../shared/CustomTrips';
import { Container, Row, Col } from "reactstrap";
import useFetch from '../hooks/useFetch.js';
import { BASE_URL } from '../utils/config.js';

const Tour = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours`);

  // Filter the tours where isBackpackTour is false
  const filteredTours = tours?.filter(tour => !tour.isBackpackTour);

  return (
    <>
      <section className="Weekend_inter">
            <Container>
                <Row>
                    <Col lg="12">
                        <h1>Weekends Trips</h1>
                    </Col>
                </Row>
            </Container>
        </section>
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          {/* Your existing code for displaying tours and pagination */}
          {loading && <h4 className='text-center pt-5'>Loading............</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {!loading && !error && (
            <Row>
              {filteredTours?.map(tour => (
                <Col lg="3" md="6" sm="6" className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tour;
