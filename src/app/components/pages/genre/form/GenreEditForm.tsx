import React, { Component } from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { Tabs, Tab } from 'react-bootstrap';

import { EditFormModal } from '../../../template'
import { Genre } from '../../../../../dto';
import GenreDetail from './GenreDetail';
import BookTable from './BookTable';

interface ModalProps {
    show: boolean,
    handleDelete: (id: number) => void,
    onHide: () => void,
    onBookClick: (bookId: number) => void
}

interface Book {
    id: number, 
    title: string,
    author: {
        name: string
    }
}

interface GenreWithBook extends Genre {
    books: Book[]
}

class GenreEditForm extends Component<ModalProps & InjectedFormProps<GenreWithBook, ModalProps>> {
    render() {
        const { initialValues, show, handleSubmit, handleDelete, onHide, pristine, submitting, onBookClick } = this.props
        const books : Book[] = initialValues ? (initialValues.books ? initialValues.books : []) : []

        return (
            <EditFormModal
                title="Genre"
                show={show}
                onSubmit={handleSubmit}
                onDelete={handleSubmit(values => handleDelete(values.id))}
                onHide={onHide}
                btnSubmitDisabled={pristine || submitting}
                btnCancelDisable={submitting}
            >
                <Tabs defaultActiveKey='genre-detail' id='genre-tabs'>
                    <Tab eventKey='genre-detail' title='Detail'>
                        <GenreDetail />
                    </Tab>
                    <Tab eventKey='book-list' title='Books'>
                        <BookTable books={books} onBookClick={onBookClick} />
                    </Tab>
                </Tabs>
            </EditFormModal>
        )
    }
}

export default reduxForm<GenreWithBook, ModalProps>({
    form: 'genreEditForm',
    enableReinitialize: true
})(GenreEditForm)