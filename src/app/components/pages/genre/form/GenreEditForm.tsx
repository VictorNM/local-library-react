import React, { Component } from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { ModalForm } from '../../../template';
import DeleteConfirmation from '../../../common/confirmation/DeleteConfirmation';
import { Genre } from '../../../../../dto';

interface ModalProps {
    show: boolean,
    handleDelete: (id: number) => void,
    onHide: () => void
}

interface State {
    showConfirmation: boolean
}

class GenreEditForm extends Component<ModalProps & InjectedFormProps<Genre, ModalProps>, State> {
    constructor(props: ModalProps & InjectedFormProps<Genre, ModalProps>) {
        super(props)

        this.state = {
            showConfirmation: false
        }
    }

    handleShowConfirmation = () => {
        this.setState({ showConfirmation: true })
    }

    handleHideConfirmation = () => {
        this.setState({ showConfirmation: false})
    }

    handleSubmit = (values: Genre) => {
            this.props.handleDelete(values.id);
            this.handleHideConfirmation();
    }

    render() {
        const { show, handleSubmit, onHide, pristine, submitting } = this.props
        const { showConfirmation } = this.state

        return (
            <ModalForm
                title="Genre"
                show={show} 
                onSubmit={handleSubmit} 
                onHide={handleSubmit(() => onHide())}
                btnSubmitDisabled={pristine || submitting}
                btnCancelDisable={submitting}

            >
                <div className="clearfix p-0 m-0">
                    <span className="float-right">
                        <button onClick={handleSubmit(() => this.handleShowConfirmation())} className="btn btn-square btn-outline-danger">
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
                <DeleteConfirmation
                    show={showConfirmation}
                    handleSubmit={handleSubmit(values => this.handleSubmit(values))}
                    handleHide={this.handleHideConfirmation}
                />
            </ModalForm> 
        )
    }
}

export default reduxForm<Genre, ModalProps>({
    form: 'genreEditForm',
    enableReinitialize: true
})(GenreEditForm)