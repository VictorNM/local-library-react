import React, { Component } from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import { Tabs, Tab } from 'react-bootstrap';

import { EditFormModal } from '../../../template'
import { Book, BookInstance } from '../../../../../dto';
import BookDetail from './BookDetail';
import BookInstanceTable from './BookInstanceTable';


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
    handleDelete: (id: number) => void,
    onHide: () => void
}

interface Props {    
    authors: Author[],
    genres: Genre[],
}

class BookEditForm extends Component<Props & ModalProps & InjectedFormProps<Book, Props & ModalProps>> {
    getAuthorOptions() {
        return this.props.authors.map(author => ({
            value: author.id,
            label: author.name
        }))
    }

    render() {
        const { initialValues, show, handleSubmit, handleDelete, onHide, pristine, submitting } = this.props
        const bookInstances : BookInstance[] = initialValues ? (initialValues.bookInstances ? initialValues.bookInstances : []) : []

        return (
            <EditFormModal
                title="Book"
                show={show}
                onSubmit={handleSubmit}
                onDelete={handleSubmit(values => handleDelete(values.id))}
                onHide={onHide}
                btnSubmitDisabled={pristine || submitting}
                btnCancelDisable={submitting}
            >
                <Tabs defaultActiveKey="book-detail" id="book-tab" className="mb-3">
                    <Tab eventKey="book-detail" title="Book">
                        <BookDetail
                            currentBook={initialValues}
                            authors={this.props.authors}
                            genres={this.props.genres}
                        />
                    </Tab>
                    <Tab eventKey="book-intances" title="Book Instances">
                        <Field 
                            name="bookInstances" 
                            component={BookInstanceTable} 
                            bookInstances={bookInstances}
                        />
                    </Tab>
                </Tabs>

            </EditFormModal>
        )
    }
}

export default reduxForm<Book, Props & ModalProps>({
    form: 'bookEditForm',
    enableReinitialize: true
})(BookEditForm)