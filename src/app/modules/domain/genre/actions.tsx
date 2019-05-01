import ActionTypes from './action-types';
import { Genre } from "../../../../dto";

export default {

    /// === GET ALL GENRE ===
    getAllGenresAsync: () => ({
        type: ActionTypes.GET_ALL_GENRES_ASYNC
    }),
    getAllGenresSucceed: (genres: Genre[]) => ({
        type: ActionTypes.GET_ALL_GENRES_SUCCEED,
        genres
    }),
    getAllGenresFailed: (error: any) => ({
        type: ActionTypes.GET_ALL_GENRE_FAILED,
        error
    }),
    /// === GET GENRE DETAIL ===
    getGenreDetailAsync: (id: number) => ({
        type: ActionTypes.GET_GENRE_DETAIL_ASYNC,
        id
    }),
    getGenreDetailSucceed: (genre: Genre) => ({
        type: ActionTypes.GET_GENRE_DETAIL_SUCCEED,
        genre
    }),
    getGenreDetailFailed: (error: any) => ({
        type: ActionTypes.GET_GENRE_DETAIL_FAILED,
        error
    }),
    /// === CREATE GENRE ===
    createGenreAsync: (genre: Genre) => ({
        type: ActionTypes.CREATE_GENRE_ASYNC,
        genre
    }),
    createGenreSucceed: (genre: Genre) => ({
        type: ActionTypes.CREATE_GENRE_SUCCEED,
        genre
    }),
    createGenreFailed: (error: any) => ({
        type: ActionTypes.CREATE_GENRE_FAILED,
        error
    }),
    /// === UPDATE GENRE ===
    updateGenreAsync: (genre: Genre) => ({
        type: ActionTypes.UPDATE_GENRE_ASYNC,
        genre
    }),
    updateGenreSucceed: (genre: Genre) => ({
        type: ActionTypes.UPDATE_GENRE_SUCCEED,
        genre
    }),
    updateGenreFailed: (error: any) => ({
        type: ActionTypes.UPDATE_GENRE_FAILED,
        error
    }),
    /// === DELETE GENRE ===
    deleteGenreAsync: (id: number) => ({
        type: ActionTypes.DELETE_GENRE_ASYNC,
        id
    }),
    deleteGenreSucceed: (id: number) => ({
        type: ActionTypes.DELETE_GENRE_SUCCEED,
        id
    }),
    deleteGenreFailed: (error: any) => ({
        type: ActionTypes.DELETE_GENRE_FAILED,
        error
    }),
    /// === NON-SERVER ACTION===
    clearCurrentGenre: () => ({
        type: ActionTypes.CLEAR_CURRENT_GENRE
    }),

}