import React from 'react';
import { connect } from 'react-redux';

import './Select.css';
import * as Actions from '../store/actions';

const SelectBox = ({ feed , dispatch}) => (
    <div>
        <select className="narrative-selector form-control" onChange={(e) => dispatch(Actions.changeNarrative(e))}
        value={feed.curNarrative}>
            {feed.narratives.map((option) => 
                <option key={option.id} value={option.id}>
                {option.description}
                </option> )}
            <option value="new">+ Create new space</option>
        </select>
    </div>
)

export default connect(state => ({ feed: state.reducer.feed }))(SelectBox);
