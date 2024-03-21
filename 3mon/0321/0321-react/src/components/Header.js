import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/student">student</Link>
        </li>
      </ul>
    </header>
  );
}
