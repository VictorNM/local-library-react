import React, { Component } from 'react';

import { Table, Row } from '../../../template';
import AuthorRow from './AuthorRow';
import { Author } from '../../../../../dto';

interface Props {
    authors: Author[],
    onLoad: () => void,
    onAuthorClick: (id: number) => void
}

class GenreTable extends Component<Props> {
    componentDidMount() {
        this.props.onLoad()
    }

    render() {
        const { authors, onAuthorClick } = this.props;
        return (
            <Table>
                <thead>
                    <Row>
                        <th className="col-4">Name</th>
                        <th className="col-4">Date of birth</th>
                        <th className="col-4">Date of death</th>
                    </Row>
                </thead>
                <tbody>
                    {authors.map((author) => {
                        return (
                            <AuthorRow 
                                key={author.id}
                                id={author.id}
                                onAuthorClick={() => onAuthorClick(author.id)}
                        
                                name={author.name}
                                lastName={author.lastName}
                                firstName={author.firstName}
                                dateOfBirth={author.dateOfBirth}
                                dateOfDeath={author.dateOfDeath}
                            />
                        )
                    })}
                </tbody>
            </Table>
        );
    }
}

export default GenreTable;