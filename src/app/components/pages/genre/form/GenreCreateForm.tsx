import React, { Component } from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import { ModalForm } from '../../../template';
import { Genre } from '../../../../../dto';

interface ModalProps {
    show: boolean,
    onHide: () => void
}

class GenreCreateForm extends Component<ModalProps & InjectedFormProps<Genre, ModalProps>> {
    render() {
        const { show, handleSubmit, onHide, pristine, submitting } = this.props

        return (
            <ModalForm
                title="Create Genre"
                show={show}
                onSubmit={handleSubmit}
                onHide={handleSubmit(() => onHide())}
                btnSubmitDisabled={pristine || submitting}
                btnCancelDisable={submitting}
            >
                <div className="form-group">
                    <label>Name</label>
                    <div>
                        <Field name="name" component="input" className="form-control" />
                    </div>
                </div>
            </ModalForm>
        )
    }

}

export default reduxForm<Genre, ModalProps>({
    form: 'genreCreateForm',
    enableReinitialize: true
})(GenreCreateForm)