import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './../Pages/Home';
import Tour from './../Pages/Tour';
import TourDetails from './../Pages/TourDetails';
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import SearchResultList from './../Pages/SearchResultList';
import SearchResultList2 from './../Pages/SearchResultList2';
import ThankYou from '../Pages/ThankYou';
import InternationalTour from './../Pages/internationalTour';
import About from './../Pages/about';
import TourDetails2 from './../Pages/internationalTourDetails';
import BlogPage from './../Pages/Blog';
import BlogDetails from './../Pages/blogDetails'
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import CancellationPolicy from '../Pages/CancelationPolicy';
import TermsNConditions from '../Pages/TermsNConditions';
import Disclaimer from '../Pages/Disclaimer';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/internationalTour" element={<InternationalTour />} />
      <Route path="/tour/:id" element={<TourDetails />} />
      <Route path="/internationalTour/:id" element={<TourDetails2 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/internationalTour/search" element={<SearchResultList2 />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      <Route path="/tnc" element={<TermsNConditions />} />
      <Route path="/disclaimer" element={<Disclaimer/>}/>
    </Routes>
  );
};

export default Router;
