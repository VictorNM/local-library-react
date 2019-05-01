import { combineReducers } from 'redux';

import loadingIndicatorReducer from './loading-indicator/reducer';

export default combineReducers({
    showLoadingIndicator: loadingIndicatorReducer
})