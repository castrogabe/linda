import React from 'react';
import { Helmet } from 'react-helmet';
import Jumbotron from '../components/Jumbotron';

export default function Shop() {
  return (
    <>
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <Jumbotron />
      <br />
      <div className='content'>
        <div className='box hero'>
          <h1>~ SHOP ~</h1>
          <h4>Antiques | Objets d'Art | Interiors</h4>
        </div>

        <div className='box highlight'>
          <h2>Shopping</h2>
          <div className='gallery-grid'>
            <div className='gallery-item'>
              <img src='/images/1.png' alt='Antique item 01' />
              <p>Pottery</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/2.png' alt='Antique item 1' />
              <p>Glassware</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/3.png' alt='Antique item 2' />
              <p>Sculpture</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/4.png' alt='Antique item 3' />
              <p>Painting</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/5.png' alt='Antique item 4' />
              <p>Bust</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/6.png' alt='Antique item 5' />
              <p>Glass Bowl</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/7.png' alt='Antique item 6' />
              <p>Quan yen</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/8.png' alt='Antique item 7' />
              <p>Lamps</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/9.png' alt='Antique item 8' />
              <p>Painting</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/10.png' alt='Antique item 9' />
              <p>Vases</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/11.png' alt='Antique item 10' />
              <p>Statue</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/12.png' alt='Antique item 11' />
              <p>Stoneware</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/13.png' alt='Antique item 12' />
              <p>Ceramic</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/14.png' alt='Antique item 14' />
              <p>Pottery</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/15.png' alt='Antique item 15' />
              <p>Wall Piece</p>
            </div>

            <div className='gallery-item'>
              <img src='/images/16.png' alt='Antique item 16' />
              <p>Cabinet</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/17.png' alt='Antique item 17' />
              <p>Greek Key Pot</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/18.png' alt='Antique item 18' />
              <p>Asian</p>
            </div>
            <div className='gallery-item'>
              <img src='/images/19.png' alt='Antique item 19' />
              <p>Wood Vase</p>
            </div>
          </div>
        </div>
        <div className='box visit-us'>
          <h2>Visit Us</h2>
          <p>
            Located in the heart of Claremont, CA, our shop is a treasure trove
            of antique wonders. We look forward to welcoming you.
          </p>
        </div>
      </div>
      <br />
    </>
  );
}
