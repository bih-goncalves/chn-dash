import React, { Component } from 'react';
import api from '../services/api';

import './Dash.css';
import NCollect from './NCollect';

import logo from '../assets/light/logo.svg';
import twitter from '../assets/twitter.svg';
import media from '../assets/satellite.svg';

class Dash extends Component {
    state = {
        feed: [],
        narrative: 2,
    }

    async componentDidMount() {
        const response = await api.get('collections/?format=json');

        this.setState({feed: response.data});
        //pegar a narrativa dessa request
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
                            <NCollect narrative={this.state.narrative}/>
                        </div>
                        
                    </div>
                </header>

                <section id="dash-content">

                    {this.state.feed.map(collect => (
                        <article className={collect.isDone === true?'':'shadow'} key={collect.query}>
                            <div className="collect-header">
                                <span><img className="c-icons" src={collect.collection_type === 'twitter'? twitter:media} alt="Type" /></span>
                                <a ><strong>{collect.query}</strong></a>
                            </div>
                            <div className="collect-info">
                                <span>{collect.periodStart} - {collect.periodEnd}</span>
                                <a className="btn-dash">
                                <span className="glyphicon glyphicon-arrow-down"></span> Download Data
                                </a>
                                <a style={{pointerEvents:'auto'}}>
                                <span className="glyphicon glyphicon-option-vertical" ></span>
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