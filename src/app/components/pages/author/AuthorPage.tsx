import React, { Component } from 'react';

import Toolbar from './toolbar/AuthorToolbar';
import Table from './table/AuthorTableContainer';
import CreateForm from './form/AuthorCreateFormContainer';
import EditForm from './form/AuthorEditFormContainer';
import SuccessModal from '../../common/success-modal';

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

    componentWillReceiveProps(nextProps: Props) {
        this.handleIfGetDetailSucceed(nextProps);
        this.handleIfCreateSucceed(nextProps);
        this.handleIfUpdateSucceed(nextProps);
        this.handleIfDeleteSucceed(nextProps);
    }

    render() {
        const { showCreateForm, showEditForm, successMessage } = this.state

        return (
            <div>
                <Toolbar onCreateClick={this.showCreateForm}/>
                <Table />
                <CreateForm show={showCreateForm} onHide={this.hideCreateForm} />
                <EditForm show={showEditForm} onHide={this.hideEditForm}/>
                { successMessage ? <SuccessModal show={true} message={successMessage} onHide={this.clearSuccessMessage} /> : null }
            </div>
        )
    }

    handleIfGetDetailSucceed(nextProps: Props) {
        if (this.props.isGetDetailSucceed !== nextProps.isGetDetailSucceed) {
            if (nextProps.isGetDetailSucceed) {
                this.showEditForm()
            }
        }
    }

    handleIfCreateSucceed(nextProps: Props) {
        if (this.props.isCreateSucceed !== nextProps.isCreateSucceed) {
            if (nextProps.isCreateSucceed) {
                this.hideCreateForm()
                this.setSuccessMessage('Create successfully')
            }
        }
    }

    handleIfUpdateSucceed(nextProps: Props) {
        if (this.props.isUpdateSucceed !== nextProps.isUpdateSucceed) {
            if (nextProps.isUpdateSucceed) {
                this.hideEditForm()
                this.setSuccessMessage('Update successfully')
            }
        }
    }

    handleIfDeleteSucceed(nextProps: Props) {
        if (this.props.isDeleteSucceed !== nextProps.isDeleteSucceed) {
            if (nextProps.isDeleteSucceed) {
                this.hideEditForm()
                this.setSuccessMessage('Delete successfully')
            }
        }
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

    setSuccessMessage = (message: string) => {
        this.setState({ successMessage: message })
    }

    clearSuccessMessage = () => {
        this.setState({ successMessage: null })
    }
}

export default AuthorPage;