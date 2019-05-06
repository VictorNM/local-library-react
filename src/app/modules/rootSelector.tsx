import rootState from './rootState';

import { selector as bookSelector } from './domain/book';
import { selector as authorSelector } from './domain/author';
import { selector as genreSelector } from './domain/genre';
import { selector as appSelector } from './app';

export default {
    /// === BOOK SELECTOR ===
    getAllBooks: (state: rootState) =>
        bookSelector.getAllBooks(state.book),
    getCurrentBook: (state: rootState) =>
        bookSelector.getCurrentBook(state.book),

    /// === AUTHOR SELECTOR ===
    getAllAuthors: (state: rootState) =>
        authorSelector.getAllAuthors(state.author),
    getCurrentAuthor: (state: rootState) =>
        authorSelector.getCurrentAuthor(state.author),
    getAllAuthorsWithIdAndName: (state: rootState) =>
        authorSelector.getAllAuthorsWithIdAndName(state.author),

    /// === GENRE SELECTORS ===
    getAllGenres: (state: rootState) =>
        genreSelector.getAllGenres(state.genre),

    getCurrentGenre: (state: rootState) =>
        genreSelector.getCurrentGenre(state.genre),

    /// === APP SELECTORS ===
    getIsLoading: (state: rootState) =>
        appSelector.getIsLoading(state.app),

    getError: (state: rootState) =>
        appSelector.getError(state.app),

    getIsGetBookDetailSucceed: (state: rootState) =>
        appSelector.getIsGetBookDetailSucceed(state.app),

    getIsCreateBookSucceed: (state: rootState) =>
        appSelector.getIsCreateBookSucceed(state.app),

    getIsUpdateBookSucceed: (state: rootState) =>
        appSelector.getIsUpdateBookSucceed(state.app),

    getIsDeleteBookSucceed: (state: rootState) =>
        appSelector.getIsDeleteBookSucceed(state.app),

    getIsGetAuthorDetailSucceed: (state: rootState) =>
        appSelector.getIsGetAuthorDetailSucceed(state.app),

    getIsCreateAuthorSucceed: (state: rootState) =>
        appSelector.getIsCreateAuthorSucceed(state.app),

    getIsUpdateAuthorSucceed: (state: rootState) =>
        appSelector.getIsUpdateAuthorSucceed(state.app),

    getIsDeleteAuthorSucceed: (state: rootState) =>
        appSelector.getIsDeleteAuthorSucceed(state.app),

    getIsGetGenreDetailSucceed: (state: rootState) =>
        appSelector.getIsGetGenreDetailSucceed(state.app),

    getIsCreateGenreSucceed: (state: rootState) =>
        appSelector.getIsCreateGenreSucceed(state.app),

    getIsUpdateGenreSucceed: (state: rootState) =>
        appSelector.getIsUpdateGenreSucceed(state.app),

    getIsDeleteGenreSucceed: (state: rootState) =>
        appSelector.getIsDeleteGenreSucceed(state.app),
}