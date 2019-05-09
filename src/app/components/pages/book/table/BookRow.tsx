import React from 'react';

import { Row } from '../../../template';
import { Link } from 'react-router-dom';

interface Book {
    title: string,
    author_name: string,
    summary: string
}

interface Props {
    onBookClick: () => void,
    onAuthorClick: () => void | undefined
}

const BookRow: React.FC<Props & Book> = props => {
    const { title, author_name, summary, onBookClick, onAuthorClick } = props;
    const tdStyle = {
        cursor: 'pointer'
    }
    return (
        <Row>
            <td className="col-3" onClick={onBookClick} style={tdStyle}>{title}</td>
            <td className="col-3"><Link to="/author" onClick={onAuthorClick} style={{ textDecoration: 'none', color: 'inherit' }}>{author_name}</Link></td>
            <td className="col-6">{summary}</td>
        </Row>
    )
}

export default BookRow;