import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import DeleteConfirmation from '../../common/confirmation/DeleteConfirmation';

interface Props {
    title: string,
    show: boolean,
    onSubmit: any,
    onDelete: any,
    onHide: () => void,
    btnSubmitDisabled: boolean,
    btnCancelDisable: boolean
}

interface State {
    showConfirmation: boolean
}

class EditFormModal extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            showConfirmation: false
        }
    }

    showDeleteConfirm = () => {
        this.setState({ showConfirmation: true })
    }

    hideDeleteConfirm = () => {
        this.setState({ showConfirmation: false })
    }

    handleSubmit = () => {
        this.props.onDelete();
        this.hideDeleteConfirm();
    }

    render() {
        const {
            title,
            show,
            onSubmit,
            onHide,
            btnSubmitDisabled,
            btnCancelDisable,
            children
        } = this.props;

        const { showConfirmation } = this.state

        return (
            <Modal show={show} onHide={onHide} >
                <form onSubmit={onSubmit}>

                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="clearfix p-0 m-0">
                            <span className="float-right">
                                <button type="button" onClick={this.showDeleteConfirm} className="btn btn-square btn-outline-danger">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </span>
                        </div>
                        {children}
                    </Modal.Body>

                    <Modal.Footer>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={btnSubmitDisabled}
                        >
                            Save
                    </button>
                        <button
                            type="button"
                            onClick={onHide}
                            className="btn btn-secondary"
                            disabled={btnCancelDisable}
                        >
                            Cancel
                    </button>
                    </Modal.Footer>

                </form>

                <DeleteConfirmation
                    show={showConfirmation}
                    handleSubmit={this.handleSubmit}
                    handleHide={this.hideDeleteConfirm}
                />
            </Modal>
        )
    }
}

export default EditFormModal;