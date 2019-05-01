import React from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { ModalForm } from '../../../template';
import { Genre } from '../../../../../dto';

interface ModalProps {
    show: boolean,
    handleDelete: (id: number) => void,
    onHide: () => void
}

const GenreEditForm:React.FC<ModalProps & InjectedFormProps<Genre, ModalProps>> = props => {
    const { show, handleSubmit, handleDelete, onHide } = props

    return (
        <ModalForm title="Genre" show={show} onSubmit={handleSubmit} onHide={handleSubmit(() => onHide())}>
            <div className="clearfix p-0 m-0">
                <span className="float-right">
                    <button onClick={handleSubmit(values => handleDelete(values.id))} className="btn btn-square btn-outline-danger">
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                </span>
            </div>
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
    form: 'genreEditForm',
    enableReinitialize: true
})(GenreEditForm)