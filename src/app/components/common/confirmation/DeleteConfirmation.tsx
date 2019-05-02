import React from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
    show: boolean,
    handleSubmit: () => void,
    handleHide: () => void,
}

const DeleteConfirmation: React.FC<Props> = props => {
    const { show, handleSubmit, handleHide} = props;

    return (
        <Modal show={show} onHide={handleHide}>
            <Modal.Header>
                <h2>Delete Confirmation</h2>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this?
            </Modal.Body>
            <Modal.Footer>
                <button onClick={handleSubmit} className="btn btn-danger">Yes</button>
                <button onClick={handleHide} className="btn btn-secondary">No</button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteConfirmation;