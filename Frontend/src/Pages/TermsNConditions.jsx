import React, { useEffect } from 'react';

import { Container } from "reactstrap";
import '../styles/termsnconditions.css'

const TermsNConditions = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      })
    return <>
        <Container>
            <h1 className='tnc_heading'>Terms & Conditions</h1>
            
            <ul className="bullet-list">
                <li><b>Content Ownership: </b>All photos/videos created during TripIt's trips, either by our content creators or clients, become the property of TripIt. They may be used by TripIt India for advertising across various media platforms. Unauthorized use of this digital content for commercial purposes is strictly prohibited without obtaining proper permissions from TripIt.</li>
                <li><b>Payment and Booking: </b>Full payment of the trip cost must be completed before the trip begins. Failure to complete pending payments may result in trip cancellation.</li>
                <li><b>Valid Identification: </b>All travelers must present valid government-issued IDs during boarding. No boarding will be allowed without proper identification.</li>
                <li><b>Non-Transferable Bookings: </b>Bookings are non-transferable, and only the names mentioned at the time of confirmation are allowed to travel.</li>
                <li><b>Passport Validity: </b>For international travel, it is essential that passports remain valid for at least six (6) months from the intended travel date and are undamaged. TripIt is not responsible for travelers with passports that do not meet this requirement.</li>
                <li><b>Non-Refundable </b>Inclusions: No refunds will be made for any inclusions not availed by the client.</li>
                <li><b>Luggage and Belongings: </b>Travelers are responsible for their luggage and belongings. TripIt India shall not be liable for any damage or missing items during the tour.</li>
                <li><b>Departure Time: </b>Departure times are fixed, and all travelers must report at the pickup point 30 minutes prior to the scheduled departure.</li>
                <li><b>Air Conditioning Policy: </b>In hilly areas, air conditioning will be switched off. Additionally, during the trip, the driver may turn off the AC for safety reasons along uneven and dangerous routes.</li>
                <li><b>Code of Conduct: </b>Misconduct or indiscipline will not be tolerated during the tours. We promote a cordial travel community to ensure a hassle-free and memorable experience for all.</li>
                <li><b>Travel Risks: </b>Traveling with TripIt involves adventure and may include risks like accidents, injury, illness, financial repercussions, etc. Participants are advised to understand the inherent risks and take necessary precautions.</li>
                <li><b>Force Majeure: </b>TripIt shall not be responsible for delays or alterations in the program due to factors like natural hazards, accidents, weather conditions, political closures, or other untoward incidents.</li>
                <li><b>Injury or Illness: </b>In case of participant injury/illness during the tour, external evacuation/transport services may be engaged to safeguard their health. Any additional costs incurred will be borne by the concerned participant/participant's family.</li>
                <li><b>Insurance: </b>TripIt does not provide insurance coverage for sickness, accidents, or losses due to theft or other reasons. Participants are advised to obtain appropriate insurance policies.</li>
                <li><b>Itinerary Changes: </b>Factors like weather, road conditions, and physical abilities of participants may lead to alterations in the itinerary. TripIt reserves the right to make necessary changes in the interest of safety and comfort.</li>
            </ul>
        </Container>
    </>
};

export default TermsNConditions;