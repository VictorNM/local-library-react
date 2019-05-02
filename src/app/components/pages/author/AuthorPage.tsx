import React, { Component } from 'react';

import Toolbar from './toolbar/AuthorToolbar';
import Table from './table/AuthorTable';
import CreateForm from './form/AuthorCreateForm';

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
        const { showCreateForm } = this.state

        return (
            <div>
                <Toolbar onCreateClick={this.showCreateForm}/>
                <Table authors={[]} onLoad={() => {}} onAuthorClick={() => {}}/>
                <CreateForm show={showCreateForm} onHide={this.hideCreateForm} />
            </div>
        )
    }

    showCreateForm = () => {
        this.setState({ showCreateForm: true })
    }

    hideCreateForm = () => {
        this.setState({ showCreateForm: false })
    }
}

export default AuthorPage;