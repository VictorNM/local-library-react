import { all } from 'redux-saga/effects';

import { saga as genreSaga } from './domain/genre';

export default function* rootSaga() {
    yield all([
        genreSaga()
    ])
}