import React from 'react';

const loadingImg = require('../../assets/images/sw-loader.gif');

const Loader = () => (
  <div className="loading">
    <img src={loadingImg} alt="loading" />
    <h4 className="loading-msg">Loading...</h4>
  </div>
);

export default Loader;