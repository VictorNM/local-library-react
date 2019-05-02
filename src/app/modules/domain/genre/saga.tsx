import { takeLatest, call, put, all } from "redux-saga/effects";
import { AnyAction } from "redux";

import actionTypes from './action-types';
import actions from './actions';
import { genreApi } from '../../../../api';
import { Genre } from '../../../../dto';

export function* saga() {
    yield all([
        takeLatest(actionTypes.GET_ALL_GENRES_ASYNC, getAllGenresSaga),
        takeLatest(actionTypes.GET_GENRE_DETAIL_ASYNC, getGenreDetailSaga),
        takeLatest(actionTypes.CREATE_GENRE_ASYNC, createGenreSaga),
        takeLatest(actionTypes.UPDATE_GENRE_ASYNC, updateGenreSaga),
        takeLatest(actionTypes.DELETE_GENRE_ASYNC, deleteGenreSaga)
    ]);
}

function* getAllGenresSaga() {
    try {
        const response = yield call(genreApi.getGenreList);
        checkServerError(response)

        const genres: Genre[] = response.data.data.genres;
        yield put(actions.getAllGenresSucceed(genres));

    } catch (error) {
        yield put(actions.getAllGenresFailed(error));
    }
}

function* getGenreDetailSaga(action: AnyAction) {
    try {
        const response = yield call(genreApi.getGenreDetail, action.id)
        checkServerError(response)
        
        const genre: Genre = response.data.data.genre
        yield put(actions.getGenreDetailSucceed(genre))
    } catch (error) {
        yield put(actions.getAllGenresFailed(error))
    }
}

function* createGenreSaga(action: AnyAction) {
    try {
        const response = yield call(genreApi.createGenre, action.genre)
        checkServerError(response)

        const genre: Genre = response.data.data.newGenre
        yield put(actions.createGenreSucceed(genre))
    } catch (error) {
        yield put(actions.createGenreFailed(error))
    }
}

function* updateGenreSaga(action: AnyAction) {
    try {
        const response = yield call(genreApi.updateGenre, action.genre.id, action.genre);
        checkServerError(response)

        const genre: Genre = response.data.data.updateGenre
        yield put(actions.updateGenreSucceed(genre))
    } catch (error) {
        yield put(actions.updateGenreFailed(error))
    }
}

function* deleteGenreSaga(action: AnyAction) {
    try {
        const response = yield call(genreApi.deleteGenre, action.id);
        checkServerError(response)

        const id: number = response.data.data.deleteGenre;
        yield put(actions.deleteGenreSucceed(id));
    } catch (error) {
        yield put(actions.deleteGenreFailed(error));
    }
}

function checkServerError(response: any) {
    const errors = response.data.errors;
    if (errors) {
        throw errors
    }
}

export default saga;