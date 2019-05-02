import rootState from './rootState';

import { selector as genreSelector } from './domain/genre';
import { selector as appSelector } from './app';

export default {
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

    getIsGetGenreDetailSucceed: (state: rootState) =>
        appSelector.getIsGetGenreDetailSucceed(state.app),

    getIsCreateGenreSucceed: (state: rootState) =>
        appSelector.getIsCreateGenreSucceed(state.app),

    getIsUpdateGenreSucceed: (state: rootState) =>
        appSelector.getIsUpdateGenreSucceed(state.app),

    getIsDeleteGenreSucceed: (state: rootState) =>
        appSelector.getIsDeleteGenreSucceed(state.app),
}