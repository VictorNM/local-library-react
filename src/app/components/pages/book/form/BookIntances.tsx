import React, { Component } from 'react';
import { Field } from 'redux-form';

import { Book } from '../../../../../dto';
import AuthorSelect from './AuthorSelect';
import GenresSelect from './GenresSelect';

interface Props {
    currentBook: any
}


class BookInstances extends Component<Props> {
    render() {
        const { currentBook } = this.props

        return (
            <>
                <div className="form-row">
                    <div className="form-group">
                        <label>Number of instances</label>
                        <div>
                            <input className="form-control"></input>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default BookInstances;