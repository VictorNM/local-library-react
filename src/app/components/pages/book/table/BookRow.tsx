import React from 'react';

import { Row } from '../../../template';

interface Book {
    title: string,
    author_name: string,
    summary: string
}

interface Props {
    onBookClick: () => void
}

const BookRow: React.FC<Props & Book> = props => {
    const { title, author_name, summary, onBookClick } = props;
    const tdStyle = {
        cursor: 'pointer'
    }
    return (
        <Row>
            <td className="col-3" onClick={onBookClick} style={tdStyle}>{title}</td>
            <td className="col-3">{author_name}</td>
            <td className="col-6">{summary}</td>
        </Row>
    )
}

export default BookRow;