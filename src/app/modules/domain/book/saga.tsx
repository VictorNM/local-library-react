import { takeLatest, call, put, all } from "redux-saga/effects";
import { AnyAction } from "redux";

import actionTypes from './action-types';
import actions from './actions';
import { actions as authorActions } from '../author';
import { actions as genreAction } from '../genre';
import { bookApi } from '../../../../api';
import { Book } from '../../../../dto';

export function* saga() {
    yield all([
        takeLatest(actionTypes.GET_ALL_BOOKS_ASYNC, getAllBooksSaga),
        takeLatest(actionTypes.GET_BOOK_DETAIL_ASYNC, getBookDetailSaga),
        takeLatest(actionTypes.CREATE_BOOK_ASYNC, createBookSaga),
        takeLatest(actionTypes.UPDATE_BOOK_ASYNC, updateBookSaga),
        takeLatest(actionTypes.DELETE_BOOK_ASYNC, deleteBookSaga)
    ]);
}

function* getAllBooksSaga() {
    try {
        const response = yield call(bookApi.getBookList);
        checkServerError(response)

        const books: Book[] = response.data.data.books;
        const authors = response.data.data.authors
        const genres = response.data.data.genres
        
        yield put(actions.getAllBooksSucceed(books));
        yield put(authorActions.getAllAuthorsSucceed(authors))
        yield put(genreAction.getAllGenresSucceed(genres))

    } catch (error) {
        yield put(actions.getAllBooksFailed(error));
    }
}

function* getBookDetailSaga(action: AnyAction) {
    try {
        const response = yield call(bookApi.getBookDetail, action.id)
        checkServerError(response)
        
        const book: Book = response.data.data.book
        yield put(actions.getBookDetailSucceed(book))
    } catch (error) {
        yield put(actions.getAllBooksFailed(error))
    }
}

function* createBookSaga(action: AnyAction) {
    try {
        const response = yield call(bookApi.createBook, action.book)
        checkServerError(response)

        const book: Book = response.data.data.newBook
        yield put(actions.createBookSucceed(book))
    } catch (error) {
        yield put(actions.createBookFailed(error))
    }
}

function* updateBookSaga(action: AnyAction) {
    try {
        const response = yield call(bookApi.updateBook, action.book.id, action.book);
        checkServerError(response)

        const book: Book = response.data.data.updateBook
        yield put(actions.updateBookSucceed(book))
    } catch (error) {
        yield put(actions.updateBookFailed(error))
    }
}

function* deleteBookSaga(action: AnyAction) {
    try {
        const response = yield call(bookApi.deleteBook, action.id);
        checkServerError(response)

        const id: number = response.data.data.deleteBook;
        yield put(actions.deleteBookSucceed(id));
    } catch (error) {
        yield put(actions.deleteBookFailed(error));
    }
}
/*
*/

function checkServerError(response: any) {
    const errors = response.data.errors;
    if (errors) {
        throw errors
    }
}

export default saga;