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
    grafo: {
        data:{},
        layout:{}
    },
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
        case 'CHANGE_N':
            return {
                ...state,
                feed:{
                    ...state.feed, curNarrative: action.data
                }
            }
        case 'CHANGE_C':
            return {
                ...state,
                feed:{
                    ...state.feed, curCollection: action.data
                }
            }
        case 'CHANGE_GRAFO':
            return {
                ...state,
                grafo: action.payload
            }
        default:
            return state;
    }
}