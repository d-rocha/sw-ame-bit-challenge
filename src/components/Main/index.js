import React, { Component } from 'react';
import api from '../../services/data/api';
import Button from '../Button';
import Loader from '../Loader';

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
        this.setState({ loader: true });
        let id = Math.floor(Math.random() * 61 + 1);
        this.getPlanetId(id).then(planet => {
            this.setState({
                planet: planet.data,
                loader: false
            })
        }).catch(error => {
            this.setState({ loader: false });
        });
    };

    render() {
        if (this.state.loader) {
            return <Loader />
        }

        return (
            <div className='container'>
                <div id='planet-card'>
                    <h1>{this.state.planet.name}</h1>
                    <p>Population: <span>{this.state.planet.population}</span></p>
                    <p>Climate: <span>{this.state.planet.climate}</span></p>
                    <p>Terrain: <span>{this.state.planet.terrain}</span></p>
                    <p>Featured in Films: <span>{this.state.planet.films.length}</span></p>
                </div>
                <div><Button onClick={this.nextPlanet}>NEXT</Button></div>
            </div>

        );
    }
}