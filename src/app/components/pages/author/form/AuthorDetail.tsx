import React from 'react';
import { Field } from 'redux-form';

const AuthorDetail = () => {
    return (
        <>
            <div className="form-row">
                <div className="form-group col-6">
                    <label>Name</label>
                    <Field name="name" component="input" className="form-control" readonly="readonly" />
                </div>
                <div className="form-group col-6">
                    <label>Lifespan</label>
                    <Field name="lifespan" component="input" className="form-control" readonly="readonly" />
                </div>
            </div>
            <hr />
            <div className="form-row">
                <div className="form-group col-6">
                    <label>First Name</label>
                    <Field name="first_name" component="input" className="form-control" />
                </div>
                <div className="form-group col-6">
                    <label>Family Name</label>
                    <Field name="family_name" component="input" className="form-control" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-6">
                    <label>Date of birth</label>
                    <Field name="date_of_birth" component="input" type="date" className="form-control" />
                </div>
                <div className="form-group col-6">
                    <label>Date of death</label>
                    <Field name="date_of_death" component="input" type="date" className="form-control" />
                </div>
            </div>
        </>
    )
}

export default AuthorDetail;