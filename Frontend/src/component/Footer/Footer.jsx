import React from 'react';
import './footer.css';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick_links = [
  {
    path: '/tour',
    display: 'Weekend Trips'
  },
  {
    path: '/internationalTour',
    display: 'International Trips'
  },
  {
    path: '/blog',
    display: 'Blogs'
  },
  {
    path: '/about',
    display: 'About Us'
  },
];
const quick__links2 = [
  {
    path: '/privacy-policy',
    display: 'Privacy Policy'
  },
  {
    path: '/cancellation-policy',
    display: 'Cancellation Policy'
  },
  {
    path: '/tnc',
    display: 'Terms & Conditions'
  },
  {
    path: '/disclaimer',
    display: 'Disclaimer'
  },
];

const Footer = () => {

  const location = useLocation(); 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className='footer'>
        <Row>
          <Col lg='3' className='about_tripit'>
            <div className='logo'>
              <img src={logo} alt='' />
              <p>Welcome to TripIt, your trusted travel companion on a journey of unforgettable experiences and exploration. We are passionate about travel and believe that each adventure has the power to transform and enrich our lives.</p>
              <div className='social__link d-flex align-items-center gap-4'>
                <span>
                  <a href="https://www.instagram.com/tripit_india" target="_blank" rel="noopener noreferrer">
                    <i class="ri-instagram-line"></i>
                  </a>
                </span>
                <span>
                  <a href="https://www.facebook.com/tripit.india" target="_blank" rel="noopener noreferrer">
                    <i class="ri-facebook-line"></i></a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/company/tripitind/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                    <i class="ri-linkedin-line"></i>
                  </a>
                </span>
                <span>
                  <a href="mailto:tripit1905@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i class="ri-mail-line"></i>
                  </a>
                </span>
                
              </div>
            </div>
          </Col>
          <Col lg='2' className='discover'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-link'>
              {quick_links.slice(0, quick_links.length).map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  {/* Check if the target path matches the current path */}
              {item.path === location.pathname ? (
                // If the paths match, use an anchor tag to scroll to the top of the page
                <a href="#top" onClick={scrollToTop}>{item.display}</a>
              ) : (
                // If the paths don't match, use a Link component
                <Link to={item.path}>{item.display}</Link>
              )}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='2' className='quick_links'>
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-link'>
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3' className='contact_us'>
            <h5 className='footer__link-title'>Contacts</h5>
            <ListGroup className='footer__quick-link'>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-3'>
                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-map-pin-2-fill"></i></span>
                  Address:
                </h6>
                <p className='mb-0'>224, near Ramchandra Market, Rajpur Khurd Extension, Chhatarpur, Delhi, 110074</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-3'>
                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p className='mb-0'>tripit1905@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-3'>
                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  Mobile:
                </h6>
                <p className='mb-0'>+91 7976277664</p>
              </ListGroupItem>
            </ListGroup> 
          </Col>
          <Col lg='12' className='text-center'>
            <p className='copyright'>
              Copyright 2023 by TripIt India. All Rights Reserved.
            </p>
          </Col>
        </Row>
    </footer>
  );
};

export default Footer;