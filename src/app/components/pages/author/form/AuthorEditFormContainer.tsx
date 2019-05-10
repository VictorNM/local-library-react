import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import AuthorEditForm from './AuthorEditForm';
import rootActions from '../../../../modules/rootActions';
import rootSelector from '../../../../modules/rootSelector';
import RootState from '../../../../modules/rootState'
import { Author } from '../../../../../dto';

const authorActions = rootActions.authorActions;
const bookActions = rootActions.bookActions;

const mapStateToProps = (state: RootState, ownProps: any) => {
    return {
        show: ownProps.show,
        initialValues: rootSelector.getCurrentAuthor(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: any) => {
    return {
        onSubmit: (author: Author) => dispatch(authorActions.updateAuthorAsync(author)),
        onHide() {
            ownProps.onHide();
            dispatch(authorActions.clearCurrentAuthor());
        },
        handleDelete(id: number) {
            dispatch(authorActions.deleteAuthorAsync(id))
        },
        onBookClick(bookId: number) {
            dispatch(bookActions.getBookDetailAsync(bookId));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorEditForm);