import { combineReducers } from 'redux';
import { reducer as formReducer } from './form-reducer';

import { reducer as genreReducer } from './domain/genre';
import { reducer as appReducer } from './app';

export default combineReducers({
    genre: genreReducer,
    app: appReducer,
    form: formReducer
})