import React, { Component } from 'react';
import api from '../services/api';

import './NCollect.css'
import twitter from '../assets/twitter.svg';
import media from '../assets/satellite.svg';
import x_button from '../assets/x_button.svg';
import new_c from '../assets/light/new_col.svg';

class NCollect extends Component {

    state = {
        query:'',
        narrative: this.props.narrative,
        periodStart:'',
        periodEnd:'',
        collection_type:'twitter',
        isDone:false
    }

    showleft = (show) => {
        show = 'block';
    }

    esconder = (show) => {
        show = 'none';
    }

    handleSubmit() {

        alert(this.state);
      }

    render() {
        let show = 'none';

        return (
            <div>
                <button onClick={this.showleft(show)}  className="btn">
                <img src={new_c} alt="Create new collection"/>
                </button>

                <div className="collect-form" style={{'display':show}}>

                    <div className="menu-content">
                        <div className="menu-title">
                            Create a Collection
                        </div>
                        <button onClick={this.esconder(show)} className="close">
                        <img src={x_button}  alt="Close"/></button>

                    <form onSubmit={this.handleSubmit}>
                        <div className="new-collect">
                        <p>Collection Source* <span className="opaco" >(See data from Twitter or News Media)</span>
                        <br></br>

                        <div class="switch-field">
                            <input type="radio" id="radio-one" name="collection_type" value="twitter"
                            checked={this.state.collection_type === 'twitter'} onChange={e => this.setState({ collection_type: e.target.value })} />
                            <label for="radio-one"><img src={twitter} alt="Type" /> Twitter</label>
                            <input type="radio" id="radio-two" name="collection_type" value="media" 
                            checked={this.state.collection_type === 'media'} onChange={e => this.setState({ collection_type: e.target.value })} />
                            <label for="radio-two"><img src={media} alt="Type" /> Media</label>
                        </div>
                        </p>
                        <p>
                            Date range* <span className="opaco" >(max 31 Days)</span>
                            <br></br>
                            <input type="date" name="periodStart" className="form-text" 
                            placeholder="Start date" style={{'width':'48%'}}
                            onChange={e => this.setState({ periodStart: e.target.value })} />
                            <input type="date" name="periodEnd" className="form-text" 
                            placeholder="End date" style={{'width':'48%'}}
                            onChange={e => this.setState({ periodEnd: e.target.value })} />
                        </p>

                        <p>
                            Keyword or phrase* <span className="opaco" >(max 3)</span>
                            <br></br>
                            <input type="text" name="query" className="form-text" 
                            placeholder="Add keyword or phrase..." style={{'width':'98%'}}
                            onChange={e => this.setState({ query: e.target.value })} />
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



