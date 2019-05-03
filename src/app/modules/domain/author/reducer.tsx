import { combineReducers, AnyAction } from "redux";

import actionTypes from './action-types';
import { Author } from "../../../../dto";

interface AuthorsMap {
    [id: number]: Author
}

const byId = (state: AuthorsMap = {}, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.GET_ALL_AUTHORS_SUCCEED:
            const nextState = {...state}
            action.authors.forEach((author: Author) => {
                nextState[author.id] = author
            });
            return nextState;
        case actionTypes.CREATE_AUTHOR_SUCCEED:
        case actionTypes.UPDATE_AUTHOR_SUCCEED:
            return {
                ...state,
                [action.author.id]: action.author
            }
        case actionTypes.DELETE_AUTHOR_SUCCEED:
            const { [action.id]: value, ...rest} = state
            return rest
        
        default:
            return state
    }
}

const allIds = (state: number[] = [], action: AnyAction) => {
    switch (action.type) {
        case actionTypes.GET_ALL_AUTHORS_SUCCEED:
            return action.authors.map((author: Author) => author.id)
        case actionTypes.CREATE_AUTHOR_SUCCEED:
            return [...state, action.author.id]
        case actionTypes.DELETE_AUTHOR_SUCCEED:
            return state.filter(id => id !== action.id)
        default:
            return state
    }
}

const current = (state: Author | null = null, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.GET_AUTHOR_DETAIL_SUCCEED:
        case actionTypes.CREATE_AUTHOR_SUCCEED:
        case actionTypes.UPDATE_AUTHOR_SUCCEED:
            return action.author
        case actionTypes.DELETE_AUTHOR_SUCCEED:
            return null
        case actionTypes.CLEAR_CURRENT_AUTHOR:
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