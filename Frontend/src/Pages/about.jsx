import React, { useEffect } from "react";
import '../styles/about.css';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import aboutus from '../assets/images/about-us.jpg';
import owner from '../assets/images/owner.png';
import S1 from '../assets/images/23.jpeg';
import S2 from '../assets/images/234.jpg';
import sahil from '../assets/images/Coder.jpeg'
import yash from '../assets/images/Yash.jpg'

import Back3 from '../assets/images/03.png'

const About = () => {
    const primaryColor = "#fff";
    const titleStyle = {
        color: primaryColor,
        paddingBottom: "10px",
        
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "48px", 
      };

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return <>
    <section >
      <div className="top_cover_about">
        <h1 className="sub_heading">Explore the world with us</h1>
      </div>
      <Container >
        <Row>
          <Col lg='6'>
            <div className="about__us">
              <h2>About Us</h2>
              <p>Welcome to TripIt, your trusted travel companion on a journey of unforgettable experiences and exploration. We are passionate about travel and believe that each adventure has the power to transform and enrich our lives.</p>

              <p><b>Our Mission:</b>
At TripIt, our mission is to inspire and empower travelers to discover the world's beauty, diversity, and wonders. We aim to curate exceptional travel experiences that go beyond the ordinary, providing you with memories that last a lifetime.</p>

<p><b>What Sets Us Apart:</b>Unmatched Expertise: Our team of travel enthusiasts and experts work tirelessly to craft unique itineraries, ensuring that every detail is taken care of to create seamless and extraordinary journeys.</p>

<p><b>Personalized Approach:</b> We believe that every traveler is unique, and so are their dreams and desires. That's why we tailor our trips to match your preferences, creating bespoke adventures just for you.</p>

<p><b>Sustainable Travel: </b>We are committed to responsible and sustainable tourism. Our initiatives aim to protect the environment, support local communities, and preserve the cultural heritage of the destinations we visit.</p>

<p><b>Our Story:</b>ripIt was born out of a shared love for exploration and a deep appreciation for the transformative power of travel. What started as a passion project among friends has grown into a vibrant travel community, bringing together like-minded individuals with a thirst for adventure.

Over the years, we have ventured into the unexplored corners of the world, experiencing the magic of diverse cultures, breathtaking landscapes, and the warmth of human connections. Our journey has been one of growth, learning, and a dedication to creating extraordinary memories for our fellow travelers.</p>

<p><b>Join Us:</b>We invite you to be a part of our travel family. Whether you are a seasoned explorer or setting foot on new horizons for the first time, we welcome you to embark on unforgettable journeys with us. Let's wander, explore, and embrace the world together.</p>

<p><b>Contact Us:</b>We are here to answer any questions you may have and assist you in planning your dream journey. Reach out to us at tripit1905@gmail.com, and let's start making your travel dreams come true.</p>

<p><b>TripIt - Your Gateway to Extraordinary Adventures.</b></p>
            </div>
          </Col>
          <Col lg='6'>
            <div className='about-img'>
              <img src={aboutus} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>


  

    <section className="team_container align-items-center" style={{ backgroundImage: `url(${Back3})` }}>
      <h2 className='Title 'style={titleStyle}>Our Team</h2>
      <div className="team_div d-flex justify-content-center">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-2">
            <Card className="my_details">
              <img src={owner} alt="CardImage" className="card-image" />
              <CardBody>
                <h3 className="nameOwn">Govind Sharma</h3>
                <h6 className="card-title">CEO/Founder</h6>
              </CardBody>
            </Card>
          </div>

          {/* Card 2 */}
          <div className="col-md-2">
            <Card className="my_details">
              <img src={yash} alt="CardImage" className="card-image" />
              <CardBody>
                <h3 className="nameOwn">Yash Bochiwal</h3>
                <h6 className="card-title">Technical Team</h6>
              </CardBody>
            </Card>
          </div>

          {/* Card 3 */}
          <div className="col-md-2">
            <Card className="my_details">
              <img src={sahil} alt="CardImage" className="card-image" />
              <CardBody>
                <h3 className="nameOwn">Sahil Singh</h3>
                <h6 className="card-title">Technical Team</h6>
              </CardBody>
            </Card>
          </div>

          {/* Card 4 */}
          <div className="col-md-2">
            <Card className="my_details">
              <img src={S1} alt="CardImage" className="card-image" />
              <CardBody>
                <h3 className="nameOwn">Anjali Gupta</h3>
                <h6 className="card-title">Social Media Team</h6>
              </CardBody>
            </Card>
          </div>

          {/* Card 5 */}
          <div className="col-md-2">
            <Card className="my_details">
              <img src={S2} alt="CardImage" className="card-image" />
              <CardBody>
                <h3 className="nameOwn">Shivani Kavitkar</h3>
                <h6 className="card-title">Social Media Team</h6>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      
    </section>
  </>
}

export default About;
