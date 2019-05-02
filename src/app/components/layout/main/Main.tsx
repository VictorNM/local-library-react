import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { GenrePage } from '../../pages';
import LoadingIndicator from '../../common/loading-indicator/LoadingIndicatorContainer';

import './Main.css';
import ErrorModal from '../../common/error-modal/ErrorModalContainer';

class Main extends Component {

    render() {
        return (
            <main>
                <Route path='/genre' component={GenrePage} />
                <LoadingIndicator />
                <ErrorModal />
            </main>
        )
    }
}

export default Main;