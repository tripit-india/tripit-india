import React, { useEffect } from 'react';

import { Container } from "reactstrap";

import '../styles/cancellationpolicy.css';

const CancellationPolicy = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      })
    return <>
        <Container>
            <h1 className='cancel_heading'>Cancellation Policy</h1>
            <h5>NO REFUND SHALL BE MADE WITH RESPECT TO THE INITIAL BOOKING AMOUNT FOR ANY CANCELLATIONS. HOWEVER,</h5>
            <ul className='bullet-list'>
                <li>If cancellations are made 30 days before the start date of the trip, 30% of the trip cost will be charged as cancellation fees.</li>
                <li>If cancellations are made 15-30 days before the start date of the trip, 50% of the trip cost will be charged as cancellation fees.</li>
                <li>If cancellations are made within 0-15 days before the start date of the trip, 100% of the trip cost wSill be charged as cancellation fees.</li>
                <li>In the case of unforeseen weather conditions or government restrictions, certain activities may be canceled and in such cases, the operator will try his best to provide an alternate feasible activity. However, no refund will be provided for the same.</li>
            </ul>
        </Container>
    </>
};

export default CancellationPolicy;