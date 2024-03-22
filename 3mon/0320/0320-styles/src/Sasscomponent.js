import React from 'react';
import './styles/Sasscomponent.scss';

export default function Sasscomponent() {
  return (
    <div>
      <div className="container">
        <div className="box red"></div>
        <div className="box orange"></div>
        <div className="box yellow"></div>
      </div>
      <button className="btn">Button</button>
      <button className="btn-primary">Button Primary</button>
    </div>
  );
}
