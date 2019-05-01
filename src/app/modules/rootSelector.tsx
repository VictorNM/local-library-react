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
        appSelector.getError(state.app)
}