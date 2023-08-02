import React from 'react'; 
import Slider from 'react-slick';

const Testimonial =() => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    


    return (
        <Slider {...settings}>
        <div className='tesimonial py-4 px-3'>
            <p>
            An absolutely thrilling experience! The Ladakh 
            Adventure tour was beyond my expectations. The 
            landscapes were awe-inspiring, and the ride 
            through the mountain passes was exhilarating. 
            The group size was just right, and our guide was
             knowledgeable and friendly. 
            </p>
            <div className='d-flex align-item-center gap-4 mt-3'>
                <div>
                    <h6 className='mb-0 mt-3'>Yash</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className='tesimonial py-4 px-3'>
            <p>
            The Jaipur Heritage Tour was a perfect blend of 
            history and culture. The palaces and forts in 
            Jaipur were magnificent, and the local markets
             were a shopper's paradise. Our tour guide was 
             well-versed in the city's history and shared
              fascinating stories
            </p>
            <div className='d-flex align-item-center gap-4 mt-3'>
                <div>
                    <h6 className='mb-0 mt-3'>Jyotsna</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className='tesimonial py-4 px-3'>
            <p>
            Visiting the Taj Mahal was a dream come true! 
            The Agra Taj Mahal Excursion was seamless, and
             the sunrise view of the monument was breathtaking. 
             The guide provided insightful information about
              the Mughal history and architecture.
            </p>
            <div className='d-flex align-item-center gap-4 mt-3'>
                <div>
                    <h6 className='mb-0 mt-3'>Sanjeev</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
            <div className='tesimonial py-4 px-3'>
                <p>
                The Varanasi Spiritual Journey was a life-changing 
                experience. The spiritual energy of Varanasi is 
                unmatched, and witnessing the Ganga Aarti was truly 
                divine. The yoga and meditation sessions were rejuvenating, 
                and the serene boat ride along the Ganges left me in awe. 
                </p>
                <div className='d-flex align-item-center gap-4 mt-3'>
                    
                    <div>
                        <h6 className='mb-0 mt-3'>Vishav</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        <div className='tesimonial py-4 px-3'>
                <p>
                The Rishikesh Yoga Retreat was the perfect escape
                 from the city's chaos. The location was serene, 
                 surrounded by lush greenery and the soothing sound 
                 of the river. The yoga classes were invigorating,
                  and the instructors were skilled and supportive. 
                 
                </p>
                <div className='d-flex align-item-center gap-4 mt-3'>
               
                <div>
                <h6 className='mb-0 mt-3'>Vishal</h6>
                <p>Customer</p>
                </div>
            </div>
            </div>
        <div className='tesimonial py-4 px-3'>
            <p>
            Goa Beach Retreat was an absolute blast! 
            The beaches were stunning, and the atmosphere was so lively.
             From beach parties to water sports, there was never
              a dull moment. The Goan cuisine was delectable, 
              and the local markets were a treasure trove of souvenirs. 
            </p>
            <div className='d-flex align-item-center gap-4 mt-3'>
                
                <div>
                    <h6 className='mb-0 mt-3'>Sarika</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        </Slider>
        );
};

export default Testimonial;


