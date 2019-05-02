import { reducer as originReducer } from 'redux-form';
import { AnyAction } from 'redux';

import actionTypes from './domain/genre/action-types';

export const reducer = originReducer.plugin({
    genreCreateForm: (state: any, action: AnyAction) => {
        switch (action.type) {
            case actionTypes.CREATE_GENRE_SUCCEED:
                return undefined
            default:
                return state;
        }
    }
})