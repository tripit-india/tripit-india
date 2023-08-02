import React, { useEffect } from 'react';

import { Container } from "reactstrap";
import '../styles/privacypolicy.css';

const PrivacyPolicy = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      })
    return <>
        <Container className='pp'>
            <h1 className='pp_heading'>PRIVACY POLICY</h1>
            <p>At TripIt, the terms "We," "Us," "Our," and "Company" refer to TripIt, and the terms "You," "Your," and "Yourself" refer to the users.</p>
            <p>This Privacy Policy is an electronic record in the form of an electronic contract, created under the Information Technology Act, 2000, and the rules made thereunder, including the amended provisions related to electronic documents/records in various statutes as amended by the Information Technology Act, 2000. This Privacy Policy does not require any physical, electronic, or digital signature.</p>
            <p>This Privacy Policy forms a legally binding document between you and TripIt (both terms defined below). The terms of this Privacy Policy become effective upon your acceptance of the same (directly or indirectly, through electronic form by clicking on the "I accept" tab or by using the website or through other means) and will govern the relationship between you and TripIt for your use of the website "www.tripitindia.in" (defined below).</p>
            <p>This document is published in accordance with the provisions of the Information Technology (reasonable security practices and procedures and sensitive personal data or information) rules, 2011, under the Information Technology Act, 2000, which requires the publishing of the Privacy Policy for the collection, use, storage, and transfer of sensitive personal data or information.</p>
            <p>Please read this Privacy Policy carefully. By using the Website, you indicate that you understand, agree, and consent to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please refrain from using this Website.</p>
            <p>By providing us with your Information or by using the facilities provided by the Website, you hereby consent to the collection, storage, processing, and transfer of any or all of your Personal Information and Non-Personal Information by us, as specified under this Privacy Policy. You further agree that such collection, use, storage, and transfer of your Information shall not cause any loss or wrongful gain to you or any other person.</p>
        
            <h3>Cookies</h3>
            <p>To enhance the user experience on our website, TripIt, we may utilize "cookies" or similar electronic tools to collect information that assigns a unique, random number (User Identification - User ID) to each visitor. This helps us understand individual interests based on the Identified Computer. Rest assured, unless you provide voluntary identification (e.g., through registration), we won't know your personal identity, even if a cookie is assigned to your computer. Cookies can only contain information you provide, such as when you request our Personalized Horoscope. They cannot read data from your hard drive. Please note that our advertisers may also employ their own cookies on your browser (if you click on their ads), a process outside of our control.</p>
            <p>When you visit our site, our web servers automatically gather limited information about your computer's Internet connection, including your IP address. However, your IP address does not personally identify you. This information is used to fulfill web page requests, customize our site to suit user interests, measure traffic within our site, and inform advertisers about the geographic locations of our visitors.</p>
            <h3>LINKS TO THE OTHER SITES</h3>
            <p>Our policy discloses the privacy practices for our own web site only. Our site provides links to other websites also that are beyond our control. We shall in no way be responsible in a way for your use of such sites.</p>

            <h3>INFORMATION SHARING</h3>
            <p>We share the sensitive personal information to any third party without obtaining the prior consent of the user in the following limited circumstances:</p>
            <p>(a) When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offenses. These disclosures are made in good faith and belief that such disclosure is reasonably necessary for enforcing these Terms; for complying with the applicable laws and regulations.</p>
            <p>(b) We propose to share such information within its group companies and officers and employees of such group companies for the purpose of processing personal information on its behalf. We also ensure that these recipients of such information agree to process such information based on our instructions and in compliance with this Privacy Policy and any other appropriate confidentiality and security measures.</p>

            <div className='pp_add'>
                <h5>224, near Ramchandra Market, Rajpur Khurd Extension, Chhatarpur, Delhi, 110074</h5>

                <h5>tripit1905@gmail.com</h5>
                <h5>+91 7976277664</h5>
            </div>
        
        </Container>
    </>
};

export default PrivacyPolicy;