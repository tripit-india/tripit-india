import React, { useState,useEffect } from 'react';
import { Container,Row,Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import TourCard2 from './../shared/InternationTourCard'
import Newsletter from './../shared/CustomTrips'
import '../styles/searchdetails.css'

const SearchResultList =() => {
    useEffect(() => {
        window.scrollTo(0, 0)
      })
    const location = useLocation();
    const [data] =useState(location.state);

    

    return <>
    <section className="Result_inter">
            <Container>
                <Row>
                    <Col lg="12">
                        <h1>Tour Search Result</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    <section>
        <Container>
        <Row>
        {
            data.length ===0 ?<h4 className='text-center'>No Tour Found</h4> :data?.map(tour=> <Col lg ='3' className='mb-4' key={tour._id}>
                <TourCard2 tour={tour} />
            </Col>)
        }
        </Row>
        </Container>
    </section>
    <Newsletter/>
    </>
};

export default SearchResultList;

