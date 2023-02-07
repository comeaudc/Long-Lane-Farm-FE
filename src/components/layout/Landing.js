import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Long Lane Farms</h1>
          <p className='lead'>Lettuce Garden For You</p>
          <div className='buttons'>
            <Link to='' className='btn btn-primary'>
              Shop
            </Link>
            <Link to='' className='btn'>
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
