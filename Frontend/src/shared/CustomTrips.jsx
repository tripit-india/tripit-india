import React, { useState } from 'react';
import './customtrips.css';
import { Container, Row } from 'reactstrap';

import { BASE_URL } from '../utils/config.js';

const CustomTrips = () => {
  const [tourLocations, setTourLocations] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the server with the form data
      const response = await fetch(`${BASE_URL}/custom-tour-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tourLocations, fullName, phone, email, bookingDate }), // Send the form input values
      });

      if (response.ok) {
        // Custom tour request submitted successfully
        alert('Custom tour request submitted successfully!');
        setTourLocations(''); // Clear the form input after successful submission
        setFullName('');
        setPhone('');
        setEmail('');
        setBookingDate('');
      } else {
        // Error submitting custom tour request
        alert('Error submitting custom tour request.');
      }
    } catch (error) {
      console.error('Error submitting custom tour request:', error);
      alert('Error submitting custom tour request.');
    }
  };

  return (
    <section className='customSection'>
      <Container className='customCont'>
        <Row>
            <div className='custom__content'>
              <h2>Request Custom Trips</h2>
              <form onSubmit={handleSubmit}>
                <div className='custom__input'>
                  <input
                    type="text"
                    placeholder='Trip Location'
                    value={tourLocations}
                    onChange={(e) => setTourLocations(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="date"
                    placeholder="Booking Date (optional)"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                  />
                  <button type='submit' className='btn custom__btn'>
                    Submit
                  </button>
                </div>
              </form>
              <p>
                If you have specific tour locations in mind that you want to explore, enter them in the input
                above and submit your request. We'll get back to you with custom tour options based on your preferences.
              </p>
            </div>
          
        </Row>
      </Container>
    </section>
  );
};

export default CustomTrips;
