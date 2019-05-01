import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as genreReducer } from './page/genre';

export default combineReducers({
    genre: genreReducer,
    form: formReducer
})