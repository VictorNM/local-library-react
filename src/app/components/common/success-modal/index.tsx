import React from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
    show: boolean,
    message: string,
    onHide: () => void
}

const SuccessModal: React.FC<Props> = props => {
    const { show, message, onHide } = props;

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <h2>Successfully!</h2>
            </Modal.Header>
            <Modal.Body>
                {message}
            </Modal.Body>
            <Modal.Footer>
                <button onClick={onHide} className="btn btn-primary">OK</button>
            </Modal.Footer>
        </Modal>
    )
}

export default SuccessModal;