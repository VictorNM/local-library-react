import React from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
    title: string,
    show: boolean,
    onSubmit: any,
    onHide: () => void
}

const ModalForm: React.FC<Props> = props => {
    const { title, show, onSubmit, onHide, children } = props;
    return (
        <Modal show={show} onHide={onHide} >
            <form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button onClick={onHide} className="btn btn-secondary">Cancel</button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

export default ModalForm;