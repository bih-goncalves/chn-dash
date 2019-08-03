import { createStore } from 'redux';
import { reducer as FormReducer } from 'redux-form';

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
    form: FormReducer,
    newC: {
        show:'none',
        query:'',
        narrative: '',
        periodStart:'',
        periodEnd:'',
        collection_type:'twitter',
        isDone:false
    },
};

function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SET_NEWC':
            return { ... state,
                newC: {... state.newC,
                    show: action.show
                }
            };
            break;
        case 'ITEM_NEWC':
            console.log(action);
            break;

        case 'COL_TYPE':
            return { ... state,
                newC: {... state.newC,
                    collection_type: action.collection_type
                }
            };
            break;

    }

    return state;
}

const store = createStore(reducer);

export default store;