import React from 'react';
import { connect } from 'react-redux';

import './Dash.css';
import NCollect from './NCollect';
//import SelectBox from '../components/Select';

import logo from '../assets/light/logo.svg';
import twitter from '../assets/twitter.svg';
import media from '../assets/satellite.svg';

function novaColeta (form) {
    return {
        type: 'NEW_COLLECT',
        form
    }
}

const Dash = ({ feed , user, dispatch}) => (
    <div className="dash">
        <header id="dash-header">
            <div className="header-content">
                <div>
                    <img className="btn" src={logo} alt="Culture Hack Network"/>
                    </div><div>
                </div>
                <div>
                    <NCollect onSubmit={dispatch}/>
                </div>
                
            </div>
        </header>

        <section id="dash-content">

            {feed.collections.map(collect => (
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
)

export default connect(state => ({ feed: state.feed, user: state.user }))(Dash);