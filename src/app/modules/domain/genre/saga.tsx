import { takeLatest, call, put, all } from "redux-saga/effects";

import ActionTypes from './action-types';
import actions from './actions';
import { genreApi } from '../../../../api';
import { Genre } from '../../../../dto';
import { AnyAction } from "redux";

export function* saga() {
    yield all([
        takeLatest(ActionTypes.GET_ALL_GENRES_ASYNC, getAllGenresSaga),
        takeLatest(ActionTypes.GET_GENRE_DETAIL_ASYNC, getGenreDetailSaga),
        takeLatest(ActionTypes.CREATE_GENRE_ASYNC, createGenreSaga),
        takeLatest(ActionTypes.UPDATE_GENRE_ASYNC, updateGenreSaga),
        takeLatest(ActionTypes.DELETE_GENRE_ASYNC, deleteGenreSaga)
    ]);
}

function* getAllGenresSaga() {
    try {
        const response = yield call(genreApi.getGenreList);
        const genres: Genre[] = response.data.data.genres;

        yield put(actions.getAllGenresSucceed(genres));

    } catch (error) {
        yield put(actions.getAllGenresFailed(error));
    }
}

function* getGenreDetailSaga(action: AnyAction) {
    try {
        const response = yield call(genreApi.getGenreDetail, action.id)
        const genre: Genre = response.data.data.genre

        yield put(actions.getGenreDetailSucceed(genre))
    } catch (error) {
        yield put(actions.getAllGenresFailed(error))
    }
}

function* createGenreSaga(action: AnyAction) {
    try {
        const response = yield call(genreApi.createGenre, action.genre)
        const genre: Genre = response.data.data.newGenre

        yield put(actions.createGenreSucceed(genre))
    } catch (error) {
        yield put(actions.createGenreFailed(error))
    }
}

function* updateGenreSaga(action: AnyAction) {
    try {
        const response = yield call(genreApi.updateGenre, action.genre.id, action.genre);
        const genre: Genre = response.data.data.updateGenre

        yield put(actions.updateGenreSucceed(genre))
    } catch (error) {
        yield put(actions.updateGenreFailed(error))
    }
}

function * deleteGenreSaga(action: AnyAction) {
    try {
        const response = yield call(genreApi.deleteGenre, action.id);
        const id: number = response.data.data.deleteGenre;

        yield put(actions.deleteGenreSucceed(id));
    } catch (error) {
        yield put(actions.deleteGenreFailed(error));
    }
}

export default saga;