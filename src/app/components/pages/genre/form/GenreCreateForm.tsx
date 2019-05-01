import React from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import { ModalForm } from '../../../template';
import { Genre } from '../../../../../dto';

interface ModalProps {
    show: boolean,
    onHide: () => void
}

const GenreCreateForm:React.FC<ModalProps & InjectedFormProps<Genre, ModalProps>> = props => {
    const { show, handleSubmit, onHide } = props

    return (
        <ModalForm title="Create Genre" show={show} onSubmit={handleSubmit} onHide={handleSubmit(() => onHide())}>
            <div className="form-group">
                <label>Name</label>
                <div>
                    <Field name="name" component="input" className="form-control" />
                </div>
            </div>
        </ModalForm>
    )
}

export default reduxForm<Genre, ModalProps>({
    form: 'genreCreateForm',
    enableReinitialize: true
})(GenreCreateForm)