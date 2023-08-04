import React from 'react'; 
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';

import money from '../assets/images/money.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData =[
    {
        imgUrl:money,
        title:"Cost-Effective Travelling",
        desc:"Everyone desires to travel the world but take a step back because of the huge money spent while travelling. Well, budget friendly trip is always the best solution for such situations. Here we are planning a cost effective yet super fun trip for you."
    },
    {
        imgUrl:guideImg,
        title:"Friendly Travel Buddies",
        desc:"Solo traveling can be an incredibly rewarding and transformative experience. It offers a unique opportunity to discover new places, cultures, and yourself. Cherry on the cake is travelling with strangers and making lifetime of memories and new friends."
    },
    {
        imgUrl:customizationImg,
        title:"Local Expertise",
        desc:"At the time of planning a holiday, we keep a track of airfare, the best hotels to stay in, and all rentals but we sometimes tend to overlook local tours and experiences. Here we are here to help you experience your Vacation destination like a local and enjoy every bit of it."
    },
]
 
const ServiceList =() => {
    return <>
      {
        serviceData.map((item,index) => <Col lg ='3' md = '6' sm ='12'className='mb-4' key ={index}><ServiceCard item={item} />
        </Col>)
      }  
    </>
};

export default ServiceList;