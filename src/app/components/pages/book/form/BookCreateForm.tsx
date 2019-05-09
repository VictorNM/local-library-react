import React, { Component } from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import { CreateFormModal } from '../../../template'
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

interface ModalProps {
    show: boolean,
    onHide: () => void
}

interface Props {    
    authors: Author[],
    genres: Genre[],
}


class BookCreateForm extends Component<Props & ModalProps & InjectedFormProps<Book, Props & ModalProps>> {
    getAuthorOptions() {
        return this.props.authors.map(author => ({
            value: author.id,
            label: author.name
        }))
    }

    render() {
        const { initialValues, show, handleSubmit, onHide, pristine, submitting } = this.props
        const currentAuthor = initialValues ? initialValues.author : null
        const currentGenres = initialValues ? initialValues.genres : null

        return (
            <CreateFormModal
                title="Book"
                show={show}
                onSubmit={handleSubmit}
                onHide={onHide}
                btnSubmitDisabled={pristine || submitting}
                btnCancelDisabled={submitting}
            >
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

            </CreateFormModal>
        )
    }
}

export default reduxForm<Book, Props & ModalProps>({
    form: 'bookEditForm',
    enableReinitialize: true
})(BookCreateForm)