import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { GenrePage } from '../../pages';
import LoadingIndicator from '../../common/loading-indicator/LoadingIndicatorContainer';

import './Main.css';

class Main extends Component {

    render() {
        return (
            <main>
                <Route path='/genre' component={GenrePage} />
                <LoadingIndicator />
            </main>
        )
    }
}

export default Main;