import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { GenrePage } from '../../page/genre';

import './Main.css';

class Main extends Component {

    render() {
        return (
            <main>
                <Route path='/genre' component={GenrePage} />
            </main>
        )
    }
}

export default Main;