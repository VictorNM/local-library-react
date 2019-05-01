import { AnyAction } from 'redux';
import genreActionTypes from '../../domain/genre/action-types';

const reducer = (state = false, action: AnyAction) => {
    switch (action.type) {
        case genreActionTypes.GET_GENRE_DETAIL_ASYNC:
        case genreActionTypes.CREATE_GENRE_ASYNC:
        case genreActionTypes.UPDATE_GENRE_ASYNC:
        case genreActionTypes.DELETE_GENRE_ASYNC:
            return true

        case genreActionTypes.GET_GENRE_DETAIL_SUCCEED:
        case genreActionTypes.GET_GENRE_DETAIL_FAILED:
        case genreActionTypes.CREATE_GENRE_SUCCEED:
        case genreActionTypes.CREATE_GENRE_FAILED:
            return false

        default:
            return state
    }
}

export default reducer;