import { reducer as originReducer } from 'redux-form';
import { AnyAction } from 'redux';

import { actionTypes as bookActionTypes } from './domain/book';
import { actionTypes as authorActionTypes } from './domain/author';
import { actionTypes as genreActionTypes } from './domain/genre';

export const reducer = originReducer.plugin({
    bookCreateForm: (state: any, action: AnyAction) => {
        switch (action.type) {
            case bookActionTypes.CREATE_BOOK_SUCCEED:
                return undefined
            default:
                return state;
        }
    },
    authorCreateForm: (state: any, action: AnyAction) => {
        switch (action.type) {
            case authorActionTypes.CREATE_AUTHOR_SUCCEED:
                return undefined
            default:
                return state;
        }
    },
    genreCreateForm: (state: any, action: AnyAction) => {
        switch (action.type) {
            case genreActionTypes.CREATE_GENRE_SUCCEED:
                return undefined
            default:
                return state;
        }
    }
})