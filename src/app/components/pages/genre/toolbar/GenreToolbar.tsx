import React, { Component } from 'react';

import { Toolbar } from '../../../template';

interface Props {
    onCreateClick: () => void
}

class GenreToolbar extends Component<Props> {
    render() {
        const { onCreateClick } = this.props
        return (
            <Toolbar title="Genre" onButtonClick={onCreateClick} />
        );
    }
}

export default GenreToolbar;