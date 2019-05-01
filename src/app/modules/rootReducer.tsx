import { combineReducers } from 'redux';
import { reducer as formReducer } from './form-reducer';

import { reducer as genreReducer } from './domain/genre';
import { reducer as appReducer } from './app';
import { reducer as uiReducer} from './ui';

export default combineReducers({
    genre: genreReducer,
    app: appReducer,
    ui: uiReducer,
    form: formReducer
})