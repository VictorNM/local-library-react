import ActionTypes from './action-types';
import { Book } from "../../../../dto";

export default {

    /// === GET ALL BOOK ===
    getAllBooksAsync: () => ({
        type: ActionTypes.GET_ALL_BOOKS_ASYNC
    }),
    getAllBooksSucceed: (books: Book[]) => ({
        type: ActionTypes.GET_ALL_BOOKS_SUCCEED,
        books
    }),
    getAllBooksFailed: (error: any) => ({
        type: ActionTypes.GET_ALL_BOOKS_FAILED,
        error
    }),
    /// === GET BOOK DETAIL ===
    getBookDetailAsync: (id: number) => ({
        type: ActionTypes.GET_BOOK_DETAIL_ASYNC,
        id
    }),
    getBookDetailSucceed: (book: Book) => ({
        type: ActionTypes.GET_BOOK_DETAIL_SUCCEED,
        book
    }),
    getBookDetailFailed: (error: any) => ({
        type: ActionTypes.GET_BOOK_DETAIL_FAILED,
        error
    }),
    /// === CREATE BOOK ===
    createBookAsync: (book: Book) => ({
        type: ActionTypes.CREATE_BOOK_ASYNC,
        book
    }),
    createBookSucceed: (book: Book) => ({
        type: ActionTypes.CREATE_BOOK_SUCCEED,
        book
    }),
    createBookFailed: (error: any) => ({
        type: ActionTypes.CREATE_BOOK_FAILED,
        error
    }),
    /// === UPDATE BOOK ===
    updateBookAsync: (book: Book) => ({
        type: ActionTypes.UPDATE_BOOK_ASYNC,
        book
    }),
    updateBookSucceed: (book: Book) => ({
        type: ActionTypes.UPDATE_BOOK_SUCCEED,
        book
    }),
    updateBookFailed: (error: any) => ({
        type: ActionTypes.UPDATE_BOOK_FAILED,
        error
    }),
    /// === DELETE BOOK ===
    deleteBookAsync: (id: number) => ({
        type: ActionTypes.DELETE_BOOK_ASYNC,
        id
    }),
    deleteBookSucceed: (id: number) => ({
        type: ActionTypes.DELETE_BOOK_SUCCEED,
        id
    }),
    deleteBookFailed: (error: any) => ({
        type: ActionTypes.DELETE_BOOK_FAILED,
        error
    }),
    /// === NON-SERVER ACTION===
    clearCurrentBook: () => ({
        type: ActionTypes.CLEAR_CURRENT_BOOK
    }),

}