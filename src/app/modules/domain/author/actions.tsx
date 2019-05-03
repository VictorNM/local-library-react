import ActionTypes from './action-types';
import { Author } from "../../../../dto";

export default {

    /// === GET ALL AUTHOR ===
    getAllAuthorsAsync: () => ({
        type: ActionTypes.GET_ALL_AUTHORS_ASYNC
    }),
    getAllAuthorsSucceed: (authors: Author[]) => ({
        type: ActionTypes.GET_ALL_AUTHORS_SUCCEED,
        authors
    }),
    getAllAuthorsFailed: (error: any) => ({
        type: ActionTypes.GET_ALL_AUTHORS_FAILED,
        error
    }),
    /// === GET AUTHOR DETAIL ===
    getAuthorDetailAsync: (id: number) => ({
        type: ActionTypes.GET_AUTHOR_DETAIL_ASYNC,
        id
    }),
    getAuthorDetailSucceed: (author: Author) => ({
        type: ActionTypes.GET_AUTHOR_DETAIL_SUCCEED,
        author
    }),
    getAuthorDetailFailed: (error: any) => ({
        type: ActionTypes.GET_AUTHOR_DETAIL_FAILED,
        error
    }),
    /// === CREATE AUTHOR ===
    createAuthorAsync: (author: Author) => ({
        type: ActionTypes.CREATE_AUTHOR_ASYNC,
        author
    }),
    createAuthorSucceed: (author: Author) => ({
        type: ActionTypes.CREATE_AUTHOR_SUCCEED,
        author
    }),
    createAuthorFailed: (error: any) => ({
        type: ActionTypes.CREATE_AUTHOR_FAILED,
        error
    }),
    /// === UPDATE AUTHOR ===
    updateAuthorAsync: (author: Author) => ({
        type: ActionTypes.UPDATE_AUTHOR_ASYNC,
        author
    }),
    updateAuthorSucceed: (author: Author) => ({
        type: ActionTypes.UPDATE_AUTHOR_SUCCEED,
        author
    }),
    updateAuthorFailed: (error: any) => ({
        type: ActionTypes.UPDATE_AUTHOR_FAILED,
        error
    }),
    /// === DELETE AUTHOR ===
    deleteAuthorAsync: (id: number) => ({
        type: ActionTypes.DELETE_AUTHOR_ASYNC,
        id
    }),
    deleteAuthorSucceed: (id: number) => ({
        type: ActionTypes.DELETE_AUTHOR_SUCCEED,
        id
    }),
    deleteAuthorFailed: (error: any) => ({
        type: ActionTypes.DELETE_AUTHOR_FAILED,
        error
    }),
    /// === NON-SERVER ACTION===
    clearCurrentAuthor: () => ({
        type: ActionTypes.CLEAR_CURRENT_AUTHOR
    }),

}