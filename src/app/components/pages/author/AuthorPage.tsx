import React, { Component } from 'react';

import Toolbar from './toolbar/AuthorToolbar';
import Table from './table/AuthorTableContainer';
import CreateForm from './form/AuthorCreateFormContainer';
import EditForm from './form/AuthorEditForm';

interface Props {
    isGetDetailSucceed: boolean,
    isCreateSucceed: boolean,
    isUpdateSucceed: boolean,
    isDeleteSucceed: boolean
}

interface State {
    showCreateForm: boolean,
    showEditForm: boolean,
    successMessage: string | null
}

class AuthorPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            showCreateForm: false,
            showEditForm: false,
            successMessage: null
        }
    }

    render() {
        const { showCreateForm, showEditForm } = this.state

        return (
            <div>
                <Toolbar onCreateClick={this.showCreateForm}/>
                <Table onAuthorClick={this.showEditForm}/>
                <CreateForm show={showCreateForm} onHide={this.hideCreateForm} />
                <EditForm show={showEditForm} handleDelete={() => {}} onHide={this.hideEditForm}/>
            </div>
        )
    }

    showCreateForm = () => {
        this.setState({ showCreateForm: true })
    }

    hideCreateForm = () => {
        this.setState({ showCreateForm: false })
    }

    showEditForm = () => {
        this.setState({ showEditForm: true });
    }

    hideEditForm = () => {
        this.setState({ showEditForm: false });
    }
}

export default AuthorPage;