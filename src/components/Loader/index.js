import React from 'react';

const loadingImg = require('../../assets/images/sw-loader.gif');

const Loader = () => (
  <div>
    <img src={loadingImg} alt="loading" />
    <h4>Loading...</h4>
  </div>
);

export default Loader;