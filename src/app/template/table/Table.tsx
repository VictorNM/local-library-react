import React from 'react';

const Table: React.FC = (props) => (
    <table className="table table-striped">
        { props.children }
    </table>
)

export default Table;