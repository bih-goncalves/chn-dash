const INITIAL_STATE = {
    user: {
        username: 'B',
        id: 1,
        token: 'shdakjahsk'
    },
    feed: {
        curNarrative:0,
        curCollection:{},
        narratives:[],
        collections:[],
    },
    newC: {},
};

export default function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'GET_C':
            return {
                ...state,
                feed: {
                    ...state.feed, collections: action.data
                }
            };
        case 'GET_N':
            return {
                ...state,
                feed: {
                    ...state.feed, narratives: action.data,
                    curNarrative: action.data[0].id,
                }
            };
        default:
            return state;
    }
}