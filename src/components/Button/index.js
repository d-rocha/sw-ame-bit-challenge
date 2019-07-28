import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class Button extends Component {
    static defaultProps = {
        children: "START"
    };

    static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.string
    }

    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}
