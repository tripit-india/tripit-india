import React, { useEffect } from 'react';

import { Container } from "reactstrap";

import '../styles/disclaimer.css'
const Disclaimer = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      })
    return <>
        <Container className='disclaimer_cont'>
            <h1 className='disclaimer_heading'>Disclaimer</h1>
            <p>At TripIt, we offer the www.tripitindia.in website as a valuable service to the public and website owners.</p>
            <p>We want to emphasize that TripIt holds no responsibility and expressly disclaims all liability for any damages that may arise from the use, reference to, or reliance on any information contained within our website. Although we make efforts to periodically update the information on the site, we cannot guarantee the absolute correctness, completeness, and up-to-dateness of the provided content.</p>
            <p>While the TripIt website may contain links providing direct access to other internet resources, including websites, we want to clarify that we are not responsible for the accuracy or content of information within these linked sites.</p>
            <p>Please note that links from tripitindia.in to third-party sites do not serve as an endorsement by TripIt of the parties or their products and services. Furthermore, the presence of advertisements and product or service information on our website should not be construed as an endorsement by TripIt.</p>
            <p>We urge all users to exercise discretion, verify information independently, and make informed decisions based on the content provided on our website. By accessing and utilizing www.tripitindia.in, users agree to abide by these terms and conditions.</p>
        </Container>
    </>
};

export default Disclaimer;