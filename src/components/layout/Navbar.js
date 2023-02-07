import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fa-solid fa-tractor'></i> Long Lane Farm
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='about.html'>About</Link>
        </li>
        <li>
          <Link to='products.html'>Products</Link>
        </li>
        <li>
          <Link to='plantSale.html'>Plant Sale</Link>
        </li>
        <li>
          <Link to='faq.html'>FAQ's</Link>
        </li>
        <li>
          <Link to='contact.html'>Contact</Link>
        </li>
        <li>
          <Link to='/login'>Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};
