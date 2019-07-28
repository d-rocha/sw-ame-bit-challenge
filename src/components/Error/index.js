import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

import './style.scss';

const errorImg = require('../../assets/images/sw-error.gif');

const Error = () => (
  <div className="error">
    <img src={errorImg} alt="error" />
    <h4 className="error-msg">An Error has occured ... :(</h4>
    <p className="retry">try again</p>
    <div className="retry-btn"><Button><Link className="nes-btn is-error" to='/'>RESTART</Link></Button></div>
  </div>
);

export default Error;