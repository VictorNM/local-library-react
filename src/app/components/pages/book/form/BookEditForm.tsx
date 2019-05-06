import React, { Component } from 'react';
import { reduxForm, InjectedFormProps, Field, getFormInitialValues } from 'redux-form';

import { EditFormModal } from '../../../template'
import { Book } from '../../../../../dto';

interface ModalProps {
    show: boolean,
    authors: {id: number, name: string}[],
    // handleDelete: (id: number) => void,
    onHide: () => void
}

class BookEditForm extends Component<ModalProps & InjectedFormProps<Book, ModalProps>> {
    render() {
        const { initialValues, show, handleSubmit, onHide, pristine, submitting } = this.props
        const current_author = initialValues ? initialValues.author : null
        const current_genres = initialValues ? initialValues.genres : null

        return (
            <EditFormModal
                title="Book"
                show={show}
                onSubmit={handleSubmit}
                onDelete={handleSubmit(() => { })}
                onHide={onHide}
                btnSubmitDisabled={pristine || submitting}
                btnCancelDisable={submitting}
            >
                <div className="form-row">
                    <div className="form-group col-6">
                        <label>Title</label>
                        <div>
                            <Field name="title" component="input" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group col-6">
                        <label>Author</label>
                        <div>
                            
                            <Field name="author.id" component="select" className="form-control">
                                <option value={current_author ? current_author.id : undefined}>{current_author ? current_author.name : null}</option>
                                {this.props.authors.map(author => {
                                    if (current_author && author.id === current_author.id) {
                                        return null;
                                    }
                                    return (
                                        <option key={author.id} value={author.id}>{author.name}</option>
                                    )                                    
                                })}
                            </Field>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-6">
                        <label>ISBN</label>
                        <div>
                            <Field name="isbn" component="input" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group col-6">
                        <label>Genres</label>
                        <div>
                            <Field name="genres" component="select" multiple className="form-control">
                                <option 
                                    value={current_genres ? (current_genres[0] ? current_genres[0].id : undefined) : undefined}>
                                        {current_genres ? (current_genres[0] ? current_genres[0].name : null) : null}
                                </option>
                            </Field>
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

            </EditFormModal>
        )
    }
}

export default reduxForm<Book, ModalProps>({
    form: 'bookEditForm',
    enableReinitialize: true
})(BookEditForm)