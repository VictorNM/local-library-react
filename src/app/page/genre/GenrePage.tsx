import React, { Component } from 'react';
import GenreToolbar from './toolbar/GenreToolbar';
import GenreCreateFormContainer from './form/GenreCreateFormContainer';
import GenreEditFormContainer from './form/GenreEditFormContainer';
import GenreTableContainer from './table/GenreTableContainer';

interface State {
    showCreateForm: boolean,
    showEditForm: boolean
}

class GenrePage extends Component<{}, State> {
    constructor(props: any) {
        super(props)

        this.state = { showCreateForm: false, showEditForm: false }

        this.handleCreateFormShow = this.handleCreateFormShow.bind(this);
        this.handleCreateFormClose = this.handleCreateFormClose.bind(this);
        this.handleEditFormShow = this.handleEditFormShow.bind(this);
        this.handleEditFormClose = this.handleEditFormClose.bind(this);
    }

    handleCreateFormClose() {
        this.setState({ showCreateForm: false });
    }

    handleCreateFormShow() {
        this.setState({ showCreateForm: true });
    }

    handleEditFormShow() {
        this.setState({ showEditForm: true });
    }

    handleEditFormClose() {
        this.setState({ showEditForm: false });
    }


    render() {
        const { showCreateForm, showEditForm } = this.state;

        return (
            <div>
                <GenreToolbar onClick={this.handleCreateFormShow}/>
                <GenreTableContainer onGenreClick={this.handleEditFormShow}/>
                <GenreCreateFormContainer show={showCreateForm} onHide={this.handleCreateFormClose}/>
                <GenreEditFormContainer show={showEditForm} onHide={this.handleEditFormClose} />

            </div>
        )
    }

}

export default GenrePage;