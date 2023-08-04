import React, { useEffect} from 'react'; 
import '../styles/home.css'
import {Container ,Row, Col} from 'reactstrap';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../component/Featured-tours/FeaturedTourList'
import FeaturedTourLists from '../component/Bagpack-tours/BagPackTour'
import MasonryImagesGallery from '../component/Image-gallery/MasonryImagesGallery'
import Testimonial from '../component/Testimonial/Testimonial';
import home from '../assets/images/home.png'
import CustomTrips from '../shared/CustomTrips'



const Home = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      })
    const primaryColor = "#0D5C75";
    const titleStyle = {
        color: primaryColor,
        paddingBottom: "10px",
        fontWeight:"700", 
      };
    return (
        <div>
            
            <section className='home-section d-flex flex-column'>
            <h3 className='heading_home'>Pin it, Trip it</h3>
                <div className="search-bar-container">
                    <SearchBar />
                </div>
                <img src={home} alt="" className="home-img" />
                
            </section>
            
            
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h2 className='services__title'><br/><br/><br/>Why We Rock</h2>
                    </Col>
                    <ServiceList/>
                </Row>
            </Container>
        </section>

        {/* */}
        <section id="featured-tour">
           <Container>
            <Row>
                <Col lg ='12' className='mb-5 text-center'>
                <h2 className='featured__tour-title title-with-line'style={titleStyle}>Upcoming Trips</h2>
                </Col>
                <FeaturedTourList/>
            </Row>
            </Container> 
        </section>
        {/* */}
        <br/> <br/> 
        {/* */}
        <section id="featured-tours">
           <Container>
            <Row>
                <Col lg ='12' className='mb-5 text-center'>
                <h2 className='featureds__tour-title2 title-with-line'style={titleStyle}>Bagpacking Trips</h2>
                </Col>
                <FeaturedTourLists/>
            </Row>
            </Container> 
        </section>
        {/* */}
        <br/> <br/> 
        {/* */}
        <section  id='img-gallery'>
            <Container>
                <Row> 
                    <Col lg ='12' className="text-center">
                        <h2 className='gallery__title title-with-line'style={titleStyle}>#TripIt Moments</h2>
                    </Col>
                    <Col lg ='12'>
                        <MasonryImagesGallery/>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* */}
        <br/> <br/> 

        {/* */}
        <section  id='testimonial'>
            <Container>
                <Row>
                    <Col lg ='12' className="text-center">
                    <h2 className='testimonial__title title-with-line'style={titleStyle}>Hear From Our Travelers</h2>
                    </Col>

                    <Col lg='12'>
                        <Testimonial/>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* */}
        <CustomTrips/>
        </div>
    )
        
};

export default Home;