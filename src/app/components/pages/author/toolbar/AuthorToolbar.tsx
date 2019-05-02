import React, { Component } from 'react';

import { Toolbar } from '../../../template';

interface Props {
    onCreateClick: () => void
}

class AuthorToolbar extends Component<Props> {
    render() {
        const { onCreateClick } = this.props
        return (
            <Toolbar title="Author" onButtonClick={onCreateClick} />
        );
    }
}

export default AuthorToolbar;