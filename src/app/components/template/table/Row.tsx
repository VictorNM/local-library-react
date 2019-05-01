import React from 'react';

const Row:React.FC = props => (
    <tr className="d-flex">
        { props.children }
    </tr>
)

export default Row;