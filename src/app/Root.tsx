import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import storeConfiguration from './store';

const store = storeConfiguration();

const Root = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router> 
    </Provider> 
);

export default Root;