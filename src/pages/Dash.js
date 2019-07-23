import React, { Component } from 'react';

import './Dash.css';

import logo from '../assets/light/logo.svg';
import new_c from '../assets/light/new_col.svg';
import twitter from '../assets/twitter.svg';
import media from '../assets/satellite.svg';

class Dash extends Component {
    render() {
        return (
            <div className="dash">
                <header id="dash-header">
                    <div className="header-content">
                        <div>
                            <img className="btn" src={logo} alt="Culture Hack Network"/>
                        </div>
                        <div>
                            <img className="btn" src={new_c} alt="Sign up"/>
                        </div>
                        
                    </div>
                </header>

                <section id="dash-content">
                    <article>
                        <div className="collect-header">
                            <span><img className="c-icons" src={twitter} alt="Type" /></span>
                            <a href="#" ><strong>Fees must fall</strong></a>
                        </div>
                        <div className="collect-info">
                            <span>September 2018 - November 2018</span>
                            <a href="#" class="btn">
                            <span class="glyphicon arrow-thin-down"></span> Download
                            </a>
                            <a href="#">
                            <span class="glyphicon glyphicon-option-vertical"></span>
                            </a>
                        </div>
                    </article>

                    <article>
                        <div className="collect-header">
                            <span><img className="c-icons" src={media} alt="Type" /></span>
                            <a href="#" ><strong>Fees must fall</strong></a>
                        </div>
                        <div className="collect-info">
                            <span>September 2018 - November 2018</span>
                            <a href="#" class="btn">
                            <span class="glyphicon arrow-thin-down"></span> Download
                            </a>
                            <a href="#">
                            <span class="glyphicon glyphicon-option-vertical"></span>
                            </a>
                        </div>
                    </article>
                </section>
            </div>
        );
    }
}

export default Dash;