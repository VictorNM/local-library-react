import React from 'react';
import Select from 'react-select';

interface Genre {
    id: number,
    name: string
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

export default GenresSelect;