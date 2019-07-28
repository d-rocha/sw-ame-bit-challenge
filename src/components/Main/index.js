import React, { Component } from 'react';
import api from '../../services/data/api';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Loader from '../Loader';
import Error from '../Error';

import './style.scss';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planet: {
                name: '',
                population: '',
                climate: '',
                terrain: '',
                films: []
            },
            loader: false,
            error: false,
            arrow: '',
            btn: ''
        }
    }

    componentDidMount() {
        this.nextPlanet();
    }

    getPlanetId = async id => {
        let response = await api.get(`/planets/${id}`)
        return response;
    }

    nextPlanet = () => {
        const arrowIndicator = require('../../assets/images/sw-arrow-indicator.gif');

        this.setState({ loader: true });
        let id = Math.floor(Math.random() * 61 + 1);
        this.getPlanetId(id).then(planet => {
            this.setState({
                planet: planet.data,
                loader: false,
                error: false,
                arrow: <img src={arrowIndicator} alt="arrow indicator" />,
                btn: <Button><Link className='nes-btn is-warning' onClick={this.nextPlanet}>NEXT</Link></Button>
            })
        }).catch(error => {
            this.setState({ loader: false, error: true });
        });
    };

    render() {
        if (this.state.loader) {
            return <Loader />
        }

        if (this.state.error) {
            return <Error />
        }

        return (
            <div>
                <h1 className="title">The Planets</h1>
                <div class='container'>
                    <div className="card-wrap">
                        <div className="card card-bg">
                            <div className="card-info">
                                <h1>{this.state.planet.name}</h1>
                                <span className="arrow-indicator">{this.state.arrow}</span>
                                <p>Population: <span>{this.state.planet.population}</span></p>
                                <p>Climate: <span>{this.state.planet.climate}</span></p>
                                <p>Terrain: <span>{this.state.planet.terrain}</span></p>
                                <p>Featured in Films: <span>{this.state.planet.films.length}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="btn-next">
                    <div className="btn-next">
                        {this.state.btn}
                    </div>
                </div>
            </div>
        );
    }
}