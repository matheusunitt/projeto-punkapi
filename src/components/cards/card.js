import React from 'react';
import './card.css';

const Card = ({ children }) => (
  <div className="wm-card">
    {children}
  </div>
)

export default Card;