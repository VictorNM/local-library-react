import React from 'react';

import { Table, Row } from '../../../template';
import { Link } from 'react-router-dom';
import { colors } from 'react-select/lib/theme';

interface RowProps {
    title: string,
    author_name: string,
    onBookClick: () => void
}

interface TableProps {
    books: {
        id: number,
        title: string,
        author: {
            name: string
        }
    }[],
    onBookClick: (bookId: number) => void
}

const BookRow: React.FC<RowProps> = props => {
    const { title, author_name } = props
    return (
        <Row>
            <td className="col-6"><Link to="/book" onClick={props.onBookClick} style={{textDecoration: 'none', color: 'inherit'}}>{title}</Link></td>
            <td className="col-6">{author_name}</td>
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
                            author_name={book.author ? book.author.name : ''}
                            onBookClick={() => props.onBookClick(book.id)}
                        />
                    )
                })}
            </tbody>
        </Table>
    )
}

export default BookTable;