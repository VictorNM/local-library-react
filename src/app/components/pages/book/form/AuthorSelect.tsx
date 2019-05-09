import React from 'react';
import Select from 'react-select';

interface Author {
    id: number,
    name: string
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

export default AuthorSelect;