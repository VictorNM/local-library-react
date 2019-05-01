import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const storeConfiguration = () => {
    const store = createStore(
        rootReducer, 
        compose(applyMiddleware(sagaMiddleware), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
    );

    sagaMiddleware.run(rootSaga);
    
    return store;
}



export default storeConfiguration;