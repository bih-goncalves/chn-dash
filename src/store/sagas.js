import { takeLatest, put, all } from 'redux-saga/effects';
import api from '../services/api';

// get functions without narrative ID
function* asyncGetCollections(action) {
    const data = yield api.get('collections/?format=json');
    
    yield put({ type: 'GET_C', data: data.data });
}

function* asyncGetNarratives(action) {
    const data = yield api.get('narratives/?format=json');
    
    yield put({ type: 'GET_N', data: data.data });
}

// post functions without narrative ID
function* asyncNewCollection(action) {
    const data = yield api.post('collections/',action.req)
    .then(function(response) {
        return 'success'
    })
    .catch(function(error) { 
        console.log(error);
        return 'error'
    });
    console.log(data)
    if (data === 'success'){
        yield put({ type: 'GET_COLLECTIONS'})
    }
}

function* asyncNewNarrative(action) {
    const data = yield api.post('narratives/', action.narrative)
    .then(function(response) {
        return 'success'
    })
    .catch(function(error) { 
        console.log(error);
        return 'error'
    });

    if (data === 'success'){
        yield put({ type: 'GET_COLLECTIONS'})
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest('GET_COLLECTIONS', asyncGetCollections),
        takeLatest('GET_NARRATIVES', asyncGetNarratives),
        takeLatest('NEW_COLLECTION', asyncNewCollection),
        takeLatest('NEW_NARRATIVE', asyncNewNarrative),
    ]);
}