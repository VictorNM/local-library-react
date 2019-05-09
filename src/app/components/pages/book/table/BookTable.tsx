import React, { Component } from 'react';

import { Table, Row } from '../../../template';
import BookRow from './BookRow';
import { Book } from '../../../../../dto';

interface Props {
    books: Book[],
    onLoad: () => void,
    onBookClick: (id: number) => void,
    onAuthorClick: (authorId: number) => void
}

class BookTable extends Component<Props> {
    componentDidMount() {
        this.props.onLoad()
    }

    render() {
        const { books } = this.props;
        return (
            <Table>
                <thead>
                    <Row>
                        <th className="col-3">Title</th>
                        <th className="col-3">Author</th>
                        <th className="col-6">Summary</th>
                    </Row>
                </thead>
                <tbody>
                    {books.map((book) => {
                        const onBookClick = () => this.props.onBookClick(book.id)
                        const onAuthorClick = () => book.author ? this.props.onAuthorClick(book.author.id) : undefined
                        return (
                            <BookRow 
                                key={book.id}
                                onBookClick={onBookClick}
                                onAuthorClick={onAuthorClick}
                        
                                title={book.title}
                                author_name={book.author ? book.author.name : ''}
                                summary={book.summary}                                
                            />
                        )
                    })}
                </tbody>
            </Table>
        );
    }
}

export default BookTable;