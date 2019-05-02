import React from 'react';

import { Row } from '../../../template';
import { Genre } from '../../../../../dto';

export interface Props extends Genre {
    onGenreClick: () => void
}

const GenreRow: React.FC<Props> = props => {
    const { name, onGenreClick } = props;
    const tdStyle = {
        cursor: 'pointer'
    }
    return (
        <Row>
            <td className="col-12" onClick={onGenreClick} style={tdStyle}>{name}</td>
        </Row>
    )
}

export default GenreRow;