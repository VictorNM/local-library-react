import { AnyAction } from "redux";
import genreActionTypes from '../../domain/genre/action-types';

const initialState = {
    isGetDetailSucceed: false,
    isCreateSucceed: false,
    isUpdateSucceed: false,
    isDeleteSucceed: false,
}

const reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case genreActionTypes.GET_GENRE_DETAIL_SUCCEED:
            return {...state, isGetDetailSucceed: true}
        case genreActionTypes.GET_GENRE_DETAIL_ASYNC:
        case genreActionTypes.GET_GENRE_DETAIL_FAILED:
            return {...state, isGetDetailSucceed: false}

        case genreActionTypes.CREATE_GENRE_SUCCEED:
            return {...state, isCreateSucceed: true}
        case genreActionTypes.CREATE_GENRE_ASYNC:
        case genreActionTypes.CREATE_GENRE_FAILED:
            return {...state, isCreateSucceed: false}


        case genreActionTypes.UPDATE_GENRE_SUCCEED:
            return {...state, isUpdateSucceed: true}


        case genreActionTypes.DELETE_GENRE_SUCCEED:
            return {...state, isDeleteSucceed: true}
        case genreActionTypes.DELETE_GENRE_ASYNC:
        case genreActionTypes.DELETE_GENRE_FAILED:
            return {...state, isDeleteSucceed: false}

        default:
            return state
    }
}

export default reducer;

