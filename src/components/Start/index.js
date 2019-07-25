import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export default class Start extends Component {
  constructor(props) {
    super(props)
    this.state = {
      intro: {
        img: '',
        msg: '',
        btn: ''
      }
    }
  }

  componentDidMount() {
    this.hiddenTextIntro();
    this.loadIntro();
  }

  hiddenTextIntro = () => {
    setTimeout(() => {
      let div = document.getElementById("intro-text").style.display;
      if (div === "none")
        document.getElementById("intro-text").style.display = 'block';
      else
        document.getElementById("intro-text").style.display = "none";

    }, 3000)
  }

  loadIntro = () => {
    const banner = require('../../assets/images/sw-banner.png');
    setTimeout(() => {
      this.setState({
        intro: {
          img: <img src={banner} alt="banner" />,
          msg: 'Press Start',
          btn: <Button><Link to="/main">SALVAR</Link></Button>
        }
      })
    }, 4000)
  }

  render() {
    return (
      <div className="container-intro">
        <div id="intro-text">
          <span>A Long Time Ago, in a galaxy far,<br /> far away ...</span>
        </div>

        <div>
          <div className="banner">
            {this.state.intro.img}
          </div>

          <div className="msg-press-start">
            <span>{this.state.intro.msg}</span>
          </div>

          <div className="btn-start">
            {this.state.intro.btn}
          </div>
        </div>
      </div>
    );
  }
}
