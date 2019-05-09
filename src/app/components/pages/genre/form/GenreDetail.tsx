import React from 'react';
import { Field } from 'redux-form';

const GenreDetail = () => (
    <div className="form-group">
        <label>Name</label>
        <div>
            <Field name="name" component="input" className="form-control" />
        </div>
    </div>
)

export default GenreDetail;