import React, { Component } from 'react';
import api from '../services/api';

import './Dash.css';
import Modal from './../components/Dialog';

import logo from '../assets/light/logo.svg';
import twitter from '../assets/twitter.svg';
import media from '../assets/satellite.svg';

class Dash extends Component {

    state = {
        feed : [],
    };

    async componentDidMount() {
        const response = await api.get('collections/?format=json');

        this.setState({feed: response.data});
    }

    render() {
        return (
            <div className="dash">
                <header id="dash-header">
                    <div className="header-content">
                        <div>
                            <img className="btn" src={logo} alt="Culture Hack Network"/>
                        </div>
                        <div>
                            <Modal />
                        </div>
                        
                    </div>
                </header>

                <section id="dash-content">

                    {this.state.feed.map(collect => (
                        <article className={collect.is_done === true?'':'shadow'}>
                            <div className="collect-header">
                                <span><img className="c-icons" src={collect.collection_type === 'twitter'? twitter:media} alt="Type" /></span>
                                <a ><strong>{collect.query}</strong></a>
                            </div>
                            <div className="collect-info">
                                <span>{collect.periodStart} - {collect.periodEnd}</span>
                                <a class="btn-dash">
                                <span class="glyphicon glyphicon-arrow-down"></span> Download Data
                                </a>
                                <a style={{'pointer-events':'auto'}}>
                                <span class="glyphicon glyphicon-option-vertical" ></span>
                                </a>
                            </div> 
                        </article>

                    ))}
                </section>
            </div>
        );
    }
}

export default Dash;