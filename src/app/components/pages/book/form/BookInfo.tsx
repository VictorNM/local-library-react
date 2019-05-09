import React, { Component } from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import { EditFormModal } from '../../../template'
import { Book } from '../../../../../dto';
import AuthorSelect from './AuthorSelect';
import GenresSelect from './GenresSelect';

interface Author {
    id: number,
    name: string
}

interface Genre {
    id: number,
    name: string
}

interface Props {
    currentBook: any,
    authors: Author[],
    genres: Genre[],
}


class BookInfo extends Component<Props> {
    render() {
        const { currentBook } = this.props
        const currentAuthor = currentBook ? currentBook.author : null
        const currentGenres = currentBook ? currentBook.genres : null

        return (
            <>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label>Title</label>
                        <div>
                            <Field name="title" component="input" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-6">
                        <label>Author</label>
                        <div>                            
                            <Field 
                                name="author" 
                                component={AuthorSelect} 
                                authors={this.props.authors}
                                currentAuthor={currentAuthor}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-group col-6">
                        <label>ISBN</label>
                        <div>
                            <Field name="isbn" component="input" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-row">                    
                    <div className="form-group col-12">
                        <label>Genres</label>
                        <div>
                            <Field 
                                name="genres"
                                component={GenresSelect}
                                genres={this.props.genres}
                                currentGenres={currentGenres}
                                className="form-control" 
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label>Summary</label>
                        <div>
                            <Field name="summary" component="textarea" className="form-control" />
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default BookInfo;