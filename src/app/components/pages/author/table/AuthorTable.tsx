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
                        <th className="col-3">Name</th>
                        <th className="col-3">Lifespan</th>
                        <th className="col-3">Date of birth</th>
                        <th className="col-3">Date of death</th>
                    </Row>
                </thead>
                <tbody>
                    {authors.map((author) => {
                        return (
                            <AuthorRow 
                                key={author.id}
                                id={author.id}
                                onAuthorClick={() => onAuthorClick(author.id)}
                        
                                family_name={author.family_name}
                                first_name={author.first_name}
                                name={author.name}

                                date_of_birth={author.date_of_birth}
                                date_of_death={author.date_of_death}
                                lifespan={author.lifespan}
                            />
                        )
                    })}
                </tbody>
            </Table>
        );
    }
}

export default GenreTable;