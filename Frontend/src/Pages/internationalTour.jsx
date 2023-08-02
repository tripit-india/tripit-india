import React, { useEffect} from 'react'; 

import "../styles/internationaltour.css";

import TourCard2 from './../shared/InternationTourCard';
import SearchBar2 from './../shared/SearchBar2';
import Newsletter from './../shared/CustomTrips';
import {Container, Row, Col} from "reactstrap";
import useFetch from '../hooks/useFetch.js'
import {BASE_URL} from '../utils/config.js'

const InternationalTour =() => {
    useEffect(()=>{
        window.scrollTo(0,0)
      })


    const {data:tours,loading,error} = useFetch(`${BASE_URL}/internationalTour`)
    return (
    <>
        <section className="back_inter">
            <Container>
                <Row>
                    <Col lg="12">
                        <h1>International Trips</h1>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <SearchBar2 />
                </Row>
            </Container>
        </section>
        <section className='pt-0'>
            <Container>
                {loading && <h4 className='text-center pt-5'>Loading............</h4>}
                {error && <h4 className='text-center pt-5'>{error}</h4>}
                {
                    !loading && !error && <Row>
                    {tours?.map(tour => (
                        <Col lg ="3" md = '6' sm ='6' className='mb-4' key = {tour._id}>
                            <TourCard2 tour={tour} />
                        </Col>
                    ))}

                    
                </Row>
                }
            </Container>
        </section>
        <Newsletter />
    </>
    );
};

export default InternationalTour;

