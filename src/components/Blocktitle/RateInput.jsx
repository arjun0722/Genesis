import React from 'react';
import './RateInput.css';

const RateInput = () => {
  return (
    <div className="rate-input-container">
      <div className="block-title">
        <p>01</p>
        <h6>What is your current or expected average hourly rate in USD per one team member ?</h6>
      </div>
      <div className="rate">
        <div>
          <div className='input-box'>
            <div className='box'> 
            <input
              id="rate"
              type="number"
              min="0.00"
              max="1000.00"
              step="1.00"
            />
            <span>$/HOUR</span>
            </div>
          </div>
        <label htmlFor="rate">Define average hourly rate of your development team. It can be average hourly cost of your inhouse team member or rates that you are paying to your technology partner.</label>
        </div>
      </div>
    </div>
  );
};

export default RateInput;
