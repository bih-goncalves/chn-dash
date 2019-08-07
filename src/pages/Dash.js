import React from 'react';
import { connect } from 'react-redux';

import './Dash.css';
import NCollect from './NCollect';

import SelectBox from '../components/Select';
import * as Actions from '../store/actions';

import logo from '../assets/light/logo.svg';
import twitter from '../assets/twitter.svg';
import media from '../assets/satellite.svg';

const Dash = ({ feed , user, dispatch}) => (
    <div className="dash">
        <header id="dash-header">
            <div className="header-content">
                <div className="head-left">
                    <a href="/" ><img src={logo} alt="Culture Hack Network"/></a>

                    <SelectBox/>
                </div>
                
                <div className="head-right">
                    <NCollect onSubmit={dispatch}/>
                    {user.username}
                </div>
                
            </div>
        </header>

        <section id="dash-content">

            {feed.collections.map(collect => (
                <article className={collect.isDone === true?'':'shadow'} key={collect.id}>
                    <div className="collect-header">
                        <span><img className="c-icons" src={collect.collectionType === 'twitter'? twitter:media} alt="Type" /></span>
                        <strong ><a href="/graph">{collect.query}</a></strong>
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

export default connect(state => ({ feed: state.reducer.feed, user: state.reducer.user }))(Dash);