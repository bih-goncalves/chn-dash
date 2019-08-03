import { createStore , applyMiddleware} from 'redux';
import api from '../services/api';

const INITIAL_STATE = {
    user: {
        username: 'B',
        id: 1,
        token: 'shdakjahsk'
    },
    feed: {
        curNarrative:{},
        curCollection:{},
        narratives:[],
        collections:[],
    },
    newC: {},
};

function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'NEW_COLLECT':
            api.post('collections/',action.req);
            break;
        default:
            break;
    }
    return state;
}

const store = createStore(reducer);

export default store;