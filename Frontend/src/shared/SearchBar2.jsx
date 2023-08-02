import React, { useRef } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';
import { BASE_URL } from './../utils/config.js';
import { useNavigate } from 'react-router-dom';



const SearchBar2 = () => {
  const locationRef = useRef('');

  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;

    if (location === '') {
      return alert('All fields are required');
    }

    try {
      const res = await fetch(
        `${BASE_URL}/internationalTour/search/getinternationalTourBySearch?city=${location}`
      );

      if (!res.ok) {
        throw new Error('Something went wrong');
      }

      const result = await res.json();
      navigate(`/internationalTour/search?city=${location}`, {
        state: result.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchHandler();
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form
          className="d-flex align-items-center gap-4"
          onSubmit={handleSubmit}
        >
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>

          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-2-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar2;