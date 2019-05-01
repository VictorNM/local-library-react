import React from 'react';
import { Modal } from 'react-bootstrap';
import './LoadingIndicator.css';

interface Props {
    show: boolean
}

const LoadingIndicator: React.FC<Props> = props => {
    const { show } = props;
    return (
        <Modal show={show} id="loading-indicator" centered backdrop={false}>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </Modal>
    )
}

export default LoadingIndicator;