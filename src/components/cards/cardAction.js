import React from 'react';
import './card.css';

const CardAction = ({ children }) => (
  <div className="wm-card-actions">
    {children}
  </div>
)

export default CardAction;