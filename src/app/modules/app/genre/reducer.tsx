import { AnyAction } from "redux";
import { actionTypes } from '../../domain/genre';

const initialState = {
    isGetDetailSucceed: false,
    isCreateSucceed: false,
    isUpdateSucceed: false,
    isDeleteSucceed: false,
}

const reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.GET_GENRE_DETAIL_SUCCEED:
            return {...state, isGetDetailSucceed: true}
        case actionTypes.GET_GENRE_DETAIL_ASYNC:
        case actionTypes.GET_GENRE_DETAIL_FAILED:
            return {...state, isGetDetailSucceed: false}

        case actionTypes.CREATE_GENRE_SUCCEED:
            return {...state, isCreateSucceed: true}
        case actionTypes.CREATE_GENRE_ASYNC:
        case actionTypes.CREATE_GENRE_FAILED:
            return {...state, isCreateSucceed: false}


        case actionTypes.UPDATE_GENRE_SUCCEED:
            return {...state, isUpdateSucceed: true}
        case actionTypes.UPDATE_GENRE_ASYNC:
        case actionTypes.UPDATE_GENRE_FAILED:
            return {...state, isUpdateSucceed: false}


        case actionTypes.DELETE_GENRE_SUCCEED:
            return {...state, isDeleteSucceed: true}
        case actionTypes.DELETE_GENRE_ASYNC:
        case actionTypes.DELETE_GENRE_FAILED:
            return {...state, isDeleteSucceed: false}

        default:
            return state
    }
}

export default reducer;

