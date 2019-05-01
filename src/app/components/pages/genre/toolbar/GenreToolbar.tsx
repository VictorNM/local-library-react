import React, { Component } from 'react';

import { Toolbar } from '../../../template';

class GenreToolbar extends Component<{onClick: () => void}> {
    render() {
        return (
            <Toolbar title="Genre" onButtonClick={this.props.onClick} />
        );
    }
}

export default GenreToolbar;