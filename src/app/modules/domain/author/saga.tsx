import { takeLatest, call, put, all } from "redux-saga/effects";
import { AnyAction } from "redux";

import actionTypes from './action-types';
import actions from './actions';
import { authorApi } from '../../../../api';
import { Author } from '../../../../dto';

export function* saga() {
    yield all([
        takeLatest(actionTypes.GET_ALL_AUTHORS_ASYNC, getAllAuthorsSaga)
    ]);
}

function* getAllAuthorsSaga() {
    try {
        const response = yield call(authorApi.getAuthorList);
        checkServerError(response)

        const authors: any= response.data.data.authors;
        yield put(actions.getAllAuthorsSucceed(authors));

    } catch (error) {
        yield put(actions.getAllAuthorsFailed(error));
    }
}

function checkServerError(response: any) {
    const errors = response.data.errors;
    if (errors) {
        throw errors
    }
}

export default saga;