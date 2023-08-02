import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import  '../styles/blogdetials.css'; 
import { BASE_URL } from '../utils/config.js';

const BlogDetailPage = () => {
  const { id } = useParams(); 
  const [blogDetail, setBlogDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blogs/${id}`);
        const data = await response.json();
        setBlogDetail(data.data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog detail data:', error);
     
        setBlogDetail(null);
        setLoading(false);
      }
    };
    fetchBlogDetail();
  }, [id]);

  return (
    <>
      <section>
          {blogDetail && (
            <div className="top_cover_image">
              <img src={blogDetail.mainImage} alt="" className="top_cover_image" />
            </div>
          )}
        </section>
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : !blogDetail ? (
          <p>Blog not found.</p>
        ) : (
          <div className="card">
            
            <div className="cardBody">
              <h2 className="cardTitle">{blogDetail.mainTitle}</h2>
              <p className="carddeacription">{blogDetail.mainDescription}</p>
              
              {blogDetail.subtitles.map((subtitle) => (
                <div key={subtitle._id} className="subtitle">
                  <h3>{subtitle.subtitleTitle}</h3>
                  <img src={subtitle.subtitleImage} alt="" />
                  <p>{subtitle.subtitleDescription}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default BlogDetailPage;
