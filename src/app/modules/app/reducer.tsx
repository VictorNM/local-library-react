import { combineReducers, AnyAction } from "redux";

import genreActionTypes from '../domain/genre/action-types';
import genreReducer from './genre/reducer';

const initialState = {
    isLoading: false,
    error: null
}

const globalReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case genreActionTypes.GET_ALL_GENRES_ASYNC:
        case genreActionTypes.GET_GENRE_DETAIL_ASYNC:
        case genreActionTypes.CREATE_GENRE_ASYNC:
        case genreActionTypes.UPDATE_GENRE_ASYNC:
        case genreActionTypes.DELETE_GENRE_ASYNC:
            return {isLoading: true, error: null}

        case genreActionTypes.GET_ALL_GENRES_SUCCEED:
        case genreActionTypes.GET_GENRE_DETAIL_SUCCEED:
        case genreActionTypes.CREATE_GENRE_SUCCEED:
        case genreActionTypes.UPDATE_GENRE_SUCCEED:
        case genreActionTypes.DELETE_GENRE_SUCCEED:
            return {isLoading: false, error: null}

        case genreActionTypes.GET_ALL_GENRE_FAILED:
        case genreActionTypes.GET_GENRE_DETAIL_FAILED:
        case genreActionTypes.CREATE_GENRE_FAILED:
        case genreActionTypes.UPDATE_GENRE_FAILED:
        case genreActionTypes.DELETE_GENRE_FAILED:
            return {isLoading: false, error: action.error}

        case 'CLEAR_ERROR':
            return {...state, error: null}

        default:
            return state
    }
}

export default combineReducers({
    genre: genreReducer,
    global: globalReducer
})