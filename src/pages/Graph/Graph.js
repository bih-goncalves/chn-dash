import React from 'react';
import { connect } from 'react-redux';
import Plot from 'react-plotly.js';

import './Graph.css';

import logo from '../../assets/light/logo.svg';
import twitter from '../../assets/twitter.svg';
import media from '../../assets/satellite.svg';

import SelectBox from '../../components/Select';
import NCollect from '../NCollect';

detailed = () => {
    let json_data 
    try {
        let response = fetch('https://teste-chn.herokuapp.com/atention/');
        json_data = response.json().time;
       } catch(error) {
        console.error(error);
      }

    var item = {
        x: [],
        y: [],
        mode: 'lines+markers',
        type: 'scatter',
        name: 'Tweets counter',
        text: [],
        textposition: 'top center',
        textfont: {
          family:  'Raleway, sans-serif'
        },
        marker: { size: 8 }
      };
  
    for (let i=0; i < Object.keys(json_data).length; i++) { 
        
        item.x.push(json_data[i].periods)
        item.y.push(json_data[i].sizes)
        item.text.push("P"+String(i)+' - '+json_data[i].periods)
      }
    var data_ = [item]
    
    var layout_ = { 
        xaxis: {
            autorange:true,
            title:'Period'
        },
        yaxis: {
            autorange:true,
            title:'Tweets counter'
        },
        legend: {
            y: 0.5,
            yref: 'paper',
            font: {
            family: 'Arial, sans-serif',
            size: 20,
            color: 'grey',
            }
        },
        title:'Tweets in numbers',
    };
    return {type:'CHANGE_GRAFO',
        payload:{
            data:data_,
            layout:layout_
        }
    }
  
}

const Graph = ({ feed, user, grafo, dispatch}) => (
    <div className="graph">
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
{/* part for graph */}
        <section id="graph-content">
            <div className="graph-header">
                <div className="head-left">
                    <button onClick={() => dispatch(detailed)}>Attention</button>
                    <button>Theme</button>
                </div>
                <div className="head-right">
                    <a className="btn-dash">
                    <span className="glyphicon glyphicon-arrow-down"></span> Download Data
                    </a>
                </div>
            </div>
            
            <div className="grafo">
                <Plot data={grafo.data} layout={grafo.layout}/>
                
            </div>
        </section>
    </div>
);

export default connect(state => ({ feed: state.reducer.feed, user: state.reducer.user , grafo}))(Graph);