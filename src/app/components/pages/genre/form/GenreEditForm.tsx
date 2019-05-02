import React, { Component } from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import { EditFormModal } from '../../../template'
import { Genre } from '../../../../../dto';

interface ModalProps {
    show: boolean,
    handleDelete: (id: number) => void,
    onHide: () => void
}

class GenreEditForm extends Component<ModalProps & InjectedFormProps<Genre, ModalProps>> {
    render() {
        const { show, handleSubmit, handleDelete, onHide, pristine, submitting } = this.props

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
                <div className="form-group">
                    <label>Name</label>
                    <div>
                        <Field name="name" component="input" className="form-control" />
                    </div>
                </div>
            </EditFormModal> 
        )
    }
}

export default reduxForm<Genre, ModalProps>({
    form: 'genreEditForm',
    enableReinitialize: true
})(GenreEditForm)