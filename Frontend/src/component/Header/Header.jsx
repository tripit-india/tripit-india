import React, { useRef, useEffect, useContext } from 'react';
import { Row, Button } from 'reactstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.css';
import { AuthContext } from './../../context/AuthContext.js';
import { useNavigate } from 'react-router-dom';

const nav__links = [
  {
    path: '/home#featured-tour',
    display: 'Upcoming Trips',
    scrollTo: 'featured-tour',
  },
  {
    path: '/tour',
    display: 'Weekend Trips'
  },
  {
    path: '/internationalTour',
    display: 'International Trips'
  },
  {
    path: '/blog',
    display: 'Blog'
  },
  {
    path: '/about',
    display: 'About'
  },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/'); // Use navigate for navigation
  };

  const stickyHeaderFunc = () => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isSticky = scrollTop > 80;
      headerRef.current.classList.toggle('sticky__header', isSticky);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  };

  useEffect(() => {
    stickyHeaderFunc();
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/home') {
      // If we are on the home page, scroll to the section directly
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we are not on the home page, navigate to the home page first
      navigate('/home');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // You can adjust the delay if needed
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="logo" onClick={location.pathname === '/home' ? scrollToTop : null}>
            {/* Make the logo clickable and navigate to the home page */}
            <Link to="/home">
              <img src={logo} alt="" />
            </Link>
          </div>
          {/* Logo */}

          {/* menu start */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu d-flex align-items-center gap-4">
              {nav__links.map((item, index) => (
                <li className="nav__item" key={index}>
                  {item.scrollTo ? (
                    <span className="upcoming" onClick={() => scrollToSection(item.scrollTo)}>
                      {item.display}
                    </span>
                  ) : (
                    <NavLink
                      exact
                      to={item.path}
                      activeClassName="active__link"
                      onClick={location.pathname === '/home' ? scrollToTop : null}
                    >
                      {item.display}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* menu end */}

          <div className="nav__right d-flex align-items-center gap-1 ">
            <div className="nav__btns d-flex align-items-center gap-3 ">
              {user ? (
                <>
                  <h5 className='mb-0'>{user.username}</h5>
                  <Button className='btn btn-dark' onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button className="btn secondary__btn"> <Link to='/login'>Login</Link>
                  </Button>
                  <Button className="btn primary__btn"> <Link to='/register'>Register</Link>
                  </Button>
                </>
              )}
            </div>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </header>
  );
};

export default Header;
