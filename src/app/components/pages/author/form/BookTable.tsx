import React from 'react';

import { Table, Row } from '../../../template';
import { Link } from 'react-router-dom';

interface RowProps {
    title: string,
    summary: string,
    onBookClick: () => void
}

interface TableProps {
    books: {
        id: number,
        title: string,
        summary: string
    }[],
    onBookClick: (bookId: number) => void
}

const BookRow: React.FC<RowProps> = props => {
    const { title, summary } = props
    return (
        <Row>
            <td className="col-6"><Link to="/book" onClick={props.onBookClick} style={{textDecoration: 'none', color: 'inherit'}}>{title}</Link></td>
            <td className="col-6">{summary}</td>
        </Row>
    )
}

const BookTable: React.FC<TableProps> = props => {
    const { books } = props
    return (
        <Table>
            <thead>
                <Row>
                    <th className="col-6">Title</th>
                    <th className="col-6">Author</th>
                </Row>
            </thead>
            <tbody>
                {books.map((book) => {
                    return (
                        <BookRow
                            key={book.id}

                            title={book.title}
                            summary={book.summary}
                            onBookClick={() => props.onBookClick(book.id)}
                        />
                    )
                })}
            </tbody>
        </Table>
    )
}

export default BookTable;