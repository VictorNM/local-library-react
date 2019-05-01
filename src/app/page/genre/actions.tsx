import ActionTypes from './action-types';
import { Genre } from "../../../dto";

/// === GET ALL GENRE ===
export const getAllGenresAsync = () => ({
    type: ActionTypes.GET_ALL_GENRES_ASYNC
})

export const getAllGenresSucceed = (genres: Genre[]) => ({
    type: ActionTypes.GET_ALL_GENRES_SUCCEED,
    genres
})

export const getAllGenresFailed = (error: any) => ({
    type: ActionTypes.GET_ALL_GENRE_FAILED,
    error
})

/// === GET GENRE DETAIL ===
export const getGenreDetailAsync = (id: number) => ({
    type: ActionTypes.GET_GENRE_DETAIL_ASYNC,
    id
})

export const getGenreDetailSucceed = (genre: Genre) => ({
    type: ActionTypes.GET_GENRE_DETAIL_SUCCEED,
    genre
})

export const getGenreDetailFailed = (error: any) => ({
    type: ActionTypes.GET_GENRE_DETAIL_FAILED,
    error
})

/// === CREATE GENRE ===
export const createGenreAsync = (genre: Genre) => ({
    type: ActionTypes.CREATE_GENRE_ASYNC,
    genre
})

export const createGenreSucceed = (genre: Genre) => ({
    type: ActionTypes.CREATE_GENRE_SUCCEED,
    genre
})

export const createGenreFailed = (error: any) => ({
    type: ActionTypes.CREATE_GENRE_FAILED,
    error
})

/// === UPDATE GENRE ===
export const updateGenreAsync = (genre: Genre) => ({
    type: ActionTypes.UPDATE_GENRE_ASYNC,
    genre
})

export const updateGenreSucceed = (genre: Genre) => ({
    type: ActionTypes.UPDATE_GENRE_SUCCEED,
    genre
})

export const updateGenreFailed = (error: any) => ({
    type: ActionTypes.UPDATE_GENRE_FAILED,
    error
})

/// === DELETE GENRE ===
export const deleteGenreAsync = (id: number) => ({
    type: ActionTypes.DELETE_GENRE_ASYNC,
    id
})

export const deleteGenreSucceed = (id: number) => ({
    type: ActionTypes.DELETE_GENRE_SUCCEED,
    id
})

export const deleteGenreFailed = (error: any) => ({
    type: ActionTypes.DELETE_GENRE_FAILED,
    error
})

/// === NON-SERVER ACTION===
export const clearCurrentGenre = () => ({
    type: ActionTypes.CLEAR_CURRENT_GENRE
})