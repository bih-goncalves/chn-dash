import { takeLatest, put, all } from 'redux-saga/effects';
import api from '../services/api';

function* asyncGetCollections(action) {
    const data = yield api.get('collections/?format=json');
    
    yield put({ type: 'ADD_COLLECTION', data: data.data });
}

function* asyncGetNarratives(action) {
    const data = yield api.get('narratives/?format=json');
    
    yield put({ type: 'ADD_NARRATIVE', data: data.data });
}

export default function* rootSaga() {
    yield all([
        takeLatest('GET_COLLECTIONS', asyncGetCollections),
        takeLatest('GET_NARRATIVES', asyncGetNarratives),
    ]);
}