import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Row className='content'>
        <Col md={3}>
          Connect with us
          <div className='socialIcon'>
            <ul className='list-unstyled'>
              <li>
                <Link
                  to='https://www.facebook.com/'
                  className='facebookIcon'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-facebook'></i> Facebook
                </Link>
              </li>
              <li>
                <Link
                  to='https://www.instagram.com/'
                  className='instagramIcon'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-instagram'></i> Instagram
                </Link>
              </li>
            </ul>
          </div>
        </Col>

        <Col md={3}>
          Get To Know Us
          <div className='socialIcon'>
            <ul className='list-unstyled'>
              <li>
                <Link to='/about' className='email'>
                  {' '}
                  <i className='fa fa-info'></i> About Us
                </Link>
              </li>
              <li>
                <Link to='/gallery' className='email'>
                  {' '}
                  <i className='fa fa-info'></i> Antique Gallery
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={3}>
          Hours
          <div className='socialIcon'>
            <ul className='list-unstyled'>
              <li>Monday:</li>
              <li>Tuesday:</li>
              <li>Wednesday:</li>
              <li>Thursday:</li>
              <li>Friday:</li>
              <li>Saturday:</li>
              <li>Sunday:</li>
            </ul>
          </div>
        </Col>

        <Col md={3}>
          Linda Lloyd Antiques & Interiors
          <div className='socialIcon'>
            <ul className='list-unstyled'>
              <li>1276 N Yale Ave</li>
              <li>Claremont, CA</li>
              <li>91711</li>
              <li>
                <a href='mailto:#@gmail.com' className='email'>
                  <i className='fa fa-envelope'></i> Email Me via gmail
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <hr className='hrLine' />

      <Row>
        <Col className='text-center mt-3'>
          ~ &copy;{new Date().getFullYear()} Linda Lloyd ~
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
