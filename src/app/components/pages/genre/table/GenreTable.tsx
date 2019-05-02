import React, { Component } from 'react';

import { Table, Row } from '../../../template';
import GenreRow from './GenreRow';
import { Genre } from '../../../../../dto';

interface Props {
    genres: Genre[],
    onLoad: () => void,
    onGenreClick: (id: number) => void
}

class GenreTable extends Component<Props> {
    componentDidMount() {
        this.props.onLoad()
    }

    render() {
        const { genres } = this.props;
        return (
            <Table>
                <thead>
                    <Row>
                        <th className="col-12">Name</th>
                    </Row>
                </thead>
                <tbody>
                    {genres.map((genre) => {
                        const onGenreClick = () => this.props.onGenreClick(genre.id)
                        return (
                            <GenreRow 
                                key={genre.id}
                                id={genre.id}
                                onGenreClick={onGenreClick}
                        
                                name={genre.name}
                            />
                        )
                    })}
                </tbody>
            </Table>
        );
    }
}

export default GenreTable;