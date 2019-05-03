import React, { Component } from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import { EditFormModal } from '../../../template'
import { Author } from '../../../../../dto';

interface ModalProps {
    show: boolean,
    handleDelete: (id: number) => void,
    onHide: () => void
}

class AuthorEditForm extends Component<ModalProps & InjectedFormProps<Author, ModalProps>> {
    render() {
        const { show, handleSubmit, handleDelete, onHide, pristine, submitting } = this.props

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
                <div className="form-row">
                    <div className="form-group col-6">
                        <label>Last Name</label>
                        <Field name="lastName" component="input" className="form-control" />
                    </div>
                    <div className="form-group col-6">
                        <label>First Name</label>
                        <Field name="firstName" component="input" className="form-control" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-6">
                        <label>Date of birth</label>
                        <Field name="dateOfBirth" component="input" type="date" className="form-control" />
                    </div>
                    <div className="form-group col-6">
                        <label>Date of birth</label>
                        <Field name="dateOfDeath" component="input" type="date" className="form-control" />
                    </div>
                </div>
            </EditFormModal> 
        )
    }
}

export default reduxForm<Author, ModalProps>({
    form: 'authorEditForm',
    enableReinitialize: true
})(AuthorEditForm)