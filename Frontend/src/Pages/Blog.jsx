import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import styles from '../styles/blog.css'; // Import the CSS module
import { BASE_URL } from '../utils/config.js';

const truncateDescription = (description) => {

  const words = description.split(' ');
  if (words.length > 20) {
    return words.slice(0, 20).join(' ') + '...';
  }
  return description;
};

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  // State to store the fetched blog data
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blog data from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blogs`);
        const data = await response.json();
        setBlogs(data.data); // Use data.data to access the array of blogs
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog data:', error);
        // If there's an error fetching data, set an empty array and loading to false
        setBlogs([]);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <section>
        <div className="top_cover_blog">
          <h1 className="sub_heading">Blog Details</h1>
        </div>
      </section>
      <Container>
        <Row>
          {loading ? (
            <Col>
              <p>Loading...</p>
            </Col>
          ) : blogs.length === 0 ? (
            <Col>
              <p>No blogs found.</p>
            </Col>
          ) : (
            blogs.map((blog) => (
              <Col key={blog._id} md={6} lg={4} className="column">
                <div className="customCard">
                  <div className="cardImageContainer">
                    <img src={blog.mainImage} alt="" className="cardImage" />
                  </div>
                  <div className={styles.cardBody}>
                    <h2 className="cardTitle">{blog.mainTitle}</h2>
                    <p className="cardDescription">{truncateDescription(blog.mainDescription)}</p>
                    <Link
                      to={{
                        pathname: `/blog/${blog._id}`,
                        state: { blogData: blog },
                      }}
                      className="readMoreButton"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
};

export default BlogPage;
