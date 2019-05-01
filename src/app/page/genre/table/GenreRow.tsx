import React from 'react';

import { Row } from '../../../template/table';

export interface Props {
    id: number
    name: string
    onGenreClick: () => void
}

const GenreRow: React.FC<Props> = props => {
    const { id, name, onGenreClick } = props;
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