import { combineReducers, AnyAction } from "redux";

import bookActionTypes from '../domain/book/action-types';
import authorActionTypes from '../domain/author/action-types';
import genreActionTypes from '../domain/genre/action-types';
import bookReducer from './book/reducer';
import authorReducer from './author/reducer';
import genreReducer from './genre/reducer';

const initialState = {
    isLoading: false,
    error: null,
}

const globalReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case bookActionTypes.GET_ALL_BOOKS_ASYNC:
        case bookActionTypes.GET_BOOK_DETAIL_ASYNC:
        case bookActionTypes.CREATE_BOOK_ASYNC:
        case bookActionTypes.UPDATE_BOOK_ASYNC:
        case bookActionTypes.DELETE_BOOK_ASYNC:
        case authorActionTypes.GET_ALL_AUTHORS_ASYNC:
        case authorActionTypes.GET_AUTHOR_DETAIL_ASYNC:
        case authorActionTypes.CREATE_AUTHOR_ASYNC:
        case authorActionTypes.UPDATE_AUTHOR_ASYNC:
        case authorActionTypes.DELETE_AUTHOR_ASYNC:
        case genreActionTypes.GET_ALL_GENRES_ASYNC:
        case genreActionTypes.GET_GENRE_DETAIL_ASYNC:
        case genreActionTypes.CREATE_GENRE_ASYNC:
        case genreActionTypes.UPDATE_GENRE_ASYNC:
        case genreActionTypes.DELETE_GENRE_ASYNC:
            return {isLoading: true, error: null}

        case bookActionTypes.GET_ALL_BOOKS_SUCCEED:
        case bookActionTypes.GET_BOOK_DETAIL_SUCCEED:
        case bookActionTypes.CREATE_BOOK_SUCCEED:
        case bookActionTypes.UPDATE_BOOK_SUCCEED:
        case bookActionTypes.DELETE_BOOK_SUCCEED:
        case authorActionTypes.GET_ALL_AUTHORS_SUCCEED:
        case authorActionTypes.GET_AUTHOR_DETAIL_SUCCEED:
        case authorActionTypes.CREATE_AUTHOR_SUCCEED:
        case authorActionTypes.UPDATE_AUTHOR_SUCCEED:
        case authorActionTypes.DELETE_AUTHOR_SUCCEED:
        case genreActionTypes.GET_ALL_GENRES_SUCCEED:
        case genreActionTypes.GET_GENRE_DETAIL_SUCCEED:
        case genreActionTypes.CREATE_GENRE_SUCCEED:
        case genreActionTypes.UPDATE_GENRE_SUCCEED:
        case genreActionTypes.DELETE_GENRE_SUCCEED:
            return {isLoading: false, error: null}

        case bookActionTypes.GET_ALL_BOOKS_FAILED:
        case bookActionTypes.GET_BOOK_DETAIL_FAILED:
        case bookActionTypes.CREATE_BOOK_FAILED:
        case bookActionTypes.UPDATE_BOOK_FAILED:
        case bookActionTypes.DELETE_BOOK_FAILED:
        case authorActionTypes.GET_ALL_AUTHORS_FAILED:
        case authorActionTypes.GET_AUTHOR_DETAIL_FAILED:
        case authorActionTypes.CREATE_AUTHOR_FAILED:
        case authorActionTypes.UPDATE_AUTHOR_FAILED:
        case authorActionTypes.DELETE_AUTHOR_FAILED:
        case genreActionTypes.GET_ALL_GENRES_FAILED:
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
    book: bookReducer,
    author: authorReducer,
    genre: genreReducer,
    global: globalReducer
})