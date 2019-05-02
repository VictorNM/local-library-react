import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { AuthorPage, GenrePage } from '../../pages';
import LoadingIndicator from '../../common/loading-indicator/LoadingIndicatorContainer';
import ErrorModal from '../../common/error-modal/ErrorModalContainer';

import './Main.css';

class Main extends Component {

    render() {
        return (
            <main>
                <Route path='/author' component={AuthorPage} />
                <Route path='/genre' component={GenrePage} />
                <LoadingIndicator />
                <ErrorModal />
            </main>
        )
    }
}

export default Main;