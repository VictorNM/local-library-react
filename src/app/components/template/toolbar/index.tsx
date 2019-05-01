import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
    title: string,
    onButtonClick: () => void
}

class Toolbar extends Component<Props> {
    render() {
        const { title, onButtonClick } = this.props;

        return (
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>{title}</h2>
                <Button 
                    variant="primary"
                    onClick={onButtonClick}
                >
                    Create
                </Button>
            </div>
            
        );
    }
}

export default Toolbar;