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
            <div className="form-row">
                <div className="form-group col-6">
                    <label>First Name</label>
                    <Field name="first_name" component="input" className="form-control" />
                </div>
                <div className="form-group col-6">
                    <label>Family Name</label>
                    <Field name="family_name" component="input" className="form-control" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-6">
                    <label>Date of birth</label>
                    <Field name="date_of_birth" component="input" type="date" className="form-control" />
                </div>
                <div className="form-group col-6">
                    <label>Date of death</label>
                    <Field name="date_of_death" component="input" type="date" className="form-control" />
                </div>
            </div>
        </CreateFormModal>
    )
}

export default reduxForm<Author, ModalProps>({
    form: 'authorCreateForm',
    enableReinitialize: true
})(AuthorCreateForm)