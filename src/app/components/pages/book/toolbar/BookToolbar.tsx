import React, { Component } from 'react';

import { Toolbar } from '../../../template';

interface Props {
    onCreateClick: () => void
}

class BookToolbar extends Component<Props> {
    render() {
        const { onCreateClick } = this.props
        return (
            <Toolbar title="Book" onButtonClick={onCreateClick} />
        );
    }
}

export default BookToolbar;