import React, { useState,useEffect } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Booking from '../component/Booking/Booking';
import Newsletter from '../shared/CustomTrips';
import useFetch from '../hooks/useFetch.js';
import { BASE_URL } from '../utils/config.js';
import { ThingsToCarry } from './OtherInfo';

const TourDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const { id } = useParams();

  // State to manage the visibility of different sections
  const [showInternity, setShowInternity] = useState(false);
  const [showInclusion, setShowInclusion] = useState(false);
  const [showDatesAndCosting, setShowDatesAndCosting] = useState(false);
  const [internityData, setInternityData] = useState(null);
  const [datesAndCostingData, setDatesAndCostingData] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { data: tour, loading: tourLoading, error: tourError } = useFetch(`${BASE_URL}/tours/${id}`);

  // Function to fetch tour internity data
  const fetchInternityData = async () => {
    try {
      // Close other sections and reset their states when itinerary is clicked
      setShowInclusion(false);
      setShowDatesAndCosting(false);
      if (showInternity) {
        setShowInternity(false);
        setSelectedDay(null);
      } else {
        const response = await fetch(`${BASE_URL}/Internity/${id}`);
        const data = await response.json();
        setInternityData(data);
        setShowInternity(true);
      }
    } catch (error) {
      setShowInternity(false);
    }
  };


  // Function to fetch Dates and Costing data
  const fetchDatesAndCostingData = async () => {
    try {
      // Close other sections and reset their states when Dates and Costing is clicked
      setShowInternity(false);
      setShowInclusion(false);
      if (showDatesAndCosting) {
        setShowDatesAndCosting(false);
      } else {
        const response = await fetch(`${BASE_URL}/Internity/it/${id}`);
        const data = await response.json();
        setDatesAndCostingData(data);
        setShowDatesAndCosting(true);
      }
    } catch (error) {
      setShowDatesAndCosting(false);
    }
  };

  const handleShowInclusion = () => {
    // Close other sections and reset their states when Other Information is clicked
    setShowInternity(false);
    setShowDatesAndCosting(false);
    setShowInclusion(!showInclusion);
  };

  

  // Function to handle click on a day in the itinerary
  const handleDayClick = (index) => {
    if (selectedDay === index) {
      // If the same day is clicked again, close the activities
      setSelectedDay(null);
    } else {
      setSelectedDay(index);
    }
  };

  const handleMonthClick = (index) => {
    if (selectedMonthIndex === index) {
      // If the same month is clicked again, close the dates
      setSelectedMonthIndex(null);
    } else {
      setSelectedMonthIndex(index);
    }
  };
  // Check if the data is still loading
  if (tourLoading) {
    return <h4 className='text-center pt-5'>Loading............</h4>;
  }

  // Check for errors
  if (tourError) {
    return <h4 className='text-center pt-5'>Error fetching data</h4>;
  }

  // Destructure properties from tour object
  const { photo, title, desc, price, city, tourDuration } = tour;

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className='tour__content'>
                <img src={photo} alt='' />

                <div className='tour__info'>
                  <h2>{city}</h2>

                  <div className='d-flex align-items-center gap-5'></div>
                  <div className='tour__extra-details'>
                    <span>
                    <i className='ri-map-pin-2-line'></i>
                      {title}
                      
                    </span>
                    <span>
                    <i className='ri-time-line'></i> {tourDuration}{' '}
                    </span>
                    <span>
                      <i className='ri-wallet-3-line'></i>
                      ₹{price} Person{' '}
                    </span>
                    <Button className='btn Secondary__btn' onClick={() => setShowFullDescription(!showFullDescription)}>
                      {showFullDescription ? 'Show Less' : 'Full Description'}
                    </Button>
                    
                  </div>
                  {/* Conditionally render description based on showFullDescription state */}
                  {showFullDescription && <p>{desc}</p>}

                  {/*====== tour detailssection ======*/}
                  <div className='tour__details mt-4'>
                    <div className='d-flex justify-content-between'>
                      <Button className='btn primary__btn' onClick={fetchInternityData}>
                        Itinerary
                      </Button>
                      {/* Add button to fetch Dates and Costing data */}
                      <Button className='btn primary__btn' onClick={fetchDatesAndCostingData}>
                        Dates and Costing
                      </Button>
                      <Button className='btn primary__btn' onClick={handleShowInclusion}>
                        Other Information
                      </Button>
                    </div>

                    {/* Display internity data if available and showInternity is true */}
                    {internityData && showInternity && (
                      <div style={containerStyle}>
                        {/* Map over the internity data and display the content */}
                        {internityData.miniData.map((data, index) => (
                          <div key={index}>
                            <div className='sc-Outer'>
                              <span className='sc-Inner'>
                                {`Day ${index + 1}:`}
                              </span>
                              <span className='sc-Inner-title'>{data.description}</span>
                              <span><i className={`ri-add-circle-${selectedDay === index ? 'fill' : 'line'}`}onClick={() => handleDayClick(index)}></i></span>
                            </div>
                            {selectedDay === index && (
                              <>
                                {/* Info for each day */}
                                <ul className='sc-Inner-info'>
                                  {data.activities.map((activity, activityIndex) => (
                                    <li key={activityIndex}>{activity}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Display Dates and Costing data if available and showDatesAndCosting is true */}
                    {datesAndCostingData && showDatesAndCosting && (
                      <div>
                        {/* Display the Dates and Costing data here */}
                        {datesAndCostingData && showDatesAndCosting && (
                          <div style={containerStyle}>
                            <span className='Date-heading'><h5>Dates</h5></span>


                            <div className="dates-and-costing">
                                {datesAndCostingData.dates.map((date, index) => (
                                  <div key={index} className="date">
                                    {/* Add onClick event to the Month-heading */}
                                    <span className={`Month-heading ${selectedMonthIndex === index ? 'active' : ''}`} onClick={() => handleMonthClick(index)}>
                                      <h6>{date.month}</h6>
                                    </span>
                                    
                                    {selectedMonthIndex === index && (
                                      <ul className='list'>
                                        {date.dates.map((day, dayIndex) => (
                                          <li key={dayIndex}>{dayIndex + 1}: {day}</li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                ))}
                            </div>
                            <span className='Date-heading'> <h5>Costing</h5></span>
                            <div className="costing">
                            <table>
                              <thead>
                                <tr>
                                  <th>Category</th>
                                  <th>Cost</th>
                                </tr>
                              </thead>
                              <tbody>
                                {datesAndCostingData.costing.map((cost, index) => (
                                  <tr key={index} className="cost">
                                    <td>{cost.category}</td>
                                    <td>₹{cost.cost}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          </div>
                        )}
                        {/* ... (Add your JSX to display Dates and Costing data) ... */}
                      </div>
                    )}

                    {/* Display "Things To Carry" data if available and showInclusion is true */}
                    {showInclusion && (
                      <div>
                        <ThingsToCarry />
                      </div>
                    )}
                  </div>
                  {/*====== tour review section end ======*/}
                </div>
                {/* Activity section */}
                {/* ... (Add your activity section JSX here) ... */}
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

const containerStyle = {
  marginBottom: '20px',
  marginTop: '20px',
  padding: '20px',
  border: '1px solid #ccc',
};

export default TourDetails;