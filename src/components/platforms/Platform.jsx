import React from 'react';
import './Platform.css';
import SquareCard from '../SquareCard/SquareCard';

const Platform = () => {
  return (
    <div className="rate-input-container">
      <div className="block-title">
        <p>02</p>
        <h6>What is your current or expected average hourly rate in USD per one team member ?</h6>
      </div>
      <div>
      <SquareCard />
      </div>
    </div>
  );
};

export default Platform;
