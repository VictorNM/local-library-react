import React from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import { CreateFormModal } from '../../../template';
import { Author } from '../../../../../dto';

interface ModalProps {
    show: boolean,
    onHide: () => void
}

const AuthorCreateForm: React.FC<ModalProps & InjectedFormProps<Author, ModalProps>> = props => {
    const { show, handleSubmit, onHide, pristine, submitting } = props

    return (
        <CreateFormModal
            title="Create Author"
            show={show}
            onSubmit={handleSubmit}
            onHide={onHide}
            btnSubmitDisabled={pristine || submitting}
            btnCancelDisabled={submitting}
        >
        Author
        </CreateFormModal>
    )
}

export default reduxForm<Author, ModalProps>({
    form: 'genreCreateForm',
    enableReinitialize: true
})(AuthorCreateForm)