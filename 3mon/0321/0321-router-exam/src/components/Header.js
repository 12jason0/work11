import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

export default function Header() {
  return (
    <div className="con">
      <Link to="/">
        <h2>ReactRoouter 실습</h2>
      </Link>
      <nav>
        <ul>
          <li style={{ margin: '4px' }}>
            <Link to="/student/kdt">학생KDT</Link>
          </li>
          <li style={{ margin: '4px' }}>
            <Link to="/student/condingon">코딩온</Link>
          </li>
          <li style={{ margin: '4px' }}>
            <Link to="/student/new?name=kdt3rd">serchParams</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
