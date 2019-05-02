import React from 'react';

import { Row } from '../../../template';
import { Author } from '../../../../../dto';

export interface Props extends Author {
    onAuthorClick: () => void
}

const AuthorRow: React.FC<Props> = props => {
    const { name, dateOfBirth, dateOfDeath, onAuthorClick } = props;
    const tdStyle = {
        cursor: 'pointer'
    }
    return (
        <Row>
            <td className="col-4" onClick={onAuthorClick} style={tdStyle}>{name}</td>
            <td className="col-4">{dateOfBirth}</td>
            <td className="col-4">{dateOfDeath}</td>
        </Row>
    )
}

export default AuthorRow;