import React, { Component } from 'react';

import Toolbar from '../../../template/toolbar';

class GenreToolbar extends Component<{onClick: () => void}> {
    render() {
        return (
            <Toolbar onButtonClick={this.props.onClick} />
        );
    }
}

export default GenreToolbar;