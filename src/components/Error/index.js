import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

const errorImg = require('../../assets/images/sw-error-1.gif');

const Error = () => (
  <div>
    <img src={errorImg} alt="error" />
    <h4 className="error-msg ">An Error has occured ... :(</h4>
    <p className="retry">try again</p>
    <div><Button><Link to='/'>RESTART</Link></Button></div>
  </div>
);

export default Error;