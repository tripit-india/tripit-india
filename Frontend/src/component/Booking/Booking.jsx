import React, { useState, useContext } from 'react';
import './booking.css';
import { Form, FormGroup, Button } from 'reactstrap';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.js';
import { BASE_URL } from '../../utils/config.js';

const Booking = ({ tour }) => {
  const { price, title ,tourDuration} = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '', // This will store the selected booking date
  });

  const handleChange = (e) => {
    if (e.target.id === "bookAt") {
      // Convert the input value to a date string
      const formattedDate = new Date(e.target.value).toISOString().split('T')[0];
      setBooking((prev) => ({ ...prev, bookAt: formattedDate }));
    } else {
      setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };
  
 
  

  // Send data to the server
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (!user || user === undefined || user === null) {
        alert('Please Sign in');
        return;
      } else {
        const res = await fetch(`${BASE_URL}/booking`, {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(booking),
        });

        const result = await res.json();

        if (!res.ok) {
          return alert(result.message);
        }
        alert(result.message);
        navigate('/thank-you');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h4>₹{price} <span> per person</span></h4>
        <h4 className='dayicon'>{tourDuration}</h4><i class='ri-time-line'></i>
      </div>
      {/* ========== booking form ========== */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <input type="number" placeholder="Phone" id="phone" required onChange={handleChange} />
          </FormGroup>
          <p>(Optional)</p>
          <FormGroup className="d-flex align-items-center gap-3">
            <input type="date" placeholder="" id="bookAt"  onChange={handleChange} />
            <input type="number" placeholder="Guest" id="guestSize"  onChange={handleChange} />
          </FormGroup>
          <Button className="btn primary__btn w-100 mt-4" type="submit">
            Get Quote
          </Button>
        </Form>
      </div>
      {/* ========== booking form end ========== */}

      
    </div>
  );
};

export default Booking;
