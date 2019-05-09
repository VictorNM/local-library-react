import React from 'react';

import { Table, Row } from '../../../template';
import { BookInstance } from '../../../../../dto';

interface RowProps {
    bookInstace: BookInstance
}

interface TableProps {
    bookInstances: BookInstance[]
}

const BookInstanceRow: React.FC<RowProps> = props => {
    const { bookInstace } = props
    return (
        <Row>
            <td className="col-2">{bookInstace.id}</td>
            <td className="col-4">{bookInstace.status}</td>
            <td className="col-4">{bookInstace.due_back}</td>
            <th className="col-2">
                O X
            </th>
        </Row>
    )
}

const BookInstanceTable: React.FC<TableProps> = props => {
    const { bookInstances } = props
    return (
        <Table>
            <thead>
                <Row>
                    <th className="col-2">ID</th>
                    <th className="col-4">Status</th>
                    <th className="col-4">Due back</th>
                    <th className="col-2"></th>
                </Row>
            </thead>
            <tbody>
                {bookInstances.map((bookInstance) => {
                    return (
                        <BookInstanceRow
                            key={bookInstance.id}

                            bookInstace={bookInstance}
                        />
                    )
                })}
            </tbody>
        </Table>
    )
}

export default BookInstanceTable;