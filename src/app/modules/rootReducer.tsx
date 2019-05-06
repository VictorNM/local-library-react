import { combineReducers } from 'redux';
import { reducer as formReducer } from './redux-form-custom';

import { reducer as bookReducer } from './domain/book';
import { reducer as authorReducer } from './domain/author';
import { reducer as genreReducer } from './domain/genre';
import { reducer as appReducer } from './app';

export default combineReducers({
    book: bookReducer,
    author: authorReducer,
    genre: genreReducer,
    app: appReducer,
    form: formReducer
})