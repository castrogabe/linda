import React from 'react';
import { Helmet } from 'react-helmet';
import Jumbotron from '../components/Jumbotron';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Linda's Antiques | Home</title>
      </Helmet>
      <Jumbotron />
      <br />
      <div className='content'>
        <div className='box hero'>
          <h1>~ LINDA LLOYD ~</h1>
          <h4>Antiques | Objets d'Art | Interiors</h4>
          <p>
            Antiques, Mid-Century, Modern from yesteryear. Furniture. Décor. So
            many vintage gems—and pieces from the past—just waiting to be
            discovered.
          </p>
        </div>
        <div className='box highlight'>
          <h2>30 Years of Curated Collections</h2>
          <p>
            Explore our extensive collection gathered over three decades. Each
            piece tells a story and adds a touch of history to your home.
          </p>
        </div>
        <div className='box gallery'>
          <h2>Featured Items</h2>
          <div className='gallery-grid'>
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
