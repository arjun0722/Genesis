import React from 'react';
import './Banner.css';
import construct from '../images/construct.webp';

const Banner = () => {
  return (
    <div className="banner">
        <div className='Banner-innerbox'>
            <div className="description">
              <h1>CALCULATE YOUR APP. </h1>
              <h2>Geniusee estimator will help you to calculate the expected development time of your application as well as budget based on our experience working with software products.
              <br></br>
              select the items below which best describes your app and the features you require.
              </h2>
            </div>

            <div className="image-container">
                <img src={construct} alt="Banner" className="image" />
            </div>
        </div>
    </div>
  );
};

export default Banner;
