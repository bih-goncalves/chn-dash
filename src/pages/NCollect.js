import React, { Component } from 'react';
import api from '../services/api';

import './NCollect.css'
import twitter from '../assets/twitter.svg';
import media from '../assets/satellite.svg';
import x_button from '../assets/x_button.svg';
import new_c from '../assets/light/new_col.svg';

class NCollect extends Component {

    state = {
        show: 'none',
        query:'',
        narrative: this.props.narrative,
        periodStart:'',
        periodEnd:'',
        collection_type:'twitter',
        isDone:false
    }

    showLeft = () => {
        if (this.state.show === 'none') {
            this.setState({show: 'block'})
        } else {
            this.setState({show: 'none'})
        } 
    }

    changeHandler = (e) => {
        let name = e.target.name
        let value = e.target.value

        switch (name) {
            case 'collection_type':
                this.setState({collection_type: value})
                break;
            case 'periodStart':
                this.setState({periodStart: value})
                break;
            case 'periodEnd':
                this.setState({periodEnd: value})
                break;
            case 'query':
                this.setState({query: value})
                break;
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var req = Object.assign({},this.state);
        delete req['show'];
        
        this.showLeft();
        this.props.onSubmit({
            type: 'NEW_COLLECT',
            req
        });
      }

    render() {

        return (
            <div>
                <button onClick={this.showLeft}  className="btn">
                <img src={new_c} alt="Create new collection"/>
                </button>

                <div className="collect-form" style={{'display':this.state.show}}>

                    <div className="menu-content">
                        <div className="menu-title">
                            Create a Collection
                        </div>
                        <button onClick={this.showLeft} className="close">
                        <img src={x_button}  alt="Close"/></button>

                    <form onSubmit={this.handleSubmit}>
                        <div className="new-collect">
                        Collection Source* <span className="opaco" >(See data from Twitter or News Media)</span>
                        <br></br>

                        <div className="switch-field">
                            <input type="radio" id="radio-one" name="collection_type" value="twitter"
                            checked={this.state.collection_type === 'twitter'} onChange={ this.changeHandler } />
                            <label htmlFor="radio-one"><img src={twitter} alt="Type" /> Twitter</label>
                            <input type="radio" id="radio-two" name="collection_type" value="media" 
                            checked={this.state.collection_type === 'media'} onChange={ this.changeHandler } />
                            <label htmlFor="radio-two"><img src={media} alt="Type" /> Media</label>
                        </div>
                        <p>
                            Date range* <span className="opaco" >(max 31 Days)</span>
                            <br></br>
                            <input type="date" name="periodStart" className="form-text" 
                            placeholder="Start date" style={{'width':'48%'}}
                            onChange={ this.changeHandler } />
                            <input type="date" name="periodEnd" className="form-text" 
                            placeholder="End date" style={{'width':'48%'}}
                            onChange={ this.changeHandler } />
                        </p>

                        <p>
                            Keyword or phrase* <span className="opaco" >(max 3)</span>
                            <br></br>
                            <input type="text" name="query" className="form-text" 
                            placeholder="Add keyword or phrase..." style={{'width':'98%'}}
                            onChange={ this.changeHandler } />
                        </p>
                        </div>
                        <button type="submit" className="menu-bottom" >Create Collection</button>
                    </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default NCollect;
