import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import AuthorCreateForm from './AuthorCreateForm';
import rootActions from '../../../../modules/rootActions';
import { Author } from '../../../../../dto';

const authorActions = rootActions.authorActions

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        show: ownProps.show,
        onHide: ownProps.onHide
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        onSubmit: (author: Author) => dispatch(authorActions.createAuthorAsync(author))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorCreateForm);