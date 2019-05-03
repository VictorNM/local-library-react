import React from 'react';

import { Row } from '../../../template';
import { Author } from '../../../../../dto';

export interface Props extends Author {
    onAuthorClick: () => void
}

const AuthorRow: React.FC<Props> = props => {
    const { name, lifespan, date_of_birth, date_of_death, onAuthorClick } = props;
    const tdStyle = {
        cursor: 'pointer'
    }
    return (
        <Row>
            <td className="col-3" onClick={onAuthorClick} style={tdStyle}>{name}</td>
            <td className="col-3">{lifespan}</td>
            <td className="col-3">{date_of_birth === "0000-00-00" ? null : date_of_birth}</td>
            <td className="col-3">{date_of_death === "0000-00-00" ? null : date_of_death}</td>
        </Row>
    )
}

export default AuthorRow;