import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';

import './Graph.css';

import * as Actions from '../../store/actions';

import logo from '../../assets/light/logo.svg';
import twitter from '../../assets/twitter.svg';
import media from '../../assets/satellite.svg';

import SelectBox from '../../components/Select';
import NCollect from '../NCollect';

const Graph = ({ feed, user, grafo, dispatch}) => (
    <div className="graph">
        <header id="dash-header">
            <div className="header-content">
                <div className="head-left">
                    <a href="/" ><img src={logo} alt="Culture Hack Network"/></a>
                    <SelectBox/>
                </div>
                
                <div className="head-right">
                    <NCollect onSubmit={dispatch} runFirst={() => dispatch(Actions.detailed(feed.curCollection))}/>
                    {user.username}
                </div>
                
            </div>
        </header>
{/* part for graph */}
        <section id="graph-content">
            <div className="graph-header">
                <div className="head-left">
                    <button onClick={() => dispatch(Actions.detailed(feed.curCollection))}>Attention</button>
                    <button>Theme</button>
                </div>
                <div className="head-right">
                    <a className="btn-dash">
                    <span className="glyphicon glyphicon-arrow-down"></span> Download Data
                    </a>
                </div>
            </div>
            
            <div className="grafo">
                <Line data={grafo.data} />
            </div>
        </section>
    </div>
);

export default connect(state => ({ feed: state.reducer.feed, user: state.reducer.user , grafo: state.reducer.grafo}))(Graph);