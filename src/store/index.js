import { createStore } from 'redux';

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
            console.log(action.req);
            break;
    }

    return state;
}

const store = createStore(reducer);

export default store;