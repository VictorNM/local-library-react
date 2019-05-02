import React from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
    show: boolean,
    error: any,
    onHide: () => void
}

const ErrorModal: React.FC<Props> = props => {
    const { show, error, onHide } = props;

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <h2>Error!</h2>
            </Modal.Header>
            <Modal.Body>
                {error}
            </Modal.Body>
            <Modal.Footer>
                <button onClick={onHide} className="btn btn-primary">Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ErrorModal;