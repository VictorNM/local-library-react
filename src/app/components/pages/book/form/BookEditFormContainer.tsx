import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import BookEditForm from './BookEditForm';
import rootActions from '../../../../modules/rootActions';
import rootSelector from '../../../../modules/rootSelector';
import { Book } from '../../../../../dto';

const bookActions = rootActions.bookActions;

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        show: ownProps.show,
        authors: rootSelector.getAllAuthorsWithIdAndName(state),
        genres: rootSelector.getAllGenres(state),
        initialValues: rootSelector.getCurrentBook(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: any) => {
    return {
        onSubmit: (book: Book) => dispatch(bookActions.updateBookAsync(book)),
        onHide() {
            ownProps.onHide();
            dispatch(bookActions.clearCurrentBook());
        },
        handleDelete(id: number) {
            dispatch(bookActions.deleteBookAsync(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookEditForm);