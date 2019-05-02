import React, { Component } from 'react';
import Toolbar from './toolbar/GenreToolbar';
import CreateForm from './form/GenreCreateFormContainer';
import EditForm from './form/GenreEditFormContainer';
import Table from './table/GenreTableContainer';

interface Props {
    isGetDetailSucceed: boolean,
    isCreateSucceed: boolean,
    isUpdateSucceed: boolean,
    isDeleteSucceed: boolean
}

interface State {
    showCreateForm: boolean,
    showEditForm: boolean
}

class GenrePage extends Component<Props, State> {
    constructor(props: any) {
        super(props)

        this.state = { showCreateForm: false, showEditForm: false }
    }

    componentWillReceiveProps(nextProps: Props) {
        this.handleIfGetDetailSucceed(nextProps);
        this.handleIfCreateSucceed(nextProps);
        this.handleIfUpdateSucceed(nextProps);
        this.handleIfDeleteSucceed(nextProps);
    }

    render() {
        const { showCreateForm, showEditForm } = this.state;

        return (
            <div>
                <Toolbar onCreateClick={this.showCreateForm}/>
                <Table />
                <CreateForm show={showCreateForm} onHide={this.hideCreateForm}/>
                <EditForm show={showEditForm} onHide={this.hideEditForm} />
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
            }
        }
    }

    handleIfUpdateSucceed(nextProps: Props) {
        if (this.props.isUpdateSucceed !== nextProps.isUpdateSucceed) {
            if (nextProps.isUpdateSucceed) {
                this.hideEditForm()
            }
        }
    }

    handleIfDeleteSucceed(nextProps: Props) {
        if (this.props.isDeleteSucceed !== nextProps.isDeleteSucceed) {
            if (nextProps.isDeleteSucceed) {
                this.hideEditForm()
            }
        }
    }

    hideCreateForm = () => {
        this.setState({ showCreateForm: false });
    }

    showCreateForm = () => {
        this.setState({ showCreateForm: true });
    }

    showEditForm = () => {
        this.setState({ showEditForm: true });
    }

    hideEditForm = () => {
        this.setState({ showEditForm: false });
    }

}

export default GenrePage;