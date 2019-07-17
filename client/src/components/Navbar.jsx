import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.css';

const Navbar = () => (
    <div>
    <ul className="nav">
      <li><a href="/">HomePage</a></li>
      <li><a href="/faq">FAQ</a></li>
    </ul>
    </div>

);
export default Navbar;
