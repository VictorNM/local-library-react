import React, { Component } from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import Select from 'react-select';

import { EditFormModal } from '../../../template'
import { Book } from '../../../../../dto';

interface Author {
    id: number,
    name: string
}

interface Genre {
    id: number,
    name: string
}

interface ModalProps {
    show: boolean,
    handleDelete: (id: number) => void,
    onHide: () => void
}

interface Props {    
    authors: Author[],
    genres: Genre[],
}

const AuthorSelect = (props: any) => {

    const onChange = (event: any) => {
        if (props.input.onChange && event != null) {
            props.input.onChange({
                id: event.value,
                name: event.label
            })
        }
        else {
            props.input.onChange(null)
        }
    }

    const options = props.authors.map((author: Author) => ({
        value: author.id,
        label: author.name
    }))

    const currentOption = props.currentAuthor ? {value: props.currentAuthor.id, label: props.currentAuthor.name} : null

    return (
        <Select 
            options={options}
            onChange={onChange}
            defaultValue={currentOption}
        />
    )
}

const GenresSelect = (props: any) => {
    const options = props.genres.map((genre: Genre) => ({
        value: genre.id,
        label: genre.name
    }))

    const onChange = (event: any) => {
        console.log(event)
        if (props.input.onChange && event != null) {
            props.input.onChange(event.map((option: any) => ({
                id: option.value,
                name: option.label
            })))
        }
        else {
            props.input.onChange(null)
        }
    }

    const currentOptions = props.currentGenres ? props.currentGenres.map((genre : any) => ({
        value: genre.id,
        label: genre.name
    })) : []

    return (
        <Select 
            options={options}
            isMulti
            onChange={onChange}
            defaultValue={currentOptions}
        />
    )
}

class BookEditForm extends Component<Props & ModalProps & InjectedFormProps<Book, Props & ModalProps>> {
    getAuthorOptions() {
        return this.props.authors.map(author => ({
            value: author.id,
            label: author.name
        }))
    }

    render() {
        const { initialValues, show, handleSubmit, handleDelete, onHide, pristine, submitting } = this.props
        const currentAuthor = initialValues ? initialValues.author : null
        const currentGenres = initialValues ? initialValues.genres : null

        return (
            <EditFormModal
                title="Book"
                show={show}
                onSubmit={handleSubmit}
                onDelete={handleSubmit(values => handleDelete(values.id))}
                onHide={onHide}
                btnSubmitDisabled={pristine || submitting}
                btnCancelDisable={submitting}
            >
                <div className="form-row">
                    <div className="form-group col-12">
                        <label>Title</label>
                        <div>
                            <Field name="title" component="input" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-6">
                        <label>Author</label>
                        <div>                            
                            <Field 
                                name="author" 
                                component={AuthorSelect} 
                                authors={this.props.authors}
                                currentAuthor={currentAuthor}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-group col-6">
                        <label>ISBN</label>
                        <div>
                            <Field name="isbn" component="input" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-row">                    
                    <div className="form-group col-12">
                        <label>Genres</label>
                        <div>
                            <Field 
                                name="genres"
                                component={GenresSelect}
                                genres={this.props.genres}
                                currentGenres={currentGenres}
                                className="form-control" 
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label>Summary</label>
                        <div>
                            <Field name="summary" component="textarea" className="form-control" />
                        </div>
                    </div>
                </div>

            </EditFormModal>
        )
    }
}

export default reduxForm<Book, Props & ModalProps>({
    form: 'bookEditForm',
    enableReinitialize: true
})(BookEditForm)