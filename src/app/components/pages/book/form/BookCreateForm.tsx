import React, { Component } from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';

import { CreateFormModal } from '../../../template'
import { Book } from '../../../../../dto';
import BookDetail from './BookDetail';

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
    render() {
        const { show, handleSubmit, onHide, pristine, submitting } = this.props

        return (
            <CreateFormModal
                title="Book"
                show={show}
                onSubmit={handleSubmit}
                onHide={onHide}
                btnSubmitDisabled={pristine || submitting}
                btnCancelDisabled={submitting}
            >
                <BookDetail
                    currentBook={null}
                    authors={this.props.authors}
                    genres={this.props.genres}
                />

            </CreateFormModal>
        )
    }
}

export default reduxForm<Book, Props & ModalProps>({
    form: 'bookEditForm',
    enableReinitialize: true
})(BookCreateForm)