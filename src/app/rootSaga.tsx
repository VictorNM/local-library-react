import { all } from 'redux-saga/effects';

import { saga as genreSaga } from './page/genre';

export default function* rootSaga() {
    yield all([
        genreSaga()
    ])
}