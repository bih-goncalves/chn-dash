import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        reducer,
    }),
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
// load narratives
store.dispatch({
    type:'GET_NARRATIVES'
});
// load first narrative collections
store.dispatch({
    type:'GET_COLLECTIONS',
    narrative:store.getState().reducer.feed.curNarrative
})

export default store;