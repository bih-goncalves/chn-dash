import React from 'react';
import { connect } from 'react-redux';

import './NCollect.css'
import twitter from '../assets/twitter.svg';
import media from '../assets/satellite.svg';
import x_button from '../assets/x_button.svg';
import new_c from '../assets/light/new_col.svg';

function showleft (show) {
    return {
        type: 'SET_NEWC',
        show,
    }
}

function changeHandler (collection_type) {
    return {
        type: 'COL_TYPE',
        collection_type,
    }
}

function handleSubmit (e) {
    e.preventDefault();
    alert(e.elements);
    let data = e.elements;
    return {
        type: 'ITEM_NEWC',
        data,
    }
  }

const NCollect = ( { newC, dispatch } ) => (
    <div>
        <button onClick={() => dispatch(showleft('block'))}  className="btn">
        <img src={new_c} alt="Create new collection"/>
        </button>

        <div className="collect-form" style={{'display':newC.show}}>

            <div className="menu-content">
                <div className="menu-title">
                    Create a Collection
                </div>
                <button onClick={() => dispatch(showleft('none'))} className="close">
                <img src={x_button}  alt="Close"/></button>

            <form onSubmit={() => dispatch(handleSubmit())}>
                <div className="new-collect">
                Collection Source* <span className="opaco" >(See data from Twitter or News Media)</span>
                <br></br>

                <div className="switch-field">
                    <input type="radio" id="radio-one" name="collection_type" value="twitter"
                    checked={ newC.collection_type === 'twitter'} onChange={ () => dispatch(changeHandler('twitter')) }/>
                    <label htmlFor="radio-one"><img src={twitter} alt="Type" /> Twitter</label>
                    <input type="radio" id="radio-two" name="collection_type" value="media" 
                    checked={ newC.collection_type === 'media'} onChange={ () => dispatch(changeHandler('media')) }/>
                    <label htmlFor="radio-two"><img src={media} alt="Type" /> Media</label>
                </div>
                <p>
                    Date range* <span className="opaco" >(max 31 Days)</span>
                    <br></br>
                    <input type="date" name="periodStart" className="form-text" 
                    placeholder="Start date" style={{'width':'48%'}} />
                    <input type="date" name="periodEnd" className="form-text" 
                    placeholder="End date" style={{'width':'48%'}} />
                </p>

                <p>
                    Keyword or phrase* <span className="opaco" >(max 3)</span>
                    <br></br>
                    <input type="text" name="query" className="form-text" 
                    placeholder="Add keyword or phrase..." style={{'width':'98%'}} />
                </p>
                </div>
                <button type="submit" className="menu-bottom" >Create Collection</button>
            </form>

            </div>
        </div>
    </div>
)

export default connect(state => ({ newC : state.newC }))(NCollect);



