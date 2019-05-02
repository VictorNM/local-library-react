import { combineReducers, AnyAction } from "redux";

import actionTypes from './action-types';
import { Genre } from "../../../../dto";

interface GenresMap {
    [id: number]: Genre
}

const byId = (state: GenresMap = {}, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.GET_ALL_GENRES_SUCCEED:
            const nextState = {...state}
            action.genres.forEach((genre: Genre) => {
                nextState[genre.id] = genre
            });
            return nextState;
        case actionTypes.CREATE_GENRE_SUCCEED:
        case actionTypes.UPDATE_GENRE_SUCCEED:
            return {
                ...state,
                [action.genre.id]: action.genre
            }
        case actionTypes.DELETE_GENRE_SUCCEED:
            const { [action.id]: value, ...rest} = state
            return rest
        
        default:
            return state
    }
}

const allIds = (state: number[] = [], action: AnyAction) => {
    switch (action.type) {
        case actionTypes.GET_ALL_GENRES_SUCCEED:
            return action.genres.map((genre: Genre) => genre.id)
        case actionTypes.CREATE_GENRE_SUCCEED:
            return [...state, action.genre.id]
        case actionTypes.DELETE_GENRE_SUCCEED:
            return state.filter(id => id !== action.id)
        default:
            return state
    }
}

const current = (state: Genre | null = null, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.GET_GENRE_DETAIL_SUCCEED:
        case actionTypes.CREATE_GENRE_SUCCEED:
        case actionTypes.UPDATE_GENRE_SUCCEED:
            return action.genre
        case actionTypes.DELETE_GENRE_SUCCEED:
            return null
        case actionTypes.CLEAR_CURRENT_GENRE:
            return null
        default:
            return state
    }
}

export default combineReducers({
    current,
    byId,
    allIds
});