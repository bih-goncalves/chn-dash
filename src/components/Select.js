import React from 'react';
import { connect } from 'react-redux';

import './Select.css';

const SelectBox = ({ feed , dispatch}) => (
    <div>
        <select className="narrative-selector form-control" onchange="">
            {feed.narratives.map((option) => 
                <option key={option.id} value={option.id}>{option.description}</option>
                )}
        </select>
    </div>
)

export default connect(state => ({ feed: state.reducer.feed }))(SelectBox);
