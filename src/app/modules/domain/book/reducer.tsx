import { combineReducers, AnyAction } from "redux";

import actionTypes from './action-types';
import { Book } from "../../../../dto";

interface BooksMap {
    [id: number]: Book
}

const byId = (state: BooksMap = {}, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.GET_ALL_BOOKS_SUCCEED:
            const nextState = {...state}
            action.books.forEach((book: Book) => {
                nextState[book.id] = book
            });
            return nextState;
        case actionTypes.CREATE_BOOK_SUCCEED:
        case actionTypes.UPDATE_BOOK_SUCCEED:
            return {
                ...state,
                [action.book.id]: action.book
            }
        case actionTypes.DELETE_BOOK_SUCCEED:
            const { [action.id]: value, ...rest} = state
            return rest
        
        default:
            return state
    }
}

const allIds = (state: number[] = [], action: AnyAction) => {
    switch (action.type) {
        case actionTypes.GET_ALL_BOOKS_SUCCEED:
            return action.books.map((book: Book) => book.id)
        case actionTypes.CREATE_BOOK_SUCCEED:
            return [...state, action.book.id]
        case actionTypes.DELETE_BOOK_SUCCEED:
            return state.filter(id => id !== action.id)
        default:
            return state
    }
}

const current = (state: Book | null = null, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.GET_BOOK_DETAIL_SUCCEED:
        case actionTypes.CREATE_BOOK_SUCCEED:
        case actionTypes.UPDATE_BOOK_SUCCEED:
            return action.book
        case actionTypes.DELETE_BOOK_SUCCEED:
            return null
        case actionTypes.CLEAR_CURRENT_BOOK:
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