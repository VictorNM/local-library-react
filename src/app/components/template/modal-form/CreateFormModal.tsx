import React from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
    title: string,
    show: boolean,
    onSubmit: any,
    onHide: () => void,
    btnSubmitDisabled: boolean,
    btnCancelDisable: boolean
}

const CreateModalForm: React.FC<Props> = props => {
    const {
        title, 
        show, 
        onSubmit, 
        onHide,
        btnSubmitDisabled,
        btnCancelDisable,
        children 
    } = props;

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
        </Modal>
    )
}

export default CreateModalForm;