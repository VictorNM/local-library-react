import React, { Component } from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { Tabs, Tab } from 'react-bootstrap';

import { EditFormModal } from '../../../template'
import { Author, Book } from '../../../../../dto';
import AuthorDetail from './AuthorDetail';
import BookTable from './BookTable';

interface ModalProps {
    show: boolean,
    handleDelete: (id: number) => void,
    onHide: () => void,
    onBookClick: (bookId: number) => void
}

class AuthorEditForm extends Component<ModalProps & InjectedFormProps<Author, ModalProps>> {
    render() {
        const { initialValues, show, handleSubmit, handleDelete, onBookClick, onHide, pristine, submitting } = this.props
        const books : Book[] = initialValues ? (initialValues.books ? initialValues.books : []) : []

        return (
            <EditFormModal
                title="Author"
                show={show} 
                onSubmit={handleSubmit} 
                onDelete={handleSubmit(values => handleDelete(values.id))}
                onHide={onHide}
                btnSubmitDisabled={pristine || submitting}
                btnCancelDisable={submitting}
            >
                <Tabs defaultActiveKey="author-detail" id="author-tab">
                    <Tab eventKey="author-detail" title="Author">
                        <AuthorDetail />
                    </Tab>
                    <Tab eventKey="book-table" title="Books">
                        <BookTable books={books} onBookClick={onBookClick}/>
                    </Tab>
                </Tabs>
            </EditFormModal> 
        )
    }
}

export default reduxForm<Author, ModalProps>({
    form: 'authorEditForm',
    enableReinitialize: true
})(AuthorEditForm)