import { all } from 'redux-saga/effects';

import { saga as authorSaga } from './domain/author';
import { saga as genreSaga } from './domain/genre';

export default function* rootSaga() {
    yield all([
        authorSaga(),
        genreSaga()
    ])
}