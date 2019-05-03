import { takeLatest, call, put, all } from "redux-saga/effects";
import { AnyAction } from "redux";

import actionTypes from './action-types';
import actions from './actions';
import { authorApi } from '../../../../api';
import { Author } from '../../../../dto';

export function* saga() {
    yield all([
        takeLatest(actionTypes.GET_ALL_AUTHORS_ASYNC, getAllAuthorsSaga),
        takeLatest(actionTypes.GET_AUTHOR_DETAIL_ASYNC, getAuthorDetailSaga),
        takeLatest(actionTypes.CREATE_AUTHOR_ASYNC, createAuthorSaga),
        takeLatest(actionTypes.UPDATE_AUTHOR_ASYNC, updateAuthorSaga),
        takeLatest(actionTypes.DELETE_AUTHOR_ASYNC, deleteAuthorSaga)
    ]);
}

function* getAllAuthorsSaga() {
    try {
        const response = yield call(authorApi.getAuthorList);
        checkServerError(response)

        const authors: any = response.data.data.authors;
        yield put(actions.getAllAuthorsSucceed(authors));

    } catch (error) {
        yield put(actions.getAllAuthorsFailed(error));
    }
}

function* getAuthorDetailSaga(action: AnyAction) {
    try {
        const response = yield call(authorApi.getAuthorDetail, action.id)
        checkServerError(response)
        
        const author: Author = response.data.data.author
        yield put(actions.getAuthorDetailSucceed(author))
    } catch (error) {
        yield put(actions.getAllAuthorsFailed(error))
    }
}

function* createAuthorSaga(action: AnyAction) {
    try {
        const response = yield call(authorApi.createAuthor, action.author)
        checkServerError(response)
        
        const author: Author = response.data.data.newAuthor
        yield put(actions.createAuthorSucceed(author))
    } catch (error) {
        yield put(actions.createAuthorFailed(error))
    }
}

function* updateAuthorSaga(action: AnyAction) {
    try {
        const response = yield call(authorApi.updateAuthor, action.author.id, action.author);
        checkServerError(response)

        const author: Author = response.data.data.updateAuthor
        yield put(actions.updateAuthorSucceed(author))
    } catch (error) {
        yield put(actions.updateAuthorFailed(error))
    }
}

function* deleteAuthorSaga(action: AnyAction) {
    try {
        const response = yield call(authorApi.deleteAuthor, action.id);
        checkServerError(response)

        const id: number = response.data.data.deleteAuthor;
        yield put(actions.deleteAuthorSucceed(id));
    } catch (error) {
        yield put(actions.deleteAuthorFailed(error));
    }
}

function checkServerError(response: any) {
    const errors = response.data.errors;
    if (errors) {
        throw errors
    }
}

export default saga;