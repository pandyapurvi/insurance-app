import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav>
        <div>
          <ul>
            <li>
              <a href="/">HomePage</a>
            </li>

            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
      </nav>
  )
};

export default Navbar;
