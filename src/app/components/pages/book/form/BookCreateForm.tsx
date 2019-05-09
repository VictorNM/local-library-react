import React, { Component } from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { Tabs, Tab } from 'react-bootstrap';

import { CreateFormModal } from '../../../template'
import { Book } from '../../../../../dto';
import BookInfo from './BookInfo';
import BookInstances from './BookIntances';

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
        const { initialValues, show, handleSubmit, onHide, pristine, submitting } = this.props

        return (
            <CreateFormModal
                title="Book"
                show={show}
                onSubmit={handleSubmit}
                onHide={onHide}
                btnSubmitDisabled={pristine || submitting}
                btnCancelDisabled={submitting}
            >
                <Tabs defaultActiveKey="info" id="book-tab" className="mb-3">
                    <Tab eventKey="info" title="Book Info">
                        <BookInfo
                            currentBook={null}
                            authors={this.props.authors}
                            genres={this.props.genres}
                        />
                    </Tab>
                    <Tab eventKey="book-intances" title="Book Instances">
                        <BookInstances
                            currentBook={initialValues}
                        />
                    </Tab>
                </Tabs>

            </CreateFormModal>
        )
    }
}

export default reduxForm<Book, Props & ModalProps>({
    form: 'bookEditForm',
    enableReinitialize: true
})(BookCreateForm)